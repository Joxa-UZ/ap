var domContainer = document.querySelector(".container");
var domContainers = document.querySelector(".containers");
var newList = document.createElement("ul");
newList.classList.add("wrapper");


for (var pokemon of pokemons) {
    var newItem = document.createElement("li");
    var newTitle = document.createElement("span");
    var newImg = document.createElement("img")
    var newText = document.createElement("p");
    var newTime = document.createElement("time");
    var newNumber = document.createElement("span");

    var newHeader = document.createElement("div");
    
    newItem.classList.add("box");
    newImg.classList.add("site-img");
    newTitle.classList.add("span-title");
    newTime.classList.add("new-time");
    newNumber.classList.add("new-number");


    newNumber.textContent = pokemon.num;
    newTitle.textContent = pokemon.name;
    newText.textContent = pokemon.candy;
    newTime.textContent = pokemon.spawn_time;
    newImg.src = pokemon.img;
    

    domContainers.appendChild(newHeader);
    newItem.appendChild(newNumber);
    newItem.appendChild(newTitle);
    newItem.appendChild(newImg);
    newItem.appendChild(newTime);
    newItem.appendChild(newText);
    newList.appendChild(newItem);
    domContainer.appendChild(newList);
    

}
