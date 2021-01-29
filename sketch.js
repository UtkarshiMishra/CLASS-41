var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var c1img,c2img,c3img,c4img;
var track,track2,ground;

function preload() {
  c1img = loadImage("js/images/car1.png");
  c2img = loadImage("js/images/car2.png");
  c3img = loadImage("js/images/car3.png");
  c4img = loadImage("js/images/car4.png");
  ground = loadImage("js/images/ground.png")
  track = loadImage("js/images/track.png");
  
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  console.log("setup")
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
