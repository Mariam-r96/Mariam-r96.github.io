 // get the element to animate
 let section10 = document.querySelector('.section-10');
 var section10Height = section10.clientHeight;

 // listen for scroll event and call animate function
 document.addEventListener('scroll', animate10);

 // check if section10 is in view
 function inView10() {
 // get window height
 var windowHeight = window.innerHeight;
 // get number of pixels that the document is scrolled
 var scrollY = window.scrollY || window.pageYOffset;
 
 // get current scroll position (distance from the top of the page to the bottom of the current viewport)
 var scrollPosition = scrollY + windowHeight;
 // get section10 position (distance from the top of the page to the bottom of the section10)
 var section10Position = section10.getBoundingClientRect().top + scrollY + section10Height;
 
 // is scroll position greater than section10 position? (is section10 in view?)
 if (scrollPosition > section10Position) {
     return true;
 }
 
 return false;
 }

 // animate section10 when it is in view
 function animate10() {
 // is section10 in view?
 if (inView10()) {
   
     let t2 = new TimelineMax({});
     t2
     .to(".text-container",.6,{y:0,opacity:1,ease:Power2.easeOut})
     .to(".request-button",.6,{y:0,opacity:1,ease:Power2.easeOut},"-=.6");
 }
 }