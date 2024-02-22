/*************menu icon navbar****************/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/*************scroll section active link****************/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      })
    }  
  })


  /*********sticky navbar************/
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);


  /**************remove menu icon navbar when click navbar link (scroll)************/
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

};

/**********swiper***********/
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  grapCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});





/***********dark and light mode***************/
let darkModeIcon = document.querySelector('#darkMode-icon');
darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
}



/*******************scroll reveal *************/ 
ScrollReveal({
  reset: true,
  distance: '40px',
  duration: 800,
  delay: 80,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form, .footer', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });



// on scroll, make header sticky //
// window.addEventListener("scroll", function(){
//     var header = document.querySelector("#header");
//     header.classList.toggle("sticky", window.scrollY > 0);
//   });




// var indexTab = document.querySelectorAll('.index_tab');
// var sectios = document.querySelectorAll('.secs');
// window.onscroll = () => {
//   sectios.forEach(section => {
//     let top = window.scrollY;
//     let offset = section.offsetTop - 100;
//     let height = section.offsetHeight;
//     let id = section.getAttribute('id');

//     if(top >= offset && top < offset + height) {
//       indexTab.forEach(index_tab => {
//         index_tab.classList.remove('active');
//         document.querySelector('.index_tab[href*=' + id +']').classList.add('active');
//       });
//     };
//   });
// };