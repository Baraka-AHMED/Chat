

/* function openclose(id)
{
 if (document.getElementById(id).style.display == 'block') {
    document.getElementById(id).style.display = 'none';
}
  else {
       document.getElementById(id).style.display = 'block';
  }
}*/


const messagepost = document.querySelector('.messagepost')
const button = document.querySelector('button[type="button"]')
const textarea = document.querySelector('textarea')

function message(msg) {
  let newP = document.createElement('p')
  let newContent = document.createTextNode(msg)
  newP.appendChild(newContent)
  messagepost.append(newP)
};
function dm (info) {
  let newspan = document.createElement('span')
  let newcontent = document.createTextNode(info)
  newspan.append(newcontent)
  messagepost.append(newspan)
}
function post() {
  if (textarea.value != 0 || (textarea.value).trim().length) {
    message(textarea.value)
    textarea.value = ''
    date()}
    
    
    
    function scrollToBottom() {
      messagepost.scrollTop = messagepost.scrollHeight
    }
    
    scrollToBottom()
  };

function date (){
  var date = new Date()
  var h=date.getHours();
if (h<10) {h = "0" + h}
var m=date.getMinutes();
if (m<10) {m = "0" + m}

  dm("_____"+h+":"+m+"_____")

}

function keyPress(e) {
  if (e.keyCode === 13) {
    
    function removeActive() {
      button.className -= 'active'
    }

    button.className += ' active'
	removeActive
    setTimeout(removeActive, 1000)
    post()
  }
}

window.addEventListener('keyup', keyPress);
document.getElementById("send").onclick = post;


function openclose() {
  $( "#chat" ).slideToggle( "slow" );
  $(this).find("i").toggleClass("far fa-times");
};

document.getElementById('msgbutton').onclick = openclose