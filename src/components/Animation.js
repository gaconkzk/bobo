export function animation(node, { animation, duration, delay, infinite, repeat }) {
  const isAnimated = node.classList.contains('animate_animated')
  if (!isAnimated) {
    // animate not work with inline block
    let display = node.style.getPropertyValue('display')
    console.log(display)
    if (!display || display === 'inline') {
      node.style.setProperty('display', 'inline-block')
    }
    node.classList.add('animate__animated')
  }
  if (animation) {
    node.classList.add(`animate__${animation}`)
  }
  if (duration) {
    node.style.setProperty('--animate-duration', `${duration}s`)
  }
  if (delay) {
    node.style.setProperty('--animate-delay', `${delay}s`)
  }
  if (infinite) {
    node.classList.add('animate__infinite')
  } else if (repeat) {
    node.style.setProperty('--animate-repeat', `${repeat}`)
  }
}