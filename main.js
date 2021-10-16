const $arena = document.querySelector('.arenas');
const $randomBtn = document.querySelector('.button');

function Player (player, name, hp, img, weapon) {
	this.player = player,
	this.name = name;
	this.hp = hp;
	this.img = img;
	this.weapon = weapon;
	this.attack = function () {
		console.log(this.name + ' ' + 'Fight...');
	};
}
const player1 = new Player(1, 'Scorpion', 100, 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif', 'Kunai');
const player2 = new Player(2, 'Sonya', 100, 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif', 'Blasters');

player2.attack();

function createElement(tag, className) {
	const $tag = document.createElement(tag);

	if (className) {
		$tag.classList.add(className)
	}

	return $tag;
}

function createPlayer(player) {
	const $player = createElement('div', 'player'+player.player);

	const $progressbar = createElement('div', 'progressbar');

	const $character = createElement('div', 'character');

	const $life = createElement('div', 'life');
	$life.style.width = player.hp + '%';

	const $name = createElement('div', 'name');
	$name.innerText = player.name;

	const $img = createElement('img');
	$img.src = player.img;

	$character.appendChild($img);
	$progressbar.appendChild($life);
	$progressbar.appendChild($name);
	$player.appendChild($progressbar);
	$player.appendChild($character);

	return $player;
}

function changeHP(player) {
	const $playerLife = document.querySelector('.player'+player.player + ' .life');
	player.hp -= getRandomNumber();
	$playerLife.style.width = player.hp <= 0 ? '0%' : player.hp + '%';

	console.log(player, player)
	if (player.hp < 0) {
		$arena.appendChild(playerLose(player.name));
		$randomBtn.disabled = true;
	}
}

function playerLose(name) {
	const $loseTitle = createElement('div', 'loseTitle');
	$loseTitle.innerText = name + ' lose'

	return $loseTitle;
}

function getRandomNumber() {
	return Math.round((Math.random() * 20));
}

$randomBtn.addEventListener('click', function() {
	changeHP(player1);
	changeHP(player2);

})

$arena.appendChild(createPlayer(player1));
$arena.appendChild(createPlayer(player2));
