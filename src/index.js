// SCROLLING
const D = document
const W = window
const images = D.querySelectorAll('section.image')

let currentKey = 0
const imageTopOffsets =
  Object.keys(images).map(
    key =>
      images[key].offsetTop
  )

W.activeImage = 0

W.addEventListener(
  'scroll',
  e => {
    const scrolled = W.scrollY

    let selectedImage = false
    Object.keys(imageTopOffsets).forEach(
      key => {
        const offset = imageTopOffsets[key]
        const nextOffset = imageTopOffsets[parseInt(key) + 1]

        if (offset + 50 < scrolled) {
          selectedImage = parseInt(key) + 1
        }
      }
    )

    if (selectedImage && W.activeImage !== selectedImage) {
      W.activeImage = selectedImage
      W.location.hash = 'image-' + selectedImage
    }
  }
)

// NAVIGATION
const up = D.createElement('a')
up.className = 'up'

const down = D.createElement('a')
down.className = 'down'

const container = D.createElement('div')
container.className = 'button-container'

up.addEventListener(
  'click',
  e => {
    console.log({active: W.activeImage})
  }
)

down.addEventListener(
  'click',
  e => {
    console.log({active: W.activeImage})
  }
)

container.appendChild(up)
container.appendChild(down)
D.body.appendChild(container)

