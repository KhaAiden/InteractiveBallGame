let targetX, targetY;
let targetSize = 40;
let score = 0;
let gameState = "L1";
let speed = 2;
let timeLimit = 10;
let timeRemaining;

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
  spawnTarget();
  timeRemaining = timeLimit;
}

function draw() {
  background(220);
  
  if (timeRemaining > 0) {
    if (gameState === "L1") {
      levelOne();
    } 
    if (gameState === "L2") {
      levelTwo(); 
    }
    if (gameState === "L3") {
      levelThree(); 
    }
  } else {
    textSize(30);
    text("Time's Up!", width / 2, height / 2);
    noLoop();
  }

  text("Score: " + score, width / 2, 40);
  text("Time Remaining: " + Math.ceil(timeRemaining), width / 2, 70);
}

function spawnTarget() {
  targetX = random(width);
  targetY = random(height);
}

function levelOne() {
  text("Level 1", width / 2, height - 20);
  ellipse(targetX, targetY, targetSize, targetSize);
  
  if (dist(targetX, targetY, mouseX, mouseY) < targetSize / 2 && mouseIsPressed) {
    spawnTarget();
    score++;
  }

  if (score > 5) {
    gameState = "L2";
    timeRemaining = timeLimit;
  }

  timeRemaining -= deltaTime / 1000;
}

function levelTwo() {
  background(200, 100, 0);
  text("Level 2", width / 2, height - 20);
  
  targetX += random(-speed * 3, speed * 3);
  targetY += random(-speed * 3, speed * 3);
  
  targetX = constrain(targetX, targetSize / 2, width - targetSize / 2);
  targetY = constrain(targetY, targetSize / 2, height - targetSize / 2);
  
  ellipse(targetX, targetY, targetSize, targetSize);
  
  if (dist(targetX, targetY, mouseX, mouseY) < targetSize / 2 && mouseIsPressed) {
    spawnTarget();
    score++;
  }

  if (score > 10) {
    gameState = "L3";
    timeRemaining = timeLimit;
  }

  timeRemaining -= deltaTime / 1000;
}

function levelThree() {
  background(200, 100, 200);
  text("Level 3", width / 2, height - 20);
  
  targetX += random(-speed * 4, speed * 4);
  targetY += random(-speed * 4, speed * 4);
  
  targetX = constrain(targetX, targetSize / 2, width - targetSize / 2);
  targetY = constrain(targetY, targetSize / 2, height - targetSize / 2);
  
  ellipse(targetX, targetY, targetSize, targetSize);
  
  if (dist(targetX, targetY, mouseX, mouseY) < targetSize / 2 && mouseIsPressed) {
    spawnTarget();
    score++;
    targetSize -= 1;
  }

  timeRemaining -= deltaTime / 1000;

  if (score > 15) {
    textSize(30);
    text("You Win!", width / 2, height / 2);
    noLoop();
  }
}
