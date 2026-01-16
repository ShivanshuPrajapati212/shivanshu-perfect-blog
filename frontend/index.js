
const winContainer = document.getElementById("win-container");

const container = document.createElement('div');
container.classList.add("container");
const tile = document.createElement('div');
tile.classList.add('tile');
tile.innerHTML = "Hey";

container.append(tile);
winContainer.append(container);

let i;
window.addEventListener('keydown', (event) => {
  if (event.key == 'Enter' && event.altKey) {


    let currContainer = document.getElementsByClassName('container')[i];
    currContainer.style.gridTemplateColumns = `repeat(${i % 2 !== 0 ? 1 : 2}, 1fr)`;
    currContainer.style.gridTemplateRows = `repeat(${i % 2 === 0 ? 1 : 2}, 1fr)`;

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
});


window.addEventListener('mousemove', (event) => {
  const targetElement = event.target.parentElement;

  index = Array.from(document.querySelectorAll('.container')).indexOf(targetElement);

  i = index;
});

