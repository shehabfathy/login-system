var paragraph = document.querySelector('#demo');
var btn = document.querySelector('button');
if(localStorage.getItem('User') != null) {
  paragraph.innerHTML= `Welcome ${localStorage.getItem('User')}`
}

btn.addEventListener('click',function() {
    window.location.href= 'index.html';
    localStorage.removeItem('User');
})