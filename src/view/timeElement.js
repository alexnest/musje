import el from '../utils/el'

export default function timeElement(timeLayout) {
  const { time, beatsLayout, lineLayout, beatTypeLayout } = timeLayout

  const sty1 = `font-family: ${beatsLayout.family}
                font-size: ${beatsLayout.size}
                text-anchor: middle`

  const sty2 = `font-family: ${beatTypeLayout.family}
                font-size: ${beatTypeLayout.size}
                text-anchor: middle`

  return el.create('g', [
    el('text', { ...beatsLayout.cxby, style: sty1 }, time.beats),
    el('rect', lineLayout.rect),
    el('text', { ...beatTypeLayout.cxby, style: sty2 }, time.beatType)
  ])
}
