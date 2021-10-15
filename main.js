function Player (name, hp, img, weapon) {
	this.name = name;
	this.hp = hp;
	this.img = img;
	this.weapon = weapon;
	this.attack = function () {
		console.log(this.name + ' ' + 'Fight...');
	};
}
const player1 = new Player('Scorpion', 100, 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif', 'Kunai');
const player2 = new Player('Sonya', 100, 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif', 'Blasters');

player2.attack();

function createPlayer(playerClass, player) {
	const $player = document.createElement('div');
	$player.classList.add(playerClass);

	const $progressbar = document.createElement('div');
	$progressbar.classList.add('progressbar');

	const $character = document.createElement('div');
	$character.classList.add('character');

	const $life = document.createElement('div');
	$life.classList.add('life');
	$life.style.width = player.hp + '%';

	const $name = document.createElement('div');
	$name.classList.add('name');
	$name.innerText = player.name;

	const $img = document.createElement('img');
	$img.src = player.img;

	$character.appendChild($img);
	$progressbar.appendChild($life);
	$progressbar.appendChild($name);
	$player.appendChild($progressbar);
	$player.appendChild($character);

	const $arena = document.querySelector('.arenas');
	$arena.appendChild($player);
}

createPlayer('player1', player1);
createPlayer('player2', player2);
