import Lexer from './Lexer'
import { makeToJSON } from '../utils/helpers'
import Time from './Time'
import Note from './Note'
import Rest from './Rest'
import Chord from './Chord'
import Multipart from './Multipart'
import Direction from './Direction'
import Bar from './Bar'

const ACCIDENTAL_TO_ALTER = { bb: -2, b: -1, n: 0, '': 0, '#': 1, '##': 2 }

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
          default: throw new Error(`Music data: ${dt}`)
        }
      })
    }
    this.setAlters()
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
      } else if (lexer.is('chord')) {
        this.data.push(new Chord(lexer))
      } else if (lexer.is('multipart')) {
        this.data.push(new Multipart(lexer))
      } else if (lexer.is('direction')) {
        this.data.push(new Direction(lexer))
      } else if (lexer.is('bar')) {
        this.data.push(new Bar(lexer))
        lexer.skipWhite(); break
      } else {
        lexer.error('music data in cell')
      }
      lexer.skipWhite()
    }
  }

  setAlters() {
    const currAccidental = { 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '' }
    const setAlter = pitch => {
      const { step, accidental } = pitch
      if (accidental) currAccidental[step] = accidental
      pitch.alter = ACCIDENTAL_TO_ALTER[currAccidental[step]]
    }
    this.data.forEach(dt => {
      switch (dt.name) {
        case 'note': return setAlter(dt.pitch)
        case 'chord': return dt.pitches.forEach(setAlter)
        case 'multipart': return
      }
    })
  }

  toString() {
    // const data = []
    // const beamed = []
    // let bardata = this.leftBar.value === '|' ? [] : [this.leftBar]
    // bardata = bardata.concat(this.data, this.rightBar)
    // bardata.forEach(dt => {
    //   const { duration } = dt
    //   if (!duration || duration.type < 8) return data.push(dt)
    //   const { beams } = duration
    //   const isEnd = () => {
    //     return !beams.some(b => b.type === 'begin' || b.type === 'continue')
    //   }
    //   if (beams.some(beam => beam.type !== 'single')) {
    //     beamed.push(dt)
    //   } else {
    //     data.push(dt)
    //   }
    //   if (beamed.length > 0 && isEnd()) {
    //     data.push(beamed.join(''))
    //     beamed.length = 0
    //   }
    // })
    return this.data.join(' ')
  }

  toJSON = makeToJSON('data')
}
