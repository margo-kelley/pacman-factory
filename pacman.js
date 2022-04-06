var pos = 0;
var direction = 0;

//imgs
const pacArray = [
    ['PacMan1.png', 'PacMan2.png'],
    ['PacMan3.png', 'PacMan4.png']
];

const pacMen = [];

//randomize
function setToRandom(scale) {
    return {
        x: Math.random() * scale,
        y: Math.random() * scale
    }
}

//set random position of new pacmen
function makePac() {
    // returns an object with random values
    let velocity = setToRandom(10);
    let position = setToRandom(200);
    //push img to div id "game"
    let game = document.getElementById('game');
    let newimg = document.createElement('img');
    newimg.style.position = 'absolute';
    newimg.src = 'PacMan1.png';
    newimg.width = 100;
    //set position
    newimg.style.left = position.x;
    newimg.style.top = position.y;
    //new child img
    game.appendChild(newimg);
    //reutrn details for new pacman
    return {
        position,
        velocity,
        newimg
    }
}

function update() {
    //moves img and position in DOM
    pacMen.forEach((item) => {
        checkCollisions(item)
        item.position.x += item.velocity.x;
        item.position.y += item.velocity.y;

        item.newimg.style.left = item.position.x;
        item.newimg.style.top = item.position.y;
    })
    setTimeout(update, 20);
}

//contains imgs to window
function checkCollisions(item) {
  if(item.position.x + item.velocity.x + item.newimg.width > window.innerWidth || item.position.x + item.velocity.x < 0)
  item.velocity.x = -item.velocity.x;
  if(item.position.y + item.velocity.y + item.newimg.height > window.innerHeight || item.position.y + item.velocity.y < 0) item.velocity.y = -item.velocity.y;
}

//button to create new pacman
function makeOne() {
    pacMen.push(makePac());
}