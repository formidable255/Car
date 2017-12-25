// Get canvas, slider values, and initial setup.
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var getSpeed = document.getElementById("speed");

// Set interval for animation.
var move = setInterval(gas,getSpeed.value);

// Inital Coordinates for clouds 1, 2, and 3.
var x = 170;
var y = 400;
var a = 170;
var b = 400;
var c = 170;
var d = 400;

// Draw the car with function.
drawCar();

// Change gas speed based on slider.
getSpeed.oninput = function(){
	console.log(getSpeed.value);
	clearInterval(move);
	move = setInterval(gas,getSpeed.value);
}

// Draws the car.
function drawCar(){
	// car body
	ctx.beginPath();
	ctx.strokeStyle="limegreen";
	ctx.moveTo(300, 350);
	ctx.lineTo(575, 350);
	ctx.lineTo(795, 350);
	ctx.lineTo(785, 340);
	ctx.lineTo(789, 280);
	ctx.lineTo(680, 250);
	ctx.lineTo(550, 190);
	ctx.lineTo(350, 190);
	ctx.lineTo(280, 250);
	ctx.lineTo(250, 250);
	ctx.lineTo(250, 320);
	ctx.lineTo(275, 350);
	ctx.closePath();
	ctx.stroke();
	ctx.fillStyle = "limegreen";
	ctx.fill();
	
	// Bottom
	ctx.beginPath();
	ctx.strokeStyle="red";
	ctx.moveTo(795, 350);
	ctx.lineTo(785, 340)
	ctx.lineTo(650, 340);
	ctx.lineTo(620, 350);
	ctx.closePath();
	ctx.stroke();
	
	// Exhaust
	ctx.beginPath();
	ctx.strokeStyle="black";
	ctx.lineWidth = 2;
	ctx.moveTo(258, 330);
	ctx.lineTo(235, 330);
	ctx.lineTo(235, 340);
	ctx.lineTo(267, 340);
	ctx.stroke();
	ctx.fillStyle = "black";
	ctx.fill();

	// Spoiler
	ctx.beginPath();
	ctx.strokeStyle="black";
	ctx.lineWidth = 5;
	ctx.moveTo(275, 250);
	ctx.lineTo(260, 210);
	ctx.stroke();
	ctx.beginPath();
	ctx.strokeStyle="black";
	ctx.moveTo(290, 240);
	ctx.lineTo(280, 220);
	ctx.stroke();
	ctx.beginPath();
	ctx.strokeStyle="black";
	ctx.fillStyle="black";
	ctx.lineWidth = 1;
	ctx.moveTo(230, 210);
	ctx.lineTo(325, 210);
	ctx.lineTo(314, 220);
	ctx.lineTo(230, 220);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	// Winshield
	ctx.beginPath();
	var glass = ctx.createLinearGradient(300, 300, 500, 500);
	ctx.strokeStyle="white";
	glass.addColorStop(0, "black");
	glass.addColorStop(.5, "white");
	glass.addColorStop(1, "black");
	ctx.fillStyle = glass;
	ctx.lineWidth = 1;
	ctx.moveTo(675, 250);
	ctx.lineTo(520, 250);
	ctx.lineTo(435, 200);
	ctx.lineTo(563, 200);
	ctx.closePath()
	ctx.stroke();
	ctx.fill();

	// Side window
	ctx.beginPath();
	var glass = ctx.createLinearGradient(300, 300, 500, 500);
	ctx.strokeStyle="white";
	glass.addColorStop(0, "black");
	glass.addColorStop(.5, "white");
	glass.addColorStop(1, "black");
	ctx.fillStyle = glass;
	ctx.moveTo(500, 250);
	ctx.lineTo(420, 200);
	ctx.lineTo(350, 200);
	ctx.lineTo(350, 250);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();

	// Side door
	ctx.beginPath();
	ctx.strokeStyle="black";
	ctx.lineWidth = 2;
	ctx.moveTo(350, 250);
	ctx.lineTo(350, 300);
	ctx.lineTo(380, 320);
	ctx.lineTo(500, 320);
	ctx.lineTo(500, 250);
	ctx.stroke();
	
	// Hood
	ctx.beginPath();
	ctx.strokeStyle ="red";
	ctx.beginPath()

	// Grill
	ctx.beginPath();
	ctx.strokeStyle="black";
	ctx.fillStyle="black";
	ctx.moveTo(650, 335);
	ctx.lineTo(775, 335);
	ctx.lineTo(775, 320);
	ctx.lineTo(670, 320);
	ctx.fill();
	ctx.closePath();
	ctx.stroke();

	ctx.beginPath();
	ctx.strokeStyle="red";
	ctx.fillStyle="red";
	ctx.lineWidth = 2;
	ctx.moveTo(675, 335);
	ctx.lineTo(700, 320);
	ctx.lineTo(710, 320);
	ctx.lineTo(685, 335);
	ctx.fill();
	ctx.closePath();
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(760, 335);
	ctx.lineTo(745, 320);
	ctx.lineTo(735, 320);
	ctx.lineTo(750, 335);
	ctx.fill();
	ctx.closePath();
	ctx.stroke();


	// Ground
	ctx.restore();
	ctx.strokeStyle="black";
	ctx.lineWidth = 3;
	ctx.beginPath();
	ctx.moveTo(100,369);
	ctx.lineTo(800, 369);
	ctx.stroke();
	ctx.closePath();

	ctx.save();
	
	// Wheels
	ctx.strokeStyle="black";
	ctx.beginPath();
	ctx.scale(0.75, 1);
	ctx.arc(750, 328, 40, 0, 2 * Math.PI);
	ctx.fillStyle = "black";
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.arc(750, 328, 20, 0, 2 * Math.PI, false);
	ctx.stroke();
	ctx.fillStyle = "white";
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.arc(400, 328, 40, 0, 2 * Math.PI, false);
	ctx.stroke();
	ctx.fillStyle = "black";
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.arc(400, 328, 20, 0, 2 * Math.PI, false);
	ctx.stroke();
	ctx.fillStyle = "white";
	ctx.fill();
	ctx.closePath();

	// Headlights
	ctx.scale(1, 0.5);
	ctx.beginPath();
	ctx.fillStyle = "white";
	ctx.arc(840, 586, 30, 0, 2* Math.PI, false);
	ctx.closePath();
	ctx.fill();
	
	ctx.beginPath();
	ctx.fillStyle = "white";
	ctx.arc(1049, 586, 28, 0.5* Math.PI, 1.55* Math.PI);
	ctx.closePath();
	ctx.fill();

	ctx.restore();

	// Hoodlight
	ctx.beginPath();
	ctx.strokeStyle = "limegreen";
	ctx.lineWidth = 2;
	ctx.moveTo(785, 340);
	ctx.lineTo(789, 280);
	ctx.lineTo(680, 250);
	ctx.stroke();

	// Fill in front wheel 3d
	ctx.beginPath();
	ctx.strokeStyle = "black";
	ctx.fillStyle = "black";
	ctx.moveTo(570, 350);
	ctx.lineTo(605, 350);
	ctx.lineTo(595, 367);
	ctx.lineTo(560, 367);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();

	// Fill in back wheel3d
	ctx.beginPath();
	ctx.strokeStyle = "black";
	ctx.fillStyle = "black";
	ctx.moveTo(290, 350);
	ctx.lineTo(340, 350);
	ctx.lineTo(330, 367);
	ctx.lineTo(300, 367);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();

	// Back 3d wheel
	ctx.scale(1, 0.7);
	ctx.beginPath();
	ctx.fillStyle = "black";
	ctx.arc(420, 500, 30, 0, Math.PI, false);
	ctx.closePath();
	ctx.fill();
	
	// Front 3d wheel
	ctx.beginPath();
	ctx.fillStyle = "black";
	ctx.arc(750, 500, 30, 0, Math.PI, false);
	
	ctx.fill();
	ctx.closePath();
	ctx.restore();
}

// Makes the gas clouds
function gas(){
	// gas cloud 1
    ctx.clearRect(0, 0, 230, 475);
    ctx.beginPath();
    ctx.strokeStyle = "grey";
    ctx.fillStyle = "grey";
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, 2 * Math.PI, false);
    ctx.arc(x + 20, y + 15, 30, 0, 2 * Math.PI, false);
    ctx.arc(x - 20, y + 15, 30, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(x - 20, y + 30);
    ctx.lineTo(x + 30, y + 60);
    ctx.lineTo(x + 20, y + 20);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
	
	// Makes 2nd and 3rd clouds
  	if(b >  0){
    	if(y < 250){
    		cloudTwo();
  		}
    }
    if (y < 100){
    	cloudThree();
    }
	
	// Decrement x and y coodinates of this cloud
    x = x - 5;
    y = y - 15;

   	// reset boudnaries conditions
  	if(y < 0 && b < 0 && d < 0) {
  		console.log("sadf");
		x = 170;
		y = 400;
		a = 170;
		b = 400;
		c = 170;
		d = 400;
  }
}

// Gas cloud 2
function cloudTwo(){
	ctx.beginPath();
    ctx.arc(a , b , 30, 0, 2 * Math.PI, false);
    ctx.arc(a + 20 , b + 15, 30, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.arc(a - 20, b + 15 , 30, 0, 2 * Math.PI, false);
    ctx.arc(a , b + 40, 30, 0, 2 * Math.PI, false);
    ctx.fill();
	
	// Decrement x and y coodinates of this cloud
    a = a - 5;
    b = b - 15;    
}

// Gas cloud 3
function cloudThree(){
	ctx.beginPath();
    ctx.arc(c , d , 30, 0, 2 * Math.PI, false);
    ctx.arc(c + 20, d + 15, 30, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.arc(c - 20, d + 15 , 30, 0, 2 * Math.PI, false);
    ctx.arc(c , d + 40, 30, 0, 2 * Math.PI, false);
    ctx.fill();
	
	// Decrement x and y coodinates of this cloud
    c = c - 5;
    d = d - 15;
}
