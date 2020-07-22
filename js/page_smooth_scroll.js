
document.addEventListener('DOMContentLoaded', function() {

const down_arrow = document.querySelector(".down-arrow a");
const learn_more = document.querySelector(".learnMore a");
const request_demo = document.querySelector(".request-demo-container a");
const nav_requestBtn = document.querySelector("#nav_demo_btn a");
const home = document.querySelector("#home_btn a");
const aboutUs = document.querySelector("#aboutUs_btn a");
const logo = document.querySelector("#logo a");

down_arrow.addEventListener("click", function(){
    smoothScroll(event);
});

learn_more.addEventListener("click", function(){
    smoothScroll(event);
});


request_demo.addEventListener("click", function(){
    smoothScroll(event);
});

logo.addEventListener("click", function(){
    smoothScroll(event);
});

nav_requestBtn.addEventListener("click", function(){
    smoothScroll(event);
});


home.addEventListener("click", function(){
    smoothScroll(event);
});

aboutUs.addEventListener("click", function(){
    smoothScroll(event);
});








// Smooth-Scrolling
function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href")==="#" ? "header" : event.currentTarget.getAttribute("href");
  const targetPosition = document.querySelector(targetId).offsetTop;
  const startPosition = window.pageYOffset;
  const distance = (targetPosition-60) - startPosition;
  const duration = 1000;
  let start = null;
  
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    // window.scrollTo(0, distance*(progress/duration) + startPosition);
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

// Easing Functions

function linear(t, b, c, d) {
	return c*t/d + b;
};

function easeInOutQuad(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};

function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};

});