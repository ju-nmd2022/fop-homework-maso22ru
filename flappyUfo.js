//UFO - moving uo and down
//Background - moving forward
//Hinder - moving forward


//UFO
function ufo(x, y) {
    fill(0);
    ellipse(x, y, 300, 100);
    fill(50);
    ellipse(x, y - 20, 200, 50);
    //lights
    fill(250, 205, 0);
    ellipse(x - 135, y, 20, 15);
    ellipse(x - 100, y + 20, 20, 18);
    ellipse(x - 54, y + 30, 20);
    ellipse(x, y + 35, 20);
    ellipse(x + 54, y + 30, 20);
    ellipse(x + 100, y + 20, 20, 18);
    ellipse(x + 135, y, 20, 15);
    //alien
    fill(100, 255, 0);
    ellipse(x + 10, y - 55, 45, 60);
    fill(0);
    ellipse(x + 3, y - 60, 10, 20);
    ellipse(x + 17, y - 60, 10, 20);
    //glassdome
    fill('rgba(150, 150, 150, 0.4)');
    arc(x, y - 20, 200, 200, PI, 0);
    arc(x, y - 20, 200, 50, 0, PI);

    //found the opacity on the website "https://p5js.org/reference/#/p5/fill"
}
 
function barn(x ,y) {
    fill(255, 0, 0);
    rect(x, y, 200, 100);
    fill(0);
    triangle(x, y, x + 100, y - 40, x + 200, y);
    rect(x + 60, y + 40, 40, 60);
    rect(x + 103, y + 40, 40, 60);
}

function windmill(x, y) {
    fill(0);
    rect (x, y, 10, 60);
}




let y = 200;
let x = 200;
let ufoRotation = 0;

let ufoY = 100;
let ufoX = 100;

let velocity = 1;
let acceleration = 0.2;

function draw() {
    console.log(x + "," +  y);
    background(100, 200, 255, 170);
    noStroke();
    fill(50, 195, 50);
    rect(0, 450, width, 800);
    

    //  ufo(mouseX, mouseY);
    //  // stroke(0);
   if (mouseIsPressed) {
    velocity = velocity - 1.5;

    //difficulty, change the acce and vel after a certain amout of time

    




   }

    barn(x + 200, y + 150);


    // stroke(0);
    // push();
    // translate(x, y);
    // rotate(ufoRotation);
    // // clear();
    // ufo(0, 0);
    // pop();
    
    // emojiRotation = emojiRotation + 0.01;
    
    // x = x - 2;

    ufo(x, ufoY);

    ufoY = ufoY + velocity;
    velocity = velocity + acceleration;


    if (ufoY > y + 250) {
        console.log("game over");
        isGameActive = false;
        velocity = 0;
        acceleration = 0;
    }


}











/* a loop

    if (barn < x - 200) {
        barn = width + 100;
    }

    ??
*/
