(function () { 
    const detailsForm = document.querySelector('#destination_details');

    detailsForm.addEventListener('submit', handleFormSubmit);

    function handleFormSubmit(event) {
        event.preventDefault();

        const destName = event.target.elements["name"].value;
        const destLocation = event.target.elements["location"].value;
        const destPhoto = event.target.elements["photo"].value;
        const destDescription = event.target.elements["description"].value;

        for (let i = 0; i < detailsForm.length; i++) {
            detailsForm.elements[i].value = "";
        }

        const destinationCard = createDestinationCard(destName, destLocation, destPhoto, destDescription);


        const wishListContainer = document.querySelector('#destination_container');

        if (wishListContainer.children.length === 0) {
            document.getElementById("title").innerHTML = "My Wish List";
            
            document.querySelector('#destination_container').appendChild(destinationCard);
        }        
    }

    function createDestinationCard(name, location, photoUrl, description) {
        const card = document.createElement('div');
        card.className = "card";
        
        const image = document.createElement('img');
        image.setAttribute('alt', name);

        const constantPhotoUrl = './images/signpost.jpg';

        card.appendChild(image);

        if (photoUrl.length === 0) {
            image.setAttribute('src', constantPhotoUrl);


        }
        else {
            image.setAttribute('src', photoUrl);
        }

        const cardBody = document.createElement('div');
        cardBody.className = "card-body";

        const cardTitle = document.createElement('h3');
        cardTitle.innerText = name;
        cardBody.appendChild(cardTitle);

        const subTitle = document.createElement('h4');
        subTitle.innerText = location;
        cardBody.appendChild(subTitle);

        if (description.length !== 0) {
            const cardText = document.createElement('p');
            cardText.className = "card-text";
            cardText.innerText = description;
            cardBody.appendChild(cardText);
        }

        const cardDeletebtn = document.createElement('button');
        cardDeletebtn.innerText = "Remove";

        cardDeletebtn.addEventListener('click', removeDestination);
        cardBody.appendChild(cardDeletebtn);
        card.appendChild(cardBody);

        return card;
    }

    function removeDestination(event) {
        const card = event.target.parentElement.parentElement
        card.remove();
    }
})();