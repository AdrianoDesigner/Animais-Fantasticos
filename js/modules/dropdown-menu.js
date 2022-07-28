import outsideClick from './outsideclick.js'

export default function initDropDownMenu(){
    
  const dropDowmMenu = document.querySelectorAll('[data-dropdowm]')

  dropDowmMenu.forEach(menu => {
    ['touchstart', 'click'].forEach(userEvent => {
      menu.addEventListener(userEvent, euSouRoberto);
    })
  })

  function euSouRoberto(event) {
    event.preventDefault();
    this.classList.add('active')
    outsideClick(this, ['touchstart', 'click'], () =>{
      this.classList.remove('active')
    });
  };
}

