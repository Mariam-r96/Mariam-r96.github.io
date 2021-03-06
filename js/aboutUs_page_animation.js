document.addEventListener('DOMContentLoaded', function() {
 
 // Animation 
 let t1 = new TimelineMax({});

 t1.from(".title",1,{opacity:0,x:60,ease:Power0.easeOut});

 const aboutUs = document.querySelector("#aboutUs_btn a");

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

})