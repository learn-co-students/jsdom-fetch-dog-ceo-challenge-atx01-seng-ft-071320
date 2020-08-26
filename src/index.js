const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
console.log('%c HI', 'color: firebrick')


fetch(imgUrl)
.then(function(response) {
  return response.json();
})
.then(function(json){
  for (let i = 0; i < json['message'].length; i++) {
    let img = document.createElement('img');
    img.src = json['message'][i]
    document.getElementById("dog-image-container").appendChild(img);
  }
})

fetch(breedUrl)
.then(function(response) {
  return response.json();
})
.then(function(json){
  let breed = Object.keys(json['message'])
  document.getElementById("breed-dropdown").addEventListener("change", function(){ orderBreeds(breed); });
  for (let i = 0; i < breed.length; i++) {
    let list = document.createElement('li');
    list.innerText = breed[i]
    list.id = i
    document.getElementById("dog-breeds").append(list);
    document.getElementById(String(i)).addEventListener("click", function(){ changeColor(String(i)); });
  }
})

function changeColor(id) {
  document.getElementById(id).style.color = "blue";
}

function orderBreeds(array) {
  let a = document.getElementById("breed-dropdown")
  let v = a.options[a.selectedIndex].value
  for (let i = 0; i < array.length; i++) {
    if (!array[i].startsWith(v)) {
      document.getElementById(String(i)).style.display = "none";
    } else {
      document.getElementById(String(i)).style.display = "block";
    }
  }
}
