var rice1,rice2,rice3,rice4,rice5,rice6,rice7,rice8,rice9,rice10,rice11,rice12,rice13,rice14,rice15;
var rice16,rice17,rice18,rice19,rice20,rice21;

function preload(){
	rice1 = loadImage("rice1.png");
	rice2 = loadImage("rice2.png");
	rice3 = loadImage("rice3.png");
	rice4 = loadImage("rice4.png");
	rice5 = loadImage("rice5.png");
	rice6 = loadImage("rice6.png");
	rice7 = loadImage("rice7.png");
	rice8 = loadImage("rice8.png");
	rice9 = loadImage("rice9.png");
	rice10 = loadImage("rice10.png");
	rice11 = loadImage("rice11.png");
    rice12 = loadImage("rice12.png");
	rice13 = loadImage("rice13.png");
	rice14 = loadImage("rice14.png");
	rice15 = loadImage("rice15.png");
	rice16 = loadImage("rice16.png");
	rice17 = loadImage("rice17.png");
	rice18 = loadImage("rice18.png");
	rice19 = loadImage("rice19.png");
	rice20 = loadImage("rice20.png");
}

function setup(){
	createCanvas(1500,1000);

	picture1 = createSprite(1400,80,10,10);
	picture1.addImage(rice1);
	picture1.scale = 0.6;
	picture2 = createSprite(1400,190,10,10);
	picture2.addImage(rice2);
	picture2.scale = 0.2;
	picture3 = createSprite(1400,330,10,10);
	picture3.addImage(rice3);
	picture3.scale = 0.5;
	picture4 = createSprite(1400,450,10,10);
	picture4.addImage(rice4);
	picture4.scale = 0.5;
	picture5 = createSprite(1400,600,10,10);
	picture5.addImage(rice5);
	picture5.scale = 0.2;
	picture6 = createSprite(1400,750,10,10);
	picture6.addImage(rice6);
	picture6.scale = 0.5;
	picture7 = createSprite(1400,880,10,10);
	picture7.addImage(rice7);
	picture7.scale = 0.7;
	picture8 = createSprite(1230,900,10,10);
	picture8.addImage(rice8);
	picture8.scale = 0.5;
	picture9 = createSprite(1040,930,10,10);
	picture9.addImage(rice9);
	picture9.scale = 0.5;
	picture10 = createSprite(850,920,10,10);
	picture10.addImage(rice10);
	picture10.scale = 0.4;
	picture11 = createSprite(650,950,10,10);
	picture11.addImage(rice11);
	picture11.scale = 0.6;
	picture12 = createSprite(380,950,10,10);
	picture12.addImage(rice12);
	picture12.scale = 0.3;
	picture13 = createSprite(280,920,10,10);
	picture13.addImage(rice13);
	picture13.scale = 0.4;
	picture14 = createSprite(80,940,10,10);
	picture14.addImage(rice14);
	picture14.scale = 0.7;
	picture15 = createSprite(60,800,10,10);
	picture15.addImage(rice15);
	picture15.scale = 0.2;
	picture16 = createSprite(80,630,10,10);
	picture16.addImage(rice16);
	picture16.scale = 0.2;
	picture17 = createSprite(80,500,10,10);
	picture17.addImage(rice17);
	picture17.scale = 0.5;
	picture18 = createSprite(80,370,10,10);
	picture18.addImage(rice18);
	picture18.scale = 0.3;
	picture19 = createSprite(80,200,10,10);
	picture19.addImage(rice19);
	picture19.scale = 0.4;
	picture20 = createSprite(80,90,10,10);
	picture20.addImage(rice20);
	picture20.scale = 0.3;
}
function draw(){
	background("yellow");
	drawSprites();
}