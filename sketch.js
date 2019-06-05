let fireworks = [];
var gravity;

function setup() {
	gravity = createVector(0,0.2);
	
	createCanvas(windowWidth/2, windowHeight/2);
	colorMode(HSB);
	stroke(255);
	strokeWeight(4);
	// fireworks = new Particle(random(width) , height);
}

function draw() {
colorMode(RGB);
background(0,0,0,25); 
if(random(1)< 0.03){
	fireworks.push(new Firework());

}

for(var i = fireworks.length -1 ; i>= 0 ; i--){
	fireworks[i].update();
	fireworks[i].show();
	if(fireworks[i].done()){
		fireworks.splice(i,1);
	}

}
console.log(fireworks.length)

}