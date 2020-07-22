// navbar collapse and expand 

let toggle_Bar = document.querySelector(".toggle-btn");
let navbar_container = document.querySelector(".navbar-container");
let navbar_list = document.querySelector(".nav-links");

let expand = false;

toggle_Bar.addEventListener("click", expandNavBar);
 
function expandNavBar(){
    
    if(expand=== false){
        console.log("opening");
        expand=true;
        navbar_list.style.top='79px';
       
    }

    else if(expand=== true){
        console.log("closing");
        expand=false;
        navbar_list.style.top='-310px';
      
       
    }
}

// sticky navbar 
    window.onscroll = function() {myFunction()};


    let sticky = navbar_container.offsetTop;

    function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar_container.classList.add("sticky")
    } else {
        navbar_container.classList.remove("sticky");
    }
    }