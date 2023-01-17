/* 
    One of the Emoji created for a testrun in the course
    "foundation of programming, TGPK12" at Jönköpings Univeristy, 
    2023-01-17
*/


// body
strokeWeight(2);
stroke(0);
fill(240, 233, 100);
ellipse(220, 200, 300, 300);



// left eye
beginShape();
strokeWeight(2);
noFill();
vertex(120, 180);
bezierVertex(120, 180, 160, 220, 200, 180);
endShape();

strokeWeight(2);
fill(255);
ellipse(160, 150, 80, 80);

fill(0);
ellipse(160, 150, 20, 20);

// right eye
beginShape();
strokeWeight(2);
noFill();
vertex(220, 180);
bezierVertex(220, 180, 260, 220, 300, 180);
endShape();

fill(255);
ellipse(260, 150, 80, 80);

fill(0);
ellipse(260, 150, 20, 20);



// mouth
fill(0);
ellipse(210, 270, 20, 40);


