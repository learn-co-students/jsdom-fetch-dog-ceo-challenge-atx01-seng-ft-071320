console.log('%c HI', 'color: firebrick')



document.addEventListener("DOMContentLoaded", function(event) {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  const container = document.getElementById('dog-image-container');
  const breedList = document.getElementById('dog-breeds');
  const breedArray = [];
  fetch(imgUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      let arr = (json['message']);
      for (const element of arr) {
        let photo = document.createElement('img');
        photo.src = element;
        container.appendChild(photo);
      }
  });
  fetch(breedUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      let arr = json['message'];
      for (const key in arr) {
        let breed = document.createElement('li')
        breed.textContent = key
        breedList.appendChild(breed)
        breedArray.push(breed.textContent)
      }
    });
    document.addEventListener("click", function(event) {
      event.target.style.color = "green";
    });
    document.addEventListener("change", function(event) {
      let filter = event.target.value
      breedList.innerHTML = "";
      for (const element of breedArray) {
        if (element[0] == filter) {
        let dog = document.createElement('li');
        dog.textContent = element;
        breedList.appendChild(dog);
        }
      };
    });
});
