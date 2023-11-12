(function () {
    "use strict";

    document.getElementById('convert').addEventListener("submit", function (event) {
        event.preventDefault();

        const inPut = parseFloat(document.getElementById('distance').value); 
        let outPut = document.getElementById('answer');
        
        if (inPut) {
            const converstion = (inPut * 1.609344).toFixed(3); 
            outPut.innerHTML = `<h2>${inPut} miles converts to ${converstion} km </h2>`; 
            

        }
        else {
            outPut.innerHTML = `<h2> Please enter a number </h2>`;

        }
    
    });



})();