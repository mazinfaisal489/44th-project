var bg,invground;
var ninja,ninja_run;
var alien,demon,witch;
var diamond;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var potion,potionGroup,potionImage;
var goldcoin,goldcoinGroup,goldcoinImage;
var obstacle,obstacle1,obstacle2,obstacle3,obstacleImage,obstacleGroup;
function preload(){

	bg = loadImage("SPRITES/jungle.jpg");
	ninja_run = loadAnimation("SPRITES/ninja1.png","SPRITES/ninja2.png","SPRITES/ninja3.png",
	"SPRITES/ninja4.png");
    alien = loadImage("SPRITES/alien.png");
	demon = loadImage("SPRITES/demon.png");
	diamond = loadImage("SPRITES/diamond.png");
	potionImage = loadImage("SPRITES/healthpotion.png");
	witch = loadImage("SPRITES/witch.png");
	goldcoinImage = loadImage("SPRITES/goldcoin.png");


}

function setup() {
 canvas = createCanvas(800,400);
	bg1 = createSprite(0,0,800,400);
	bg1.addImage(bg);
	bg1.scale = 1.5
	bg1.x = bg1.width/2;
	bg1.velocityX = -4;
	ninja = createSprite(100,340,20,50);
	ninja.addAnimation('running',ninja_run);
	ninja.scale = 0.2;
	ground = createSprite(400,350,800,10);
	ground.x = ground.width/2;
	ground.visible = false;

	potionGroup = new Group();
	goldcoinGroup = new Group();
	obstacleGroup = new Group();
	



	}

function draw() {


 background(0);

 drawSprites();

 if(gameState === PLAY){

	if(bg1.x < 100){

		bg1.x = bg1.width/2;


	}

	if(keyDown("space")){
		ninja.velocityY = -12;
	}

	ninja.velocityY += 0.5;

	ninja.collide(ground);

	if(potionGroup.isTouching(ninja)){

		potionGroup.destroyEach();
	}
 }

 if(goldcoinGroup.isTouching(ninja)){

	goldcoinGroup.destroyEach();
 }

 spawnPotion();
 spawngoldcoin();
 spawnObstacles();
}

