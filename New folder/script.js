// JS for Navigation bar
let navbtn = document.querySelector('#i-click');
let navlist = document.querySelector('.nav-bar');

navbtn.onclick = () => {
    navlist.classList.toggle('active')
    navbtn.classList.toggle('fa-times')
}