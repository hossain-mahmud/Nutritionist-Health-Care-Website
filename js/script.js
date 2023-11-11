// aos animation
AOS.init();

// nav menu fixed
let mainMenu=document.querySelector('.main_menu');
window.addEventListener('scroll',()=>{
    let scrooling=this.scrollY;
    if(scrooling >150){
        mainMenu.classList.add('menu_fixed');
    }
    else{
        mainMenu.classList.remove('menu_fixed');
    }
})
