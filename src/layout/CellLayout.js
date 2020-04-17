import AbstractLayout from './AbstractLayout'
import NoteLayout from './NoteLayout'
import RestLayout from './RestLayout'
import ChordLayout from './ChordLayout'
import MultipartLayout from './MultipartLayout'
import TimeLayout from './TimeLayout'
import BarLayout from './BarLayout'
import Bar from '../model/Bar'
import { max } from '../utils/helpers'

const CONVERT_LEFT_BAR = { ':|': '|', ':|:': '|:' }
const CONVERT_RIGHT_BAR = { '|:': '|', ':|:': ':|' }

export default class CellLayout extends AbstractLayout {
  constructor(cell, style) {
    super()
    this.name = 'cell-layout'
    this.cell = cell
    this.style = style
    this.dataLayout = new DataLayout(cell.data, style)

    this.leftBarLayout = new BarLayout(cell.leftBar, style)
    this.rightBarLayout = new BarLayout(cell.rightBar, style)

    this.setMinWidth()

    // Tmp
    this.width = this.minWidth
    this.height = this.dataLayout.height
  }

  addShownLeftBar() {
    const { cell } = this
    let { value } = cell.leftBar
    value = CONVERT_LEFT_BAR[value]
    cell.shownLeftBar = new Bar(value)
    this.shownLeftBarLayout = new BarLayout(cell.shownLeftBar, this.style)
    this.shownLeftBarLayout.position = this.leftBarLayout.xy
  }

  addShownRightBar() {
    const { cell } = this
    let { value } = cell.rightBar
    value = CONVERT_RIGHT_BAR[value]
    if (!value) return
    cell.shownRightBar = new Bar(value)
    this.shownRightBarLayout = new BarLayout(cell.shownRightBar, this.style)
    this.shownRightBarLayout.position = this.rightBarLayout.xy
  }

  setMinWidth() {
    const { paddingLeft, paddingRight } = this.style.cell
    const { leftBar, rightBar } = this.cell
    this.minWidth = this.dataLayout.minWidth + paddingLeft + paddingRight +
                    (leftBar ? this.leftBarLayout.width / 2 : 0) +
                    (rightBar ? this.rightBarLayout.width / 2 : 0)
  }

  set position(pos) {
    super.position = pos
    const { x, x2, y2 } = this
    const { paddingLeft } = this.style.cell
    const { leftBar, rightBar } = this.cell
    if (leftBar) this.leftBarLayout.position = { x, y2 }
    this.dataLayout.position = { x: x + paddingLeft, y2 }
    if (rightBar) this.rightBarLayout.position = { x2, y2 }
  }

  toJSON() {
    const { dataLayout, leftBarLayout, rightBarLayout } = this
    return { ...super.toJSON(), dataLayout, leftBarLayout, rightBarLayout }
  }
}

class DataLayout extends AbstractLayout {
  constructor(data, style) {
    super()
    this.name = 'data-layout'
    this.data = data
    this.style = style
    this.setLayouts()
    this.setMinWidth()

    // Tmp
    this.width = this.minWidth
    this.setHeight()
  }

  setLayouts() {
    const { data, style } = this
    this.layouts = []
    data.forEach(dt => {
      switch (dt.name) {
        case 'note':
          this.layouts.push(new NoteLayout(dt, style)); break
        case 'rest':
          this.layouts.push(new RestLayout(dt, style)); break
        case 'chord':
          this.layouts.push(new ChordLayout(dt, style)); break
        case 'multipart':
          this.layouts.push(new MultipartLayout(dt, style)); break
        case 'time':
          this.layouts.push(new TimeLayout(dt, style)); break
        case 'direction':
          this.layouts.push(new DirectionLayout(dt, style)); break
      }
    })
  }

  setMinWidth() {
    const { dataSep } = this.style.cell
    const { layouts } = this
    const { length } = layouts
    this.minWidth = length ? (length - 1) * dataSep : 0
    layouts.forEach(layout => { this.minWidth += layout.width })
  }

  setHeight() {
    this.height = max(this.layouts.map(layout => layout.height))
    this.height = max([0, this.height])
  }

  set position(pos) {
    super.position = pos
    const { dataSep } = this.style.cell
    let { x, y2 } = this
    this.layouts.forEach(layout => {
      layout.position = { x, y2 }
      x = layout.x2 + dataSep
    })
  }

  toJSON() {
    const { layouts } = this
    return { ...super.toJSON(), layouts }
  }
}
