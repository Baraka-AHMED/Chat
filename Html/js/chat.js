

function openclose(id)
{
  if (document.getElementById(id).style.display == 'block') {
       document.getElementById(id).style.display = 'none';
  }
  else {
       document.getElementById(id).style.display = 'block';
  }
}

const messagepost = document.querySelector('.messagepost')
const button = document.querySelector('button[type="button"]')
const input = document.querySelector('input[type="text"]')

function message(msg) {
  let newP = document.createElement('p')
  let newContent = document.createTextNode(msg)
  newP.appendChild(newContent)
  messagepost.append(newP)
};

function post() {
    message(input.value)
    input.value = ''
    
    function scrollToBottom() {
      messageFeed.scrollTop = messageFeed.scrollHeight
    }
    scrollToBottom()
  };
  function onRowAdded() {
    $('.chat-container').animate({
      scrollTop: $('.chat-container').prop('scrollHeight')
    });
  };  

function keyPress(e) {
  if (e.keyCode === 13) {
    
    function removeActive() {
      button.className -= 'active'
    }

    button.className += ' active'
	removeActive
    setTimeout(removeActive, 1500000)
    post()
  }
}

window.addEventListener('keyup', keyPress);
button.onclick = post;
