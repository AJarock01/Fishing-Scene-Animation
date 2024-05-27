// Canvas Fishing Scene

// Setup canvas
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

// Animation Cloud Variables
let cloud1X = 50;
let cloud1Y = 40;
let cloud2X = 150;
let cloud2Y = 10;
let cloud3X = 250;
let cloud3Y = 50;
let fishHeadX = 220;
let fishTailX = 220;
let fishTailXy = 240;
let fishTailXyz = 240;
let fishHeadX2 = 300;
let fishTailX2 = 300;
let fishTailX2y = 320;
let fishTailX2yz = 320;
let SunX = 75;
let SunY = 50;
let SkyR = 173;
let SkyG = 216;
let SkyB = 230;
let poleColor = "grey";
let word = "";

// Animation Fish Variables

// Triggers start of animation
requestAnimationFrame(draw);
// PUT ALL drawing code in the draw function
function draw() {
  // sky
  ctx.fillStyle = `rgb(${SkyR}, ${SkyG}, ${SkyB})`;
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // sun
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(SunX, SunY, 20, 0, 2 * Math.PI);
  ctx.fill();

  // clouds
  let cloud = document.getElementById("cloud");
  ctx.drawImage(cloud, cloud1X, cloud1Y, 75, 50);
  ctx.drawImage(cloud, cloud2X, cloud2Y, 75, 50);
  ctx.drawImage(cloud, cloud3X, cloud3Y, 75, 50);

  // Water
  ctx.beginPath();
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 250, cnv.width, 250);

  // Pier and posts
  ctx.beginPath();
  ctx.fillStyle = "brown";
  ctx.fillRect(0, 200, 250, 25);

  // loop the 4 posts
  for (let i = 5; i <= 155; i += 50) {
    ctx.fillRect(i, 150, 10, 350);
  }

  // fisherperson
  // head
  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(250, 140, 15, 0, 2 * Math.PI);
  ctx.stroke();

  // torso
  ctx.beginPath();
  ctx.moveTo(248, 155);
  ctx.lineTo(243, 195);
  ctx.stroke();

  // upper leg
  ctx.beginPath();
  ctx.moveTo(243, 195);
  ctx.lineTo(265, 205);
  ctx.stroke();

  // lower leg
  ctx.beginPath();
  ctx.moveTo(265, 205);
  ctx.lineTo(270, 230);
  ctx.stroke();

  // arm
  ctx.beginPath();
  ctx.moveTo(246, 170);
  ctx.lineTo(280, 180);
  ctx.stroke();

  // fishing pole
  ctx.strokeStyle = poleColor;
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(275, 190);
  ctx.lineTo(350, 100);
  ctx.stroke();

  // fishing lineTo
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(350, 100);
  ctx.lineTo(350, 300);
  ctx.stroke();

  // fishhead 1
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(fishHeadX, 300, 10, 0, 2 * Math.PI);
  ctx.fill();

  // fishhead 2
  ctx.fillStyle = "orange";
  ctx.beginPath();
  ctx.arc(fishHeadX2, 325, 10, 0, 2 * Math.PI);
  ctx.fill();

  // fishtail 1
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.moveTo(fishTailX, 300);
  ctx.lineTo(fishTailXy, 290);
  ctx.lineTo(fishTailXyz, 310);
  ctx.fill();

  // fishtail 2
  ctx.fillStyle = "orange";
  ctx.beginPath();
  ctx.moveTo(fishTailX2, 325);
  ctx.lineTo(fishTailX2y, 315);
  ctx.lineTo(fishTailX2yz, 335);
  ctx.fill();

  // ANIMATION
  cloud1X = cloud1X + 0.4;
  cloud2X = cloud2X + 2;
  cloud3X = cloud3X + 1;
  fishHeadX = fishHeadX - 1;
  fishTailX = fishTailX - 1;
  fishTailXy = fishTailXy - 1;
  fishTailXyz = fishTailXyz - 1;
  fishHeadX2 = fishHeadX2 - 3;
  fishTailX2 = fishTailX2 - 3;
  fishTailX2y = fishTailX2y - 3;
  fishTailX2yz = fishTailX2yz - 3;

  // When a cloud exits RIGHT side of the canvas, move it to the LEFT side of the canvas
  if (cloud1X >= 400) {
    cloud1X = -75;
    // Reappear at a random height
    cloud1Y = Math.random() * 150;
  }
  if (cloud2X >= 400) {
    cloud2X = -75;
    cloud2Y = Math.random() * 150;
  }
  if (cloud3X >= 400) {
    cloud3X = -75;
    cloud3Y = Math.random() * 150;
  }
  if (fishHeadX <= 0) {
    fishHeadX = 450;
  }
  if (fishTailX <= 0) {
    fishTailX = 450;
  }
  if (fishTailXy <= 0) {
    fishTailXy = 450;
  }
  if (fishTailXyz <= 0) {
    fishTailXyz = 450;
  }
  if (fishHeadX2 <= 0) {
    fishHeadX2 = 450;
  }
  if (fishTailX2 <= 0) {
    fishTailX2 = 450;
  }
  if (fishTailX2y <= 0) {
    fishTailX2y = 450;
  }
  if (fishTailX2yz <= 0) {
    fishTailX2yz = 450;
  }

  // Sun sets and stops under the pier
  if (SunY <= 250) {
    SunY = SunY + 0.5; // OR SunY++
  }
  if (SunX <= 200) {
    SunX = SunX + 0.3;
  }

  // Sunset Color: rgb(255, 165, 0)
  // Purple: rgb(160, 32, 240)
  // Blue Sky Color: rgb(173, 216, 230)

  if (SkyR <= 255) {
    SkyR++;
  }
  if (SkyG >= 165) {
    SkyG--;
  }
  if (SkyB >= 0) {
    SkyB--;
  }
  requestAnimationFrame(draw);
}

// Keyboard Handler
document.addEventListener("keypress", keyboardHandler);

function keyboardHandler(event) {
  console.log(event.code);
  if (event.code == "KeyT") {
    console.log("You pressed the T key!!");
  }

  word = word + event.key;
  console.log(word);
  if (word == "purple") {
    poleColor = "purple";
  } else if (word == "blue") {
    poleColor = "blue";
  } else if (word == "red") {
    poleColor = "red";
  } else if (word == "green") {
    poleColor = "green";
  } else if (word == "yellow") {
    poleColor = "yellow";
  } else if (word == "orange") {
    poleColor = "orange";
  }
}
