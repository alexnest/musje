import AbstractLayout from './AbstractLayout'

export default class DirectionLayout extends AbstractLayout {
  constructor(direction, style) {
    super()
    this.name = 'direction-layout'
    this.direction = direction
    this.style = style
  }
}
