 // get the element to animate
 let section6 = document.querySelector('.section-6');
 var section6Height = section6.clientHeight;

 // listen for scroll event and call animate function
 document.addEventListener('scroll', animate3);

 // check if section6 is in view
 function inView3() {
 // get window height
 var windowHeight = window.innerHeight;
 // get number of pixels that the document is scrolled
 var scrollY = window.scrollY || window.pageYOffset;
 
 // get current scroll position (distance from the top of the page to the bottom of the current viewport)
 var scrollPosition = scrollY + windowHeight;
 // get section6 position (distance from the top of the page to the bottom of the section6)
 var section6Position = section6.getBoundingClientRect().top + scrollY + (section6Height-100);
 
 // is scroll position greater than section6 position? (is section6 in view?)
 if (scrollPosition > section6Position) {
     return true;
 }
 
 return false;
 }

 // animate section6 when it is in view
 function animate3() {
 // is section6 in view?
 if (inView3()) {
   
     let t2 = new TimelineMax({});
     t2
     .staggerTo(".device3-title",.6,{y:0,opacity:1,ease:Power2.easeOut},0.2)
     .staggerTo(".device3-points",.6,{y:0,opacity:1,ease:Power2.easeOut},0.2,"-=.6");
 }
 }