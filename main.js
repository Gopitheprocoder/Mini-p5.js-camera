function setup(){
    canvas=createCanvas(500,400);
    canvas.position(425,200);
    webcam=createCapture(VIDEO);
    webcam.hide();
}
function draw(){
    image(webcam,100,80,300,250);

    
    fill(0,250,250);
    
    circle(40,40,50);
    circle(460,40,50);
    circle(40,360,50);
    circle(460,360,50);


    fill(50, 168, 82);

    rect(63, 27, 375, 25);
    rect(63, 347, 375, 25);
    rect(27, 63, 25, 275);
    rect(448, 63, 25, 275);
}
    
function take_snapshot(){
    save('My.png');
}
