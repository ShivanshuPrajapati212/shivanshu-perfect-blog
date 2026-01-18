
const winContainer = document.getElementById("win-container");

x = 0, y = 0;
let i;
window.addEventListener('keydown', (event) => {
  if (event.key == 'Enter' && event.altKey) {

    getElementByCords(x, y);


    let currContainer = document.getElementsByClassName('container')[i];
    const state = Number(currContainer.dataset.state);
    console.log(state);
    currContainer.style.gridTemplateColumns = `repeat(${state % 2 !== 0 ? 2 : 1}, 1fr)`;
    currContainer.style.gridTemplateRows = `repeat(${state % 2 === 0 ? 2 : 1}, 1fr)`;

    const prevTile = currContainer.querySelector('.tile');
    prevTile.remove();

    const newTile = document.createElement('div');
    newTile.classList.add('tile');
    newTile.innerHTML = "~";

    const newContainerFirst = document.createElement('div');
    newContainerFirst.classList.add('container');
    newContainerFirst.dataset.state = state === 0 ? 1 : 0;
    newContainerFirst.append(prevTile);

    const newContainerSecond = document.createElement('div');
    newContainerSecond.classList.add('container');
    newContainerSecond.dataset.state = state === 0 ? 1 : 0;
    newContainerSecond.append(newTile);


    currContainer.append(newContainerFirst, newContainerSecond);


  }
});


window.addEventListener('mousemove', (event) => {
  x = event.clientX;
  y = event.clientY;
});


const getElementByCords = (x, y) => {
  el = document.elementsFromPoint(x, y)[0];

  const targetElement = el.parentElement;

  index = Array.from(document.querySelectorAll('.container')).indexOf(targetElement);
  console.log(index);
  i = index;
};
