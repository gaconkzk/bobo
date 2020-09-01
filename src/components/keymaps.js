module.exports = [
  [
    {
      top: '~',
      bottom: '`',
    },
    {
      top: '!',
      bottom: '1',
    },
    {
      top: '@',
      bottom: '2',
    },
    {
      top: '#',
      bottom: '3',
    },
    {
      top: '$',
      bottom: '4',
    },
    {
      top: '%',
      bottom: '5',
    },
    {
      top: '^',
      bottom: '6',
    },
    {
      top: '&',
      bottom: '7',
    },
    {
      top: '*',
      bottom: '8',
    },
    {
      top: '9',
      bottom: '(',
    },
    {
      top: '0',
      bottom: ')',
    },
    {
      top: '_',
      bottom: '-',
    },
    {
      top: '+',
      bottom: '=',
    },
    {
      backspace: true,
      bottom: '&larr;',
    },
  ],[
    {
      tab: true,
      bottom: '&rarrb;'
    },
    {
      data: 'Q',
    },
    {
      data: 'W',
    },
    {
      data: 'E',
    },
    {
      data: 'R',
    },
    {
      data: 'T',
    },
    {
      data: 'Y',
    },
    {
      data: 'U',
    },
    {
      data: 'I',
    },
    {
      data: 'O',
    },
    {
      data: 'P',
    },
    {
      top: '{',
      bottom: '[',
    },
    {
      top: '}',
      bottom: ']',
    },
    // special key, this span on 2 rows
    {
      enter: true,
      top: '&larrhk;',
      bottom: '',
    },
  ],[
    {
      capslck: true,
      left: true,
      top: '&Omicron;',
      bottom: 'capslck',
    },
    {
      data: 'A',
    },
    {
      data: 'S',
    },
    {
      data: 'D',
    },
    {
      data: 'F',
      homekey: true,
    },
    {
      data: 'G',
    },
    {
      data: 'H',
    },
    {
      data: 'J',
      homekey: true,
    },
    {
      data: 'K',
    },
    {
      data: 'L',
    },
    {
      top: ':',
      bottom: ';',
    },
    {
      top: '"',
      bottom: '\'',
    },
    {
      top: '|',
      bottom: '\\',
    },
  ],[
    {
      left: true,
      shift: true,
      bottom: 'shift'
    },
    {
      data: 'Z',
    },
    {
      data: 'X',
    },
    {
      data: 'C',
    },
    {
      data: 'V',
    },
    {
      data: 'B',
    },
    {
      data: 'N',
    },
    {
      data: 'M',
    },
    {
      top: '<',
      bottom: ',',
    },
    {
      top: '>',
      bottom: '.',
    },
    {
      top: '?',
      bottom: '/',
    },
    {
      right: true,
      shift: true,
      bottom: 'shift'
    },
  ],[
    {
      left: true,
      bottom: 'ctrl'
    },
    {
      command: true,
      left: true,
      bottom: 'W',
    },
    {
      right: true,
      bottom: 'alt',
    },
    {
      space: true,
    },
    {
      left: true,
      bottom: 'alt',
    },
    {
      command: true,
      right: true,
      bottom: 'W',
    },
    {
      left: true,
      bottom: 'ctrl'
    },
    {
      arrow: true,
      left: true,
      data: '&ltrif;',
    },
    {
      arrow: true,
      up: true,
      data: '&utrif;',
    },
    {
      arrow: true,
      down: true,
      data: '&dtrif;',
    },
    {
      arrow: true,
      right: true,
      data: '&rtrif;',
    },
  ]
]