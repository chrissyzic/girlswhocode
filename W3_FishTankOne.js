background(214, 237, 255);
noStroke();
var i = 0;

for(i = 0; i < random(3,11); i++){
    fill(0, random(100,250), random(0,255));
    //ellipse(random(10,360),random(15,355), random(30,40), random(30,40));
    var x = random(10,260);
    var y = random(35,300);
    var cx1 = random(25,300);
    
    bezier(x, y, cx1, y+150, cx1, y-100, x, y+40);

}
