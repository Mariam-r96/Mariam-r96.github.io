let contact = document.querySelector(".floating-contact-container");

let questionBar = document.querySelector(".question-bar");
let close_query = document.querySelector(".close-btn");

close_query.addEventListener("click", function(){
    console.log("closing bar");
    let t1 = new TimelineMax({});
    t1
    .to(".question-bar",1,{x:960,ease:Power2.easeOut});
});

contact.addEventListener("click", openBar);

function openBar(){
    console.log("ask your ques");
   
    let t1 = new TimelineMax({});
    t1
    .to(".question-bar",.5,{x:0,ease:Power2.easeOut});
    
}