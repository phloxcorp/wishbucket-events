const container = document.querySelector(".contents");
const items = [...container.children];
const loaderContainer = document.querySelector(".loader-container");


function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const shuffledItems = shuffle(items);

shuffledItems.forEach(item => container.appendChild(item));


window.addEventListener("load", function() {
    setTimeout(function() {
      container.style.display = "block";
      loaderContainer.style.display = "none";
    }, 300); // Change this value to the desired delay time in milliseconds
  });