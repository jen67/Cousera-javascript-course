// Wrap the code in an immediately invoked function expression (IIFE)
// to avoid polluting the global scope
(function () { 
    "use strict"; // Use strict mode to avoid common JavaScript pitfalls

    // Array of image filenames
    const myImages = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];

    // Get the container element where the images will be displayed
    const container = document.querySelector("#content");

    // Index of the currently displayed image
    let currentImage = 0;

    // Get the next and previous buttons
    let next = document.querySelector('#next');
    let previous = document.querySelector('#previous');

    // Function to update the displayed image
    function makeChanges() {
        // Create a new img element
        var img = document.createElement("img");

        // Set the source of the img element to the current image
        img.src = `slides/${myImages[currentImage]}`;

        // Add the 'fadeIn' class to the img element
        img.className = 'fadeIn';

        // Add the img element to the container
        container.appendChild(img);
        
        // If there are more than 2 children in the container (the current and the previous image),
        // remove the first child (the previous image)
        if (container.children.length > 2) {
            container.removeChild(container.children[0]);
        }
    }

    // Add a click event listener to the next button
    next.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default action of the event

        // Increment the index of the current image
        currentImage++;

        // If the index is greater than or equal to the number of images, reset it to 0
        if (currentImage >= myImages.length) {
            currentImage = 0;
        }
        
        // Update the displayed image
        makeChanges();
    });

    // Add a click event listener to the previous button
    previous.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default action of the event

        // Decrement the index of the current image
        currentImage--;

        // If the index is less than or equal to 0, set it to the index of the last image
        if (currentImage <= 0) {
            currentImage = myImages.length-1;
        }

        // Update the displayed image
        makeChanges();
    });
})();