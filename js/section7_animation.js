  // get the element to animate
  let section7 = document.querySelector('.section-7');
  var section7Height = section7.clientHeight;

  // listen for scroll event and call animate function
  document.addEventListener('scroll', animate);

  // check if section7 is in view
  function inView() {
  // get window height
  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset;
  
  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;
  // get section7 position (distance from the top of the page to the bottom of the section7)
  var section7Position = section7.getBoundingClientRect().top + scrollY + (section7Height-100);
  
  // is scroll position greater than section7 position? (is section7 in view?)
  if (scrollPosition > section7Position) {
      return true;
  }
  
  return false;
  }

  // animate section7 when it is in view
  function animate() {
  // is section7 in view?
  if (inView()) {
    
      let t2 = new TimelineMax({});
      t2
      .staggerTo(".device4-title",.6,{y:0,opacity:1,ease:Power2.easeOut},0.2)
      .staggerTo(".device4-points",.6,{y:0,opacity:1,ease:Power2.easeOut},0.2,"-=.6");
  }
  }
