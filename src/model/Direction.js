import Lexer from './Lexer'

/**
 * Direction := placement (wedge | dynamics | db-quote | without-space)
 * placement := '/' | '\'
 **/
export default class Direction {
  constructor(direction) {
    this.name = 'direction'

    if (direction.name === 'lexer') {
      this.parse(direction)
    } else if (typeof direction === 'string') {
      this.parse(new Lexer(direction))
    } else {
      this.placement = direction.placement

      const { words, wedge, dynamics } = direction
      if (words) this.words = words
      if (wedge) this.wedge = wedge
      if (dynamics) this.dynamics = dynamics
    }
  }

  parse(lexer) {
    lexer.token('/\\', lexeme => {
      this.placement = lexeme === '/' ? 'above' : 'below'
    })

    if (lexer.is('wedge')) {
      lexer.token('wedge')
      lexer.token('(')
      lexer.token('words', lexeme => { this.wedge = lexeme.trim() })
      lexer.token(')')
    } else if (lexer.is('dynamics')) {
      lexer.token('dynamics', lexeme => { this.dynamics = lexeme })
    } else if (lexer.is('"')) {  // Testing feature
      lexer.token('"')
      lexer.escwithout('"', 'esc-dq', lexeme => { this.words = lexeme })
      lexer.token('"')
    } else if (!lexer.is('comment-or-space')) {
      lexer.without('comment-or-space', lexeme => { this.words = lexeme.trim() })
    } else {
      lexer.error('Unknown direction')
    }
  }

  toString() {
    const strs = []
    const { placement, words, wedge, dynamics } = this

    strs.push(placement === 'above' ? '/' : '\\')

    if (words) strs.push(words)
    if (wedge) strs.push(`wedge(${wedge})`)
    if (dynamics) strs.push(dynamics)

    return strs.join('')
  }

  toJSON() {
    const { placement, words, wedge, dynamics } = this
    return { placement, words, wedge, dynamics }
  }
}
