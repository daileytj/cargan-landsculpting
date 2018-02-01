const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navItems = Array.from(document.querySelectorAll(".nav-menu a"));
const hamburgerLink = document.querySelector(".hamburger-link");

function toggleNav(e){
  // event.stopPropogation();
  if(navMenu.classList.contains('nav-active')){
    navMenu.classList.remove('nav-active');
  }
  else{
    navMenu.classList.add('nav-active');

  }
}

function removeNavActive(e){
  // event.stopPropogation();
  navMenu.classList.remove('nav-active');
}

navItems.forEach(item => {
  item.addEventListener('click', removeNavActive);
})

// hamburger.addEventListener('click', toggleNav);
hamburgerLink.addEventListener('click', toggleNav);


//disable parralax
var ismobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
if (ismobile){
 const hero = document.querySelector('.hero');
 hero.classList.remove('parallax');
}
