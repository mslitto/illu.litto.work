const up = document.createElement('a');
up.className = 'up';

const down = document.createElement('a');
down.className = 'down';

const container = document.createElement('div');
container.className = 'button-container';

up.addEventListener(
  'click',
  e => {
    console.log({active: window.activeImage});
  }
);

down.addEventListener(
  'click',
  e => {
    console.log({active: window.activeImage});
  }
);

container.appendChild(up);
container.appendChild(down);
document.body.appendChild(container);

