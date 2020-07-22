  // get the element to animate
  let section5 = document.querySelector('.section-5');
  var section5Height = section5.clientHeight;

  // listen for scroll event and call animate function
  document.addEventListener('scroll', animate2);

  // check if section5 is in view
  function inView2() {
  // get window height
  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset;
  
  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;
  // get section5 position (distance from the top of the page to the bottom of the section5)
  var section5Position = section5.getBoundingClientRect().top + scrollY + (section5Height-100);
  
  // is scroll position greater than section5 position? (is section5 in view?)
  if (scrollPosition > section5Position) {
      return true;
  }
  
  return false;
  }

  // animate section5 when it is in view
  function animate2() {
  // is section5 in view?
  if (inView2()) {
      // section5 is in view, add class to section5
      let t2 = new TimelineMax({});
      t2
      .staggerTo(".device2-title",.6,{y:0,opacity:1,ease:Power2.easeOut},0.2)
      .staggerTo(".device2-points",.6,{y:0,opacity:1,ease:Power2.easeOut},0.2,"-=.6");
  }
  }