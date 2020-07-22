
 let section4 = document.querySelector('.section-4');
 var section4Height = section4.clientHeight;

 // listen for scroll event and call animate function
 document.addEventListener('scroll', animate1);

 // check if section4 is in view
 function inView1() {
 // get window height
 var windowHeight = window.innerHeight;
 // get number of pixels that the document is scrolled
 var scrollY = window.scrollY || window.pageYOffset;
 
 // get current scroll position (distance from the top of the page to the bottom of the current viewport)
 var scrollPosition = scrollY + windowHeight;
 // get section4 position (distance from the top of the page to the bottom of the section4)
 var section4Position = section4.getBoundingClientRect().top + scrollY + (section4Height-150);
 
 // is scroll position greater than section4 position? (is section4 in view?)
 if (scrollPosition > section4Position) {
     return true;
 }
 
 return false;
 }

 // animate section4 when it is in view
 function animate1() {
 // is section4 in view?
 if (inView1()) {
     // section4 is in view, add class to section4
     let t1 = new TimelineMax({});
     t1
     .staggerTo(".device1-title",.6,{y:0,opacity:1,ease:Power2.easeOut},0.2)
     .staggerTo(".device1-points",.6,{y:0,opacity:1,ease:Power2.easeOut},0.2,"-=.6");
 }
 }