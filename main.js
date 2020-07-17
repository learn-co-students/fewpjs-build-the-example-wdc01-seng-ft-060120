// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded",() => 
{
  errorHidden();
  document.addEventListener("click",likePost);
});

function likePost(e)
{  
  tgt = e.target
  if (tgt.className === 'like-glyph')
  {
    mimicServerCall()
    .then((msg) => toggleHeart(tgt,msg))
    .catch((error) => errorHidden(false,error))
  }  
}
function toggleHeart(span,msg)
{
  if (msg === "Pretend remote server notified of action!")
    {
      if (span.className === "activated-heart")
      {
          span.innerText = EMPTY_HEART;
          span.className = "";
      }else
      {
          span.innerText = FULL_HEART;
          span.className = 'activated-heart';
      }
    }
    return msg
}
function errorHidden(flag=true,error)
{
  const errorDiv = document.getElementById('modal');
  const p = errorDiv.querySelector('p');  
  if (flag)
  {
    errorDiv.className = 'hidden'
    p.innerText = "";    
  }else
  {
    errorDiv.className = "";
    p.innerText = error;
    setTimeout(errorHidden,5000);    
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
