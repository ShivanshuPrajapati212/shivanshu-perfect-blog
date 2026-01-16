
const winContainer = document.getElementById("win-container");

const container = document.createElement('div');
container.classList.add("container");
const tile = document.createElement('div');
tile.classList.add('tile');
tile.innerHTML = "Hey";

container.append(tile);
winContainer.append(container);

i = 0;
cols = 2;
rows = 1;

window.addEventListener('keydown', (event) => {
  if (event.key == 'Enter' && event.altKey) {
    let currContainer = document.getElementsByClassName('container')[i];
    currContainer.style.gridTemplateColumns = `repeat(${i % 2 === 0 ? 1 : 2}, 1fr)`;
    currContainer.style.gridTemplateRows = `repeat(${i % 2 !== 0 ? 1 : 2}, 1fr)`;

    const prevTile = currContainer.querySelector('.tile');
    prevTile.remove();

    const newTile = document.createElement('div');
    newTile.classList.add('tile');
    newTile.innerHTML = "Hey";

    const newContainerFirst = document.createElement('div');
    newContainerFirst.classList.add('container');
    newContainerFirst.append(prevTile);

    const newContainerSecond = document.createElement('div');
    newContainerSecond.classList.add('container');
    newContainerSecond.append(newTile);


    currContainer.append(newContainerFirst, newContainerSecond);

    i++;

  }
})
