// Task #0
let player1 = {
  name: 'Kitana',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['Steel Fans', 'Flying Blade', 'Bo Staff'],
  attack: function() {
    console.log (this.name + ' ' + 'Fight...');
  }
}

let player2 = {
  name: 'Liukang',
  hp: 90, 
  img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
  weapon: ['War Hammer', 'Staff'], 
  attack: function() {
    console.log (this.name + ' ' + 'Fight...');
  }
}

// Task #1, Task #2, Task #3 (*)
function createPlayer(player, el) {
  const $player = document.createElement('div');
  $player.classList.add(player);

  const $progressbar = document.createElement('div');
  $progressbar.classList.add('progressbar');

  const $life = document.createElement('div');
  $life.classList.add('life');
  $life.style.width = el.hp + '%';

  const $name = document.createElement('div');
  $name.classList.add('name');
  $name.innerText = el.name;
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);

  const $character = document.createElement('div');
  $character.classList.add('character');
  const $img = document.createElement('img');
  $img.src = el.img;
  $character.appendChild($img);

  $player.appendChild($progressbar);
  $player.appendChild($character);
  

  const $arenas = document.querySelector('.arenas');
  $arenas.appendChild($player);
}

createPlayer('player1', player1);
createPlayer('player2', player2);