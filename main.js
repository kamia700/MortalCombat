const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

// Task #0
let player1 = {
  player: 1,
  name: 'Kitana',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['Steel Fans', 'Flying Blade', 'Bo Staff'],
  attack: function() {
    console.log (this.name + ' ' + 'Fight...');
  }
}

let player2 = {
  player: 2,
  name: 'Liukang',
  hp: 100, 
  img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
  weapon: ['War Hammer', 'Staff'], 
  attack: function() {
    console.log (this.name + ' ' + 'Fight...');
  }
}

function createElement(tag, className) {
  const $tag = document.createElement(tag);
  if (className) {
    $tag.classList.add(className);
  }

  return $tag;
}

// Task #1, Task #2, Task #3 (*)
function createPlayer(el) {
  const $player = createElement('div', 'player'+ el.player);

  const $progressbar = createElement('div', 'progressbar');

  const $life = createElement('div', 'life');
  $life.style.width = el.hp + '%';

  const $name = createElement('div', 'name');
  $name.innerText = el.name;
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);

  const $character = createElement('div', 'character');
  const $img = createElement('img');
  $img.src = el.img;
  $character.appendChild($img);

  $player.appendChild($progressbar);
  $player.appendChild($character);
  
  return $player;
}

// function getLoser(name) {
//   const $loseTitle = createElement('div', 'loseTitle');
//   $loseTitle.innerText = name + ' lose';
//   $randomButton.disabled = true;
//   return $loseTitle;
// }

function changeHP(player) {
  const $playerLife = document.querySelector('.player' + player.player + ' .life');
  player.hp -= generateRandom(0, 20);
  $playerLife.style.width = player.hp + '%';  
  
  if(player.hp <= 0) {
    player.hp = 0;
    // $arenas.appendChild(getLoser(player.name));
    // $arenas.appendChild(checkResults());
  }
}

function getWinner(name) {
  const $winTitle = createElement('div', 'winTitle');
  $winTitle.innerText = name + ' win';
  $randomButton.disabled = true;
  return $winTitle;
}

function checkResults(){ 
  if (player1.hp === 0 || player2.hp === 0){
    let winner;
    if (player1.hp > player2.hp){
      winner = getWinner(player1.name);
    } else if (player1.hp < player2.hp){
      winner = getWinner(player2.name);
    } else if (player1.hp === player2.hp) {
      const $drawTitle = createElement('div', 'drawTitle');
      $drawTitle.innerText = 'Draw!';
      winner = $drawTitle;
    }
    $arenas.appendChild(winner);
  } 
}


function generateRandom(min, max) {
  return Math.ceil(Math.random() * (max - min)) + min;
}

$randomButton.addEventListener('click', function() {
  changeHP(player1);
  changeHP(player2);
  checkResults();

})

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
