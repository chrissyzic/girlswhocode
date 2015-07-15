background(252, 255, 214);
noStroke();

var draw = function() {

    // define all the elements you want to change
    var wid = random(2,15);
    var hei = random(2,15);
    var col_one = random(10,250);
    var col_two = random(200,210);
    var col_three = random(200,210);
    
    // pick the color of the ellipse, using random variables above
    fill(col_one, col_two, col_three);
    
    // place the ellipse equal to the mouse location, set size equal to random variables
    ellipse(mouseX, mouseY, wid, hei);

};
