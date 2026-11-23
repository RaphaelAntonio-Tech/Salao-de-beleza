import { createIcons, icons } from 'lucide';
createIcons({ icons });

import { createIcons, Menu, ArrowRight, Globe } from 'lucide';

createIcons({
  icons: {
    Menu,
    ArrowRight,
    Globe
  }
});

 const navResponsive = document.querySelector('.nav-responsive')
 const buttonBurguer = document.querySelector('.button-burguer')

buttonBurguer.addEventListener('click', () => {
    navResponsive.style.display = 'flex'
    navResponsive.style.right = 0
})
