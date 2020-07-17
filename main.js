// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", (e) => {
  document.addEventListener("click", (e) => {
    if(e.target.className = 'like-glyph'){
      mimicServerCall()
      .then(resp => {
        if(e.target.innerHTML == EMPTY_HEART){
          console.log('hit')
          e.target.classList.add('activated-heart');
          e.target.innerHTML = FULL_HEART;
        } else{
          console.log('back')
          e.target.classList.remove('activated-heart');
          e.target.innerHTML = EMPTY_HEART;
        }
      })
      .catch(error => {
        const errModal = document.getElementById("modal");
        errModal.classList -= "hidden";
        errModal.innerText = `${error}`;
        setTimeout(function(){errModal.classList.add("hidden")}, 5000);
      });
    }
  });
});


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
