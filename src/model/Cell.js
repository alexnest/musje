import Lexer from './Lexer'
import { lastItem } from '../utils/helpers'
import Time from './Time'
import Note from './Note'
import Rest from './Rest'
import Chord from './Chord'
import Multipart from './Multipart'
import Direction from './Direction'
import Bar from './Bar'
import Clef from './Clef'
import Key from './Key'

const ACCIDENTAL_TO_ALTER = { bb: -2, b: -1, n: 0, '': 0, '#': 1, '##': 2 }

/**
 * Cell := (Bar WS?)? ((Time | Clef | Key |  Note | Rest |
 *                     Chord | Multipart | Direction) WS?) (Bar WS?)?
 **/
export default class Cell {
  constructor(cell = { data: [] }) {
    this.name = 'cell'

    if (cell.name === 'lexer') {
      this.parse(cell)
    } else if (typeof cell === 'string') {
      this.parse(new Lexer(cell))
    } else {
      this.data = cell.data.map(dt => {
        switch (dt.name) {
          case 'time': return new Time(dt)
          case 'note': return new Note(dt)
          case 'rest': return new Rest(dt)
          case 'chord': return new Chord(dt)
          case 'multipart': return new Multipart(dt)
          case 'direction': return new Direction(dt)
          case 'bar': return new Bar(dt)
          case 'clef': return new Clef(dt)
          case 'key': return new Key(dt)
          default: throw new Error(`Unknown music data: ${dt}`)
        }
      })
    }

    this.setAlters()
    this.setModifications()
    this.linkTuplets()
    this.extractBars()
  }

  // Considering for 2D-linked list
  get up() {}
  get down()  {}
  get left() {}
  get right() {}

  // Support lyrics for multipart
  get firstLayerData() {
    if (this._firstLayerData) {
      return this._firstLayerData
    }

    this._firstLayerData = []

    this.data.forEach(dt => {
      if (dt.name === 'multipart') {
        this._firstLayerData = this._firstLayerData.concat(dt.layers[0].data)
      } else {
        this._firstLayerData.push(dt)
      }
    })

    return this._firstLayerData
  }

  // Support slurs for multipart
  get linearData() {
    if (this._linearData) {
      return this._linearData
    }

    this._linearData = []

    this.data.forEach(dt => {
      if (dt.name === 'multipart') {
        dt.layers.forEach(layer => {
          this._linearData = this._linearData.concat(layer.data)
        })
      } else {
        this._linearData.push(dt)
      }      
    })

    return this._linearData
  }

  parse(lexer) {
    this.data = []

    while(!lexer.eof) {
      if (lexer.is('time')) {
        this.data.push(new Time(lexer))
      } else if (lexer.is('note')) {
        this.data.push(new Note(lexer))
      } else if (lexer.is('rest')) {
        this.data.push(new Rest(lexer))
      } else if (lexer.is('multipart')) {
        this.data.push(new Multipart(lexer))
      } else if (lexer.is('chord')) {
        this.data.push(new Chord(lexer))
      } else if (lexer.is('direction')) {
        this.data.push(new Direction(lexer))
      } else if (lexer.is('bar')) {
        this.data.push(new Bar(lexer))
        if (this.data.length > 1) {
          lexer.skipWhite()
          break
        }
      } else if (lexer.is('==') || lexer.is('--') || lexer.is('lyrics-head')) {
        break
      } else {
        lexer.error('unknown music data in cell')
      }

      lexer.skipWhite()
    }
  }

  setAlters() {
    let currAccidental = { 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '' }

    const setAlter = pitch => {
      const { step, accidental } = pitch

      if (accidental) {
        currAccidental[step] = accidental
      }

      pitch.alter = ACCIDENTAL_TO_ALTER[currAccidental[step]]
    }

    const setDtAlter = dt => {
      switch (dt.name) {
        case 'note':
          setAlter(dt.pitch)
          return
        case 'chord':
          dt.pitches.forEach(setAlter)
          return
        case 'multipart':
          dt.layers.forEach(layer => {
            layer.data.forEach(setDtAlter)
          })
          return
      }
    }

    this.data.forEach(setDtAlter)
  }

  setModifications() {
    let actual, normal

    this.data.forEach(dt => {
      const { tuplet, duration } = dt

      if (tuplet && tuplet.type === 'begin') {
        actual = tuplet.actual
        normal = tuplet.normal
      }

      if (duration && actual) {
        duration.modification = { actual, normal }
      }

      if (tuplet && tuplet.type === 'end') {
        actual = undefined
        normal = undefined
      }
    })
  }

  linkTuplets() {
    let tupletBegin = {}

    this.data.forEach(dt => {
      const { tuplet } = dt

      if (!tuplet) {
        return
      }

      if (tuplet.type === 'begin') {
        tupletBegin = tuplet
      } else {
        tupletBegin.next = tuplet
      }
    })
  }

  extractBars() {
    const { data } = this

    if (data.length) {
      this.rightBar = lastItem(data).name === 'bar' ? data.pop() : new Bar('|')
      this.leftBar = data.length === 0 || data[0].name !== 'bar' ? new Bar('|') : 
                                                                   data.shift()
    } else {
      this.leftBar = new Bar('|')
      this.rightBar = new Bar('|')
    }
  }

  toString() {
    const data = []
    const beamed = []

    // Todo: leftBar for the first cell.
    const bardata = this.data.concat(this.rightBar)

    bardata.forEach(dt => {
      if (dt.name === 'dummy') return

      const { duration } = dt

      if (!duration || duration.type < 8) {
        return data.push(dt)
      }

      const { beams } = duration

      const isEnd = () => {
        return !beams.some(b => b.type === 'begin' || b.type === 'continue')
      }

      if (beams.some(beam => beam.type !== 'single')) {
        beamed.push(dt)
      } else {
        data.push(dt)
      }

      if (beamed.length > 0 && isEnd()) {
        data.push(beamed.join(''))
        beamed.length = 0
      }
    })

    return data.join(' ')
  }

  toJSON() {
    const { data, leftBar, rightBar } = this
    return { data, leftBar, rightBar }
  }
}
