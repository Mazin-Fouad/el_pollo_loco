let canvas;
let world;
let keyboard = new Keyboard();
let muted = false;
let soundBtn = document.getElementById('muteButton');

/**
 * add canvas and start game with new World
 */
function startGame() {
  gameArea = document.getElementById('gameArea');
  gameArea.innerHTML = addElPolloLoco();
  canvas = document.getElementById('canvas');
  world = new World(canvas, keyboard);
  world.canvas.height = 739;
  world.canvas.width = 1280;
  bindBtsPressEvent();
}

function restart() {
  location.reload();
}

/**
 *
 * @returns html code to display the canvas and add the fullscreen button
 */
function addElPolloLoco() {
  initLevel();
  return /*html*/ `
    <div class="gameStart">
    <canvas id="canvas">

    </canvas>
    <div id="buttons">
    <button onclick="fullscreen()">Fullscreen</button>
    </div>
    <div class="mobilePanels">
          <div class="panel-holder d-none">
            <button id="left" class="mobile-btn"><img src="img/icons/left-arrow .png" /></button>
            <button id="right" class="mobile-btn"><img src="img/icons/arrow-point-to-right.png" /></button>
          </div>

          <div class="panel-holder">
          <button onclick="muteGameSounds()" id="muteButton"><img id="muteIcon" src="img/icons/mute.png"></button>
            <button onclick="playGameSounds()" id="audiosButton" class="d-none"><img id="soundIcon" src="img/icons/volume.png"></button>
          </div>

          <div class="panel-holder d-none">
            <button id="up" class="mobile-btn"><img src="img/icons/up-arrow .png" /></button>
            <button id="throw" class="mobile-btn"><img src="img/icons/forward.png" /></button>
          </div>
         
        </div>
    </div>
    `;
}

/**
 * change the fullscreen button to restart button
 */
function gameOver() {
  buttons = document.getElementById('buttons');
  buttons.innerHTML = /*html*/ `
    <button class="btns" onclick="restart()">Restart</button>
    `;
}

/**
 * event listener for the controls
 */
window.addEventListener('keydown', (e) => {
  if (e.key == 'd' || e.key == 'D' || e.key == 'ArrowRight') {
    keyboard.RIGHT = true;
  } else if (e.key == 's' || e.key == 'S' || e.key == 'ArrowDown') {
    keyboard.DOWN = true;
  } else if (e.key == 'a' || e.key == 'A' || e.key == 'ArrowLeft') {
    keyboard.LEFT = true;
  } else if (e.key == 'w' || e.key == 'W' || e.key == 'ArrowUp') {
    keyboard.UP = true;
  } else if (e.key == ' ') {
    keyboard.SPACE = true;
  } else if (e.key == 'Enter') {
    keyboard.ENTER = true;
  }
});

window.addEventListener('keyup', (e) => {
  if (e.key == 'd' || e.key == 'D' || e.key == 'ArrowRight') {
    keyboard.RIGHT = false;
  } else if (e.key == 's' || e.key == 'S' || e.key == 'ArrowDown') {
    keyboard.DOWN = false;
  } else if (e.key == 'a' || e.key == 'A' || e.key == 'ArrowLeft') {
    keyboard.LEFT = false;
  } else if (e.key == 'w' || e.key == 'W' || e.key == 'ArrowUp') {
    keyboard.UP = false;
  } else if (e.key == ' ') {
    keyboard.SPACE = false;
  } else if (e.key == 'Enter') {
    keyboard.ENTER = false;
  }
});

/**
 * Mobile Character Control
 */
function bindBtsPressEvent() {
  document.getElementById('left').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.LEFT = true;
  });

  document.getElementById('left').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.LEFT = false;
  });

  document.getElementById('right').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.RIGHT = true;
  });

  document.getElementById('right').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.RIGHT = false;
  });

  document.getElementById('up').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.UP = true;
  });

  document.getElementById('up').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.UP = false;
  });

  document.getElementById('throw').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.ENTER = true;
  });

  document.getElementById('throw').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.ENTER = false;
  });
}

/**
 * convert canvas to fullscreen
 */
function fullscreen() {
  canvas.requestFullscreen();
}

function muteGameSounds() {
  muted = true;
  document.getElementById('muteButton').classList.add('d-none');
  document.getElementById('audiosButton').classList.remove('d-none');
}

function playGameSounds() {
  muted = false;
  document.getElementById('muteButton').classList.remove('d-none');
  document.getElementById('audiosButton').classList.add('d-none');
}
