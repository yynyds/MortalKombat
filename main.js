function Player (name, hp, img, weapon) {
	this.name = name;
	this.hp = hp;
	this.img = img;
	this.weapon = weapon;
	this.attack = function () {
		console.log(this.name + ' ' + 'Fight...');
	};
}
const player1 = new Player('Scorpion', 100, 'img-path', 'Kunai');
const player2 = new Player('Sonya', 100, 'img-path', 'Blasters');

player1.attack();
player2.attack();
