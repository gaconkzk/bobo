// since we never use 0 and 1 char, so I'm use those for
// status code
const NONE = 0
const GOOD = 1

const isError = (c) => {
  return c.status && c.status !== 0 && c.status !== 1
}

const htmlChar = (c) => {
  switch (c) {
    case '\n':
      return '&larrhk;'
    case ' ':
      return '&nbsp;'
    default:
      return c
  }
}

class TypingBoard {
  constructor(text) {
    if (!text || !text.length) {
      throw new Error('Hey gimme some real text')
    }
    this.data = text.split('').map(c => ({
      char: c,
      status: NONE,
    }))
    
    this.tabspace = 2
    this.cursor = 0
    this.blinking = false
  }

  reset() {
    this.data.forEach(c => c.status = NONE)
    this.cursor = 0
  }

  accuracy() {
    let corrected = this.data.length - this.errors()
    return (corrected * 100 / this.data.length)
  }

  lines() {
    return this.data.filter(d => d.char === '\n').length
  }

  line() {
    return this.data.slice(0, this.cursor).filter(d => d.char === '\n').length
  }

  progress() {
    return this.cursor * 100 / this.data.length
  }

  errors() {
    return this.data.filter(d => isError(d)).length
  }

  type(char) {
    if (this.cursor < this.data.length) {
      let orig = this.data[this.cursor]

      orig.status = char === orig.char ? GOOD : char
      this.cursor++
    }
  }

  char() {
    if (this.cursor < this.data.length) {
      return this.data[this.cursor].char
    }
    return null
  }

  backspace() {
    // this.data[this.cursor].status = NONE
    if (this.cursor > 0) {
      this.cursor--
      this.data[this.cursor].status = NONE
    }
  }

  tab() {
    // for tab - it is the easiest way :D, tab = a fixed number of spaces
    // i'll correct this if having more time
    [...Array(this.tabspace).keys()].forEach(s => {
      this.typeAt(' ', this.cursor + s)
    })

    this.cursor += this.tabspace
  }

  typeAt(char, i, updateCursor = false) {
    if (i >= 0 && i < this.data.length) {
      let orig = this.data[i]
      orig.status = char === orig.char ? GOOD : char

      if (updateCursor) {
        this.cursor = i++
      }
    }
  }

  _close(op) {
    return op === GOOD ? '</span>' : (op === NONE ? '' : '</mark>')
  }

  html() {
    // slow version - we re-calculate all html
    // I need a faster version - we only re-calculate around the cursor
    // a caching mechanism - not sure how for now

    let currentOpen = NONE
    
    let html = ''
    for (let i = 0; i < this.data.length; i++) {
      if (this.blinking && i === this.cursor) {
        html += '<em>'
      }

      let item = this.data[i]

      switch (item.status) {
        case NONE:
          if (NONE !== currentOpen) {
            html += this._close(currentOpen)

            currentOpen = NONE
          }
          html += htmlChar(item.char)
          break
        case GOOD:
          if (currentOpen !== GOOD) {
            html += this._close(currentOpen)
            html += '<span>'
            
            currentOpen = GOOD
          }
          html += htmlChar(item.char)
          break
        default:
          // error come here
          if (!isError(currentOpen)) {
            html += this._close(currentOpen)
            html += '<mark>'

            currentOpen = item.status
          }
          html += htmlChar(item.status)
      }

      // breaking line
      if (item.char === '\n') {
        html += '<br />'
      }

      if (this.blinking && i === this.cursor) {
        html += '</em>'
      }
    }

    // close for the last one
    html += this._close(currentOpen)

    return html
  }
}

export default TypingBoard