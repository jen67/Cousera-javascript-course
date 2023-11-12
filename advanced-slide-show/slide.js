(function () { 
    "use strict";

    const myImages = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];
    const container = document.querySelector("#content");
    const next = document.querySelector('#next');
    const previous = document.querySelector('#previous');
     let currentImage = 0; //used let because it is goning to change 

    function makeChanges() {
        var img = document.createElement("img");
        img.src = `slides/${myImages[currentImage]}`;
        img.className = 'fadeIn';
        container.appendChild(img);
        
        if (container.children.length > 2) {
            container.removeChild(container.children[0]);
        }
    }

    next.addEventListener("click", function(event) {
        event.preventDefault();

        currentImage++;
        if (currentImage >= myImages.length) {
            currentImage = 0;
        }
        
        makeChanges();
    });

    previous.addEventListener("click", function(event) {
        event.preventDefault();
        currentImage--;
        if (currentImage <= 0) {
            currentImage = myImages.length-1;
        }

        makeChanges();
        
    });
})();