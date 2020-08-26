//////////////Teacher Solution
let breedsContainer;
let breeds;
document.addEventListener('DOMContentLoaded', () => {
  const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
  const breedUrl = 'https://dog.ceo/api/breeds/list/all';
  breedsContainer = document.getElementById('dog-breeds');
  breedsContainer.addEventListener('click', (event) => {
    const classes = event.target.classList;
    if (classes.contains('clicked')) {
      classes.remove('clicked');
    } else {
      classes.add('clicked');
    }
  });
  document
    .getElementById('breed-dropdown')
    .addEventListener('change', (event) => {
      renderBreeds(event.target.value);
    });
  fetch(imgUrl)
    .then((res) => res.json())
    .then((json) => renderDogImages(json.message));
  fetch(breedUrl)
    .then((res) => res.json())
    .then((json) => {
      breeds = json.message;
      renderBreeds();
    });
});
function renderDogImages(dogList) {
  const dogContainer = document.getElementById('dog-image-container');
  dogList.forEach((dogUrl) => {
    const dogImg = document.createElement('img');
    dogImg.src = dogUrl;
    dogContainer.append(dogImg);
  });
}
function renderBreeds(letter = '') {
  breedsContainer.innerText = '';
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
function addBreedToList(breed) {
  const breedLi = document.createElement('li');
  breedLi.innerText = breed;
  breedsContainer.append(breedLi);
}


//////////Other Solution