 // get the element to animate
 let section11 = document.querySelector('.section-11');
 var section11Height = section11.clientHeight;

 // listen for scroll event and call animate function
 document.addEventListener('scroll', animate11);

 // check if section11 is in view
 function inView11() {
 // get window height
 var windowHeight = window.innerHeight;
 // get number of pixels that the document is scrolled
 var scrollY = window.scrollY || window.pageYOffset;
 
 // get current scroll position (distance from the top of the page to the bottom of the current viewport)
 var scrollPosition = scrollY + windowHeight;
 // get section11 position (distance from the top of the page to the bottom of the section11)
 var section11Position = section11.getBoundingClientRect().top + scrollY + (section11Height-320);
 
 // is scroll position greater than section11 position? (is section11 in view?)
 if (scrollPosition > section11Position) {
     return true;
 }
 
 return false;
 }

 // animate section11 when it is in view
 function animate11() {
 // is section11 in view?
 if (inView11()) {
   
     let t1 = new TimelineMax({});
     t1
     .to(".section11-title",.6,{y:0,opacity:1,ease:Power2.easeOut});
 }
 }
