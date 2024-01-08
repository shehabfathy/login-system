var Email = document.querySelector('#mail')
var Name = document.querySelector('#name')
var pass= document.querySelector('#password')
var btn = document.querySelector('button')
var message = document.querySelector("#demo")
var list = [];
if(localStorage.getItem('Data' != null)) {
  list = JSON.parse(localStorage.getItem('Data'));
}
function signup() {
  var product = {
    name: Name.value,
    mail: Email.value,
    password : password.value,
  }
  if(checkempty() == true) {
    alertmessage('Fill All input','red')
  }else {
    if(checkmail() == true) {
       alertmessage('this email is invalid','red')
    }else {
              list.push(product);
    localStorage.setItem('Data',JSON.stringify(list))
    alertmessage('succes','green')
    window.location.href='index.html'
     clear()
    }
  }
}
btn.addEventListener('click',signup)
function clear() {
  Name.value ='';
  Email.value = '';
  password.value= '';
}
function checkempty() {
  if (Name.value == '' ||  Email.value == '' ||  password.value == '' ) {
    return true
  }else {
    return false
  }
}
function alertmessage(text,color) {
  message.classList.replace('d-none','d-block');
  message.innerHTML = text;
  message.style.color = color;
}
  function checkmail() {
  for(var i = 0;i<list.length;i++){
    if(list[i].mail == Email.value) {
      return true
    }else {
      return false
    }
  }
  } 




























































































