let Cat = function(name, weight, speed, speedMax) {
	this.name     = name;
	this.weight   = weight;
	this.speed    = speed;
	this.speedMax = speedMax;
	this.living   = true;
}
Cat.prototype.getLiving = function(){
	return this.living;
}
Cat.prototype.setSpeed = function(speed){
	if (speed > this.speedMax) {
		this.speed = this.speedMax;
	}else if(speed < 0){
		this.speed = 0;
	}else{
		this.speed = speed;
	}
}
Cat.prototype.getSpeed = function(){
	return this.speed;
}
Cat.prototype.sound = function(){
	console.log('meo meo');
	return 'meo meo';
}

// bắt chuột
Cat.prototype.catchMouse = function(mouse){
	if (mouse.getLiving()) {
		mouse.sound();
		console.log('Chuột kêu chit chit khi bị mèo bắt');
		this.stopRun();
		this.eatMouse(mouse);
		console.log('Khi ăn chuột song, mèo kêu');
		this.sound();
	}
}

// ăn chuột
Cat.prototype.eatMouse = function(mouse){
	this.living = false;
	this.weight += mouse.weight;
	mouse.weight = 0;
	//
}

Cat.prototype.maxSpeed = function(){
	this.speed = this.speedMax;
}

Cat.prototype.stopRun = function(){
	this.speed = 0;
}
