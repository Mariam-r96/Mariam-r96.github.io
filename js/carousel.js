        // carousel 
        document.addEventListener('DOMContentLoaded', function() {
        const flavoursContainer = document.getElementById("flavoursContainer");
        const flavoursScrollWidth = flavoursContainer.scrollWidth;
        let leftArrow = document.querySelector(".prev");
        let rightArrow = document.querySelector(".next");
     
        // leftArrow.addEventListener("mouseover", () => {
        //     console.log("move right");
        //   self.setInterval(() => {
        //       if (flavoursContainer.scrollLeft !== flavoursScrollWidth) {
        //       flavoursContainer.scrollTo(flavoursContainer.scrollLeft + 1,0);
        //       }
        //   }, 5);
        // });

        rightArrow.addEventListener("mouseover", () => {  
            flavoursContainer.scrollLeft +=135;    
             
        });
       
          leftArrow.addEventListener("mouseover", () => {
            flavoursContainer.scrollLeft -=135;
          })
     
       
    })