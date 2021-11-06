var starImg,bgImg;
var star, starBody;
var fairy, fairyImg;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	//load animation for fairy here
	fairyImg = loadImage("fairyImage1.png");
	fairySound = loadSound("JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	fairySound.play();
	fairy = createSprite(100,500,20,80);
	fairy.addImage(fairyImg);
	fairy.scale = 0.2;
	fairy.setCollider("circle",500,0,100);
	fairy.debug = false;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);


  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  if(fairy.isTouching(star)){
	Matter.Body.setStatic(starBody,true);
  }
  
  drawSprites();
  textSize(16);
  fill("white");
  text("Presiona la tecla 'flecha abajo' para que la estrella caiga", 0,20);
  text("Solo se detendrá si toca la mano del hada", 0, 40);

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false);
	}	
	
	if(keyCode === RIGHT_ARROW && fairy.x < width - 50){
		fairy.x = fairy.x + 70;
	}

	if(keyCode === LEFT_ARROW && fairy.x > 50){
		fairy.x = fairy.x - 70;
	}
}