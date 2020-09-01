// console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    const dropdown = document.querySelector("#breed-dropdown")


    fetch(imgUrl).then(res => res.json()).then(json => renderImg(json.message));
    
    fetch(breedUrl).then(res => res.json()).then(json => renderBreed(json.message));

    dropdown.addEventListener("change", event => {
        console.log(event.target.value);
    });

    function renderImg(dogList){
        const dogImageContainer = document.querySelector("#dog-image-container");

        dogList.forEach(dog => {
            const dogImg = document.createElement("img");
            dogImg.src = dog;
            dogImageContainer.appendChild(dogImg);
        }); //forEach
    }; //renderImg

    function renderBreed(breeds){
        const dogBreedContainer = document.querySelector("#dog-breeds");
        
        Object.keys(breeds).forEach(breed => {
            const li = document.createElement("li");
            //</li></li>
            li.addEventListener("click", e => {
                event.target.classList.add('clicked')
            });
            li.innerText = breed;
            dogBreedContainer.appendChild(li)
        }) //forEach
    }; //renderBreed



});

