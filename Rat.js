let Rat = function(name, weight, speed) {
	this.name   = name;
	this.weight = weight;
	this.speed  = speed;
	this.living = true;
}

Rat.prototype.getLiving = function(){
	return this.living;
}
Rat.prototype.sound = function(){
	console.log('chít, chít');
	return 'chít, chít';
}
