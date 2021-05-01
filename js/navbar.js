
const ul = document.querySelector('#navbar_list');

const ulChildren = ul.children;

//on clicking an item of navbar, it scroll to it's section
const li = document.querySelectorAll('#navbar_list li');
li.forEach(element => {
  element.addEventListener('click', function () {
    const section = document.getElementById(element.textContent);
    section.scrollIntoView({behavior: 'smooth', block: 'start'});

    //add the active class to the nav item of the viewport section
    for(let i=0; i<ulChildren.length; i++) {
      //remove active class form the other items
      ulChildren[i].classList.remove('active_section');
      element.classList.add('active_section');
      
    }
  });
});

//Hide navbar when not scrolling
const navbar = document.querySelector('#navbar_menu');

//navbar position fixed

window.addEventListener('scroll', () => {
  if(window.scrollY > 20){
    if(window.innerWidth < 600) {
      navbar.style.marginTop = '-55px';
    } else {
      navbar.style.marginTop = '-45px';
    }
  }
});


let scrollTimeout = null;
let scrollendDelay = 1000; // ms

window.addEventListener('scroll', function() {

  if ( scrollTimeout === null ) {
    scrollbeginHandler();

  } else {
    clearTimeout( scrollTimeout );
    }
  scrollTimeout = setTimeout( scrollendHandler, scrollendDelay );
  
});

function scrollbeginHandler() {
    // this code executes when scroll begins
    navbar.style.marginTop = '0';
}


let mouse = false;

function scrollendHandler() {
    // this code executes when scroll ends
    if(mouse){
      navbar.style.marginTop = '-45px';
    } else if(window.scrollY < 40) {
      navbar.style.marginTop = '0';

    } else {
      if(window.innerWidth < 600) {
        navbar.style.marginTop = '-200px';
      } else {
        navbar.style.marginTop = '-125px';

        scrollTimeout = null;
      }
    }
}

//Show navbar when mouse is over it
navbar.addEventListener('mouseover', () => {
  mouse = true;
  if(window.scrollY < 40) {
    navbar.style.marginTop = '0';
  } else {
    navbar.style.marginTop = '-45px';
  }
});

//Hide navbar when mouse leaves
navbar.addEventListener('mouseleave', function() {
  if(window.scrollY > 40) {
    navbar.style.marginTop = '-125px';
  }
  mouse = false;

});