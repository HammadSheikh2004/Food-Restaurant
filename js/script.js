let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');
let nav = document.querySelector('.header')

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(document.documentElement.scrollTop > 100){
        nav.classList.add('active');
    }
    else{
        nav.classList.remove('active');
    }
}