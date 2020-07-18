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
//   hideError();
//   document.addEventListener('click', heartClick);
// })

// function changeModal(state, error) {
//   const errorModal = document.getElementById('modal');
  
//   errorModal.className = state;
//   errorModal.innerText = error;
//   //console.log(errorModal);
// }

// function displayError(error) {
//   changeModal("", error);
// }

// function hideError() {
//   changeModal("hidden", "");
// }

// function heartClick(event) {
//   if(event.target.className === 'like-glyph')
//   {
//     mimicServerCall()
//     .then((response) => toggleHeart(event.target, response))
//     .catch((error) => displayError(error))
//   }
// }

// function toggleHeart(span, response) {
//   if(response === "Pretend remote server notified of action!"){
//     if(span.innerText = '♡'){
//       span.innerText = '♥';
//       span.className = 'activated-heart';
//     } else {
//       console.log('hit else');
//       span.innerText = '♥';
//       span.className = '';
//     }
//   }
//   return span;
// }

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
