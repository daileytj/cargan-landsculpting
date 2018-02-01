const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

function toggleNav(){
  if(navMenu.classList.contains('nav-active')){
    navMenu.classList.remove('nav-active');
  }
  else{
    navMenu.classList.add('nav-active');
  }
}

hamburger.addEventListener('click', toggleNav);
