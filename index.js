const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navItems = Array.from(document.querySelectorAll(".nav-menu a"));

function toggleNav(){
  if(navMenu.classList.contains('nav-active')){
    navMenu.classList.remove('nav-active');
  }
  else{
    navMenu.classList.add('nav-active');

  }
}

function removeNavActive(){
  navMenu.classList.remove('nav-active');
}

navItems.forEach(item => {
  item.addEventListener('click', removeNavActive);
})

hamburger.addEventListener('click', toggleNav);


//disable parralax
var ismobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
if (ismobile){
 const hero = document.querySelector('.hero');
 hero.classList.remove('parallax');
}
