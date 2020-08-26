document.addEventListener('DOMContentLoaded', () => {
    loadImages();
    loadBreeds();
});

function loadImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
        .then(res => res.json())
        .then(results => {
        results.message.forEach(image => addImage(image))
    });
}

function addImage(image) {
    const container = document.getElementById('dog-image-container');
    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', image);
    imgElement.style.width = 300 + "px";
    imgElement.style.height = 300 + "px";
    container.append(imgElement);
}

function loadBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
        .then(res => res.json())
        .then(results => {
    breeds = Object.keys(results.message);
    updateBreedList(breeds);
    addBreedSelectListener();
    });
}

function updateBreedList(breeds) {
    let breedsList = document.getElementById('dog-breeds');
    removeChildren(breedsList);
    breeds.forEach(breed => addBreed(breed))
}

function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
      element.removeChild(child);
      child = element.lastElementChild;
    }
}

function addBreed(breed) {
    const breedsList = document.getElementById('dog-breeds');
    const item = document.createElement('li');
    item.innerText = breed;
    breedsList.append(item);
    item.addEventListener('click', updateColor);
}

function updateColor(e) {
    if (e.target.style.color == 'red') {
        e.target.style.color = 'black';
    } else {
        e.target.style.color = 'red';
    }
}

function selectBreedsStartingWith(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
}

function addBreedSelectListener() {
    const breedDropDown = document.getElementById('breed-dropdown');
    breedDropDown.addEventListener('change', function (event) {
        selectBreedsStartingWith(event.target.value);
    });
}