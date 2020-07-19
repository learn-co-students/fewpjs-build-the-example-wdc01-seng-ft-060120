// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const errorModal = document.getElementById("modal")

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", function(){
  document.addEventListener("click", function(e){
    if(e.target.matches(".like-glyph")){
      if(e.target.matches(".activated-heart")){
        e.target.innerHTML = EMPTY_HEART;
        e.target.classList.remove("activated-heart")
      }
      else{
        mimicServerCall()
        .then((response) => {
          return response
        })
        .then((whatever) => {
          e.target.innerHTML = FULL_HEART
          e.target.classList.add("activated-heart")
        })
        .catch((error) => {
          toggleHidden(error);
          setTimeout(toggleHidden, 5000);
        })
      }
    }

  })
})

const toggleHidden = (error) => {
  if (errorModal.matches(".hidden")){
    let p = errorModal.querySelector("#modal-message")
    p.innerHTML = error
    errorModal.classList.remove("hidden")
  }
  else {
    errorModal.classList.add("hidden")
  }
}



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
