
var Emailinput = document.querySelector('#email');
var passwordinput = document.querySelector('#pass');
var btn = document.querySelector('button')
var message = document.querySelector('#demo')

  var list = [];

if(localStorage.getItem('Data') != null) {
 list = JSON.parse(localStorage.getItem('Data'));
}

function login() {
    if (checkempty() == true) {
        alertmessage('fill All input','red')
    }else {
            if(checkmailpassword() == true) {
              window.location.href= 'home.html'
            }else {
              alertmessage('this email or password is invalid','red')
            }
    }
  
}
btn.addEventListener('click',login)
function checkempty() {
  if ( Emailinput.value == '' ||  passwordinput.value == '' ) {
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


 function checkmailpassword() {
  for(var i = 0; i<list.length; i++){
     console.log(list[i].mail)
    if(list[i].mail == Emailinput.value && list[i].password == passwordinput.value) {
         localStorage.setItem('User',list[i].name)
      return true
    }else {
      return false
    }
  }
  }









































































// var Email = document.getElementById('email');
// var password = document.getElementById('pass');
// var btn = document.getElementById('Btn');
// var messagealert = document.getElementById('demo')

// var list = [];
// if(localStorage.getItem('tool') != null) {
//     list = JSON.parse(localStorage.getItem('tool'))
// }
// function logIn() {
//     if(checkmailpassword() == true) {
//        window.location.href='home.html'
//     }else{
//      message('sorry invalid mail','red')
//     }
// }
// btn.addEventListener('click',logIn)

// function checkmailpassword() {
//     for(var i = 0; i<list.length;i++) {
//     if(list[i].Email==mail.value && list[i].pass) {
//         return true;
//     }
//     }
// }

// function message(text,color) {
//      messagealert.classList.replace('d-none', 'd-block')
//      messagealert.innerHTML = text
//      messagealert.style.color = color

// }