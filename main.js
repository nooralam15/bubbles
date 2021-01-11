// bubbles objects( associative arrays - key value pairs)

//initialize canvas and graohics context
let cnv = document.getElementById("my-canvas")
let ctx = cnv.getContext("2d")
cnv.width = 800
cnv.height = 600

//create an array of random bubble objects
let bubbles = []
console.log(bubbles)

requestAnimationFrame(draw)

function draw() {
    //clear canvas
    background("black")

    //move and draw bubbles
   for (let i = 0; i < bubbles.length; i++) {
       moveBubble(bubbles[i])
       drawBubble(bubbles[i])
   }

    // loop the draw function
    requestAnimationFrame(draw)
}


//event listeners
document.addEventListener("keydown", keyDownHandler)

function keyDownHandler(event) {
    if (event.keyCode == 39) { //right arrow key
        //add a new random bubble
        bubbles.push(newRandomBubble())
    }
    else if (event.keyCode == 37) {
        //left arrow remove the last ubble
        bubbles.pop()
    }
}

//timer 
setInterval(addBubble, 1000) 

function addBubble() {
    bubbles.push(newRandomBubble())
}