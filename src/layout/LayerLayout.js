import AbstractLayout from './AbstractLayout'
import MusicDataLayout from './MusicDataLayout'

/* Ref: CellLayout */
export default class LayerLayout extends AbstractLayout {
  constructor(layer, style) {
    super()
    this.name = 'layer-layout'

    this.layer = layer
    layer.layout = this  // used by tie
    this.style = style
    this.dataLayout = new MusicDataLayout(layer.data, style)

    this.sticks = []  // will be filled by MeasureLayout
    this.dataLayout.sticks = this.sticks

    // this.width = this.minWidth and will be reflowed at align: justify
    this.height = this.dataLayout.dy + this.dataLayout.dy2
    this.dy2 = this.dataLayout.dy2
  }

  set position(pos) {
    super.position = pos
    let { x, by } = this

    this.dataLayout.position = { x, by }
  }

  toJSON() {
    const { dataLayout } = this
    return { 
      ...super.toJSON(), dataLayout
    }
  }
}
