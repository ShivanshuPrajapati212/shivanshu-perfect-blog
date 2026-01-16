
const winContainer = document.getElementById("win-container");

const container = document.createElement('div');
container.classList.add("container");
const tile = document.createElement('div');
tile.classList.add('tile');
tile.innerHTML = "Hey";

container.append(tile);
winContainer.append(container);

window.addEventListener('keydown', (event) => {
  if (event.key == 'Enter' && event.altKey) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.innerHTML = "Hey";

    winContainer.append(tile);
  }
})
