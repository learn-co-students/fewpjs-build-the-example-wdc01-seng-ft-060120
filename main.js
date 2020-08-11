// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () =>{
    
    
  
})
function addHiddenToPage() {
    const modal = document.getElementById('modal')
    modal.className.add("hidden");
}

    document.addEventListener("click", (e) => {
        let heart = e.target

        if(heart.className === "like-glyph") {
        mimicServerCall()
        .then(() => {
            heart.classList.add('activated-heart');
            heart.innerText = FULL_HEART;
        })
        .catch((error) => {
        modal.classList.remove('hidden');
        document.querySelector('#modal-message').innerText = error;
        setTimeout(addHiddenToPage(), 5000)
        })
        
        }
        
        else if(heart.classList === 'like-glyph activated-heart') {
            mimicServerCall()
            .then(() => {
                heart.classList.remove('activated-heart');
                heart.innerText = EMPTY_HEART;
            })
            .catch((error) => {
                modal.className.remove('hidden');
                document.querySelector('#modal-message').innerText = error;
        setTimeout(addHiddenToPage(), 5000);
            })
        }

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
