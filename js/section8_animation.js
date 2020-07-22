

//    ANIMATION 

   let section8 = document.querySelector('.section-8');
     var section8Height = section8.clientHeight;

     // listen for scroll event and call animate function
     document.addEventListener('scroll', animate8);

     // check if section8 is in view
     function inView8() {
     // get window height
     var windowHeight = window.innerHeight;
     // get number of pixels that the document is scrolled
     var scrollY = window.scrollY || window.pageYOffset;
     
     // get current scroll position (distance from the top of the page to the bottom of the current viewport)
     var scrollPosition = scrollY + windowHeight;
     // get section8 position (distance from the top of the page to the bottom of the section8)
     var section8Position = section8.getBoundingClientRect().top + scrollY + (section8Height-150);
     
     // is scroll position greater than section8 position? (is section8 in view?)
     if (scrollPosition > section8Position) {
         return true;
     }
     
     return false;
     }

     // animate section8 when it is in view
     function animate8() {
     // is section8 in view?
     if (inView8()) {
         // section8 is in view, add class to section8
         let t1 = new TimelineMax({});
         t1
         .to(".mask",.9,{x:210,ease:Power1.easeOut});
     }
     }