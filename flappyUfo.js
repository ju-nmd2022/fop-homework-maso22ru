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
 

let y = 200;
let x = 200;
let ufoRotation = 0;

function draw() {
    console.log(x + "," +  y);
    background(100, 200, 255);
    noStroke();
    fill(50, 195, 50);
    rect(0, 450, width, 800);

    stroke(0);
    ufo(x, y);

    // stroke(0);
    // push();
    // translate(x, y);
    // rotate(ufoRotation);
    // // clear();
    // ufo(0, 0);
    // pop();
    
    // emojiRotation = emojiRotation + 0.01;
    // x = x + 4;
    // y = y - 1;
}

