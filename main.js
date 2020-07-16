// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
  const errorModal = document.querySelector('#modal');

  const addHiddenClassToModal = () => {
    errorModal.classList.add('hidden');
  }

  document.addEventListener('click', (e) => {
    if (e.target.className === 'like-glyph') {
      mimicServerCall()
      .then(() => {
        e.target.classList.add('activated-heart');
        e.target.innerText = FULL_HEART;
      })
      .catch((error) => {
        errorModal.classList.remove('hidden');
        errorModal.querySelector('#modal-message').innerText = error;
        setTimeout(addHiddenClassToModal, 5000);
      })
    }
    else if (e.target.className === 'like-glyph activated-heart') {
      mimicServerCall()
      .then(() => {
        e.target.classList.remove('activated-heart');
        e.target.innerText = EMPTY_HEART;
      })
      .catch((error) => {
        errorModal.classList.remove('hidden');
        errorModal.querySelector('#modal-message').innerText = error;
        setTimeout(addHiddenClassToModal, 5000);
      })
    }
  })
})



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
