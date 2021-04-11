var cat,mouse;
function preload() {
    cat_IMG = loadImage("cat1.png","cat2.png","cat3.png","cat4.png");
    garden_IMG = loadImage("garden.png");
    mouse_IMG = loadImage("mouse1.png","mouse2.png","mouse3.png","mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    cat = createSprite()


}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
