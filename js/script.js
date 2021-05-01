
const menuButtons = document.querySelectorAll('#food_menu button');
let food_menu_box = document.querySelectorAll('.food_menu_box');
const menu = document.getElementById('Menu');

menuButtons.forEach(element => {
  element.addEventListener('click', function () {
    for(let i=0; i<food_menu_box.length; i++) {
      food_menu_box[i].style.display = 'none';
      menuButtons[i].classList.remove('active_button');
    }

    element.classList.add('active_button');
    const section = document.getElementById(element.textContent);
    section.style.display = 'flex';
    section.classList.add('animate');
    menu.scrollIntoView({behavior: 'smooth', block: 'center'});
    
  });
});


