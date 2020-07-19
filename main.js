// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.getElementById('modal')
const modalMessage = document.getElementById('modal-message')

function heartButtonEvent() {
  document.addEventListener('click', e => {
    const element = e.target

    if (element.matches('.like-glyph')) {
      if (element.textContent == EMPTY_HEART) {
        serverRequest(element)
        console.log('server request was sent')
      }
      if (element.textContent == FULL_HEART) {
        element.classList.remove('activated-heart')
        element.textContent = EMPTY_HEART
      }
    }
  })
}

function serverRequest(heartElement) {
  mimicServerCall()
    .then(() => {
      heartElement.classList.add('activated-heart')
      heartElement.textContent = FULL_HEART
    })
    .catch(err => handleHeartRequestError(err))
}

function handleHeartRequestError(errorMessage) {
  modalMessage.textContent = errorMessage
  modal.classList.remove('hidden')
  setTimeout(() => {
    modal.classList.add('hidden')
  }, 2000)
}

heartButtonEvent()

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = 'http://mimicServer.example.com', config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2
      if (isRandomFailure) {
        reject('Random server error. Try again.')
      } else {
        resolve('Pretend remote server notified of action!')
      }
    }, 0)
  })
}
