
const container = document.getElementById("container");


window.addEventListener('keydown', (event) => {
  if (event.key == 'Enter' && event.altKey) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.innerHTML = "Hey";

    container.append(tile);
  }
})

