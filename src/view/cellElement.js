import el from '../utils/el'
import noteElement from './noteElement'
import restElement from './restElement'
import chordElement from './chordElement'
import multipartElement from './multipartElement'
import timeElement from './timeElement'
import directionElement from './directionElement'
import barElement from './barElement'
import box from './box'

export default function cellElement(cellLayout) {
  const { dataLayout, shownLeftBarLayout,
          rightBarLayout, shownRightBarLayout } = cellLayout

  return el.create('g', [
    // box(cellLayout, 'orange'),
    // box(dataLayout, 'blue'),

    shownLeftBarLayout ? barElement(shownLeftBarLayout) : [],

    dataLayout.layouts.map(layout => {
      // return box(layout, 'orange')

      if ('note' in layout) return noteElement(layout)
      if ('rest' in layout) return restElement(layout)
      if ('chord' in layout) return chordElement(layout)
      if ('time' in layout) return timeElement(layout)
      if ('direction' in layout) return directionElement(layout)
      if ('multipart' in layout) return multipartElement(layout)
    }),

    shownRightBarLayout ? barElement(shownRightBarLayout) :
                          barElement(rightBarLayout)
  ])
}
