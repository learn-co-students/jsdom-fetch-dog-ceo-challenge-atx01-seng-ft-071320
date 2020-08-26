let breeds;
let breedsList;
document.addEventListener('DOMContentLoaded', function () {
    fetchImages();
    fetchBreeds();
    console.log('%c HI', 'color: firebrick')
    const list = document.getElementById('dog-breeds')
    console.log(list)
    breedsList = document.getElementById('dog-breeds')

    function fetchImages() {
        const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
        fetch(imgUrl)
            .then(resp => resp.json())
            .then(json => renderImages(json))
    }

    function renderImages(images) {
        const div = document.querySelector('div')
        images.message.forEach(image => {
            const img = document.createElement('img')
            img.src = image
            div.appendChild(img)
        })
    }





    function fetchBreeds() {
        const breedUrl = 'https://dog.ceo/api/breeds/list/all'
        fetch(breedUrl)
            .then(resp => resp.json())
            .then((json) => {
                breeds = json.message
                renderBreeds();
            })
    }

    function renderBreeds(letter = '') {
        console.log(breeds)
        breedsList.innerText = '';
        const keys = Object.keys(breeds).filter((breed) => breed.startsWith(letter));
        keys.forEach((breed) => {
            if (breeds[breed].length > 0) {
                breeds[breed].forEach((subBreed) =>
                    addBreedToList(`${breed}: ${subBreed}`)
                );
            } else {
                addBreedToList(breed);
            }
        });
    }

    document
    .getElementById('breed-dropdown')
    .addEventListener('change', (event) => {
      renderBreeds(event.target.value);
    });

    function changeColor(event) {
        console.log(event.target)
        event.target.setAttribute('style', 'color: red')
    }

    function addBreedToList(breed) {
        const breedLi = document.createElement('li');
        breedLi.innerText = breed;
        breedsList.append(breedLi);
    }


    document.getElementById('dog-breeds').addEventListener('click', changeColor);




});

//iterate over dog breeds
//match the first letter og the breed to letter in dropdown
    //get the first letter of the breed



//document.addEventListener('DOMContentLoaded', function() {
  //fetchBreeds() })

// function highlight