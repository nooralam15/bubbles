//befoe yu can use this library you need a local cnavas variable


function stroke(style) {
    ctx.strokeStyle = style
}

function fill(style) {
    ctx.fillStyle = style
}

function lineWidth(width) {
    ctx.lineWidth = width
}

function font(fontSetting) {
    ctx.font = fontSetting
}

function text(message, x, y, mode) {
    if (mode == "fill") {

        ctx.fillText(message, x, y)

    }

    else if (mode == "stroke") {
        ctx.strokeText(message, x, y)
    }
    
}


//draw a stroke or fill rectangle with a top left corner (x,y) a width of w, and a height of 
function rect(x, y, w, h, mode) {
    if (mode == "fill") {
        ctx.fillRect(x,y,w,h);
    }
    else if (mode == "stroke") {
        ctx.strokeRect (x, y, w, h);
    }

}


//draw a lime sgemnet from x1,y1, to x2,y2
function line(x1, y1, x2, y2 ) {  //function wont work unless you invoke that funcion or call it
    console.log(x1, y1, x2, y2 )
    ctx.beginPath();
    ctx.moveTo(x1, y1); //endpoint 1 
    ctx.lineTo(x2, y2); //endpoint 2
    ctx.stroke()

}

//Draw a stroke or fill circle with center of (x,y0 and radius of r)
function circle ( x, y, r, mode) {
    ctx.beginPath()
    ctx.arc (x, y, r, 0, 2 * Math.PI)
    if (mode == "fill") {
        ctx.fill();
    }
    else if (mode == "stroke") {
        ctx.stroke();
    }

}

function triangle (x1, y1, x2, y2, x3, y3, mode) {

    ctx.beginPath()
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2, y2)
    ctx.lineTo(x3, y3)

    if ( mode == "fill") {
        ctx.fill()
    }

    else if ( mode == "stroke") {
        ctx.closePath()
        ctx.stroke()
    }
}

function ellipse (x, y, xRadius, yRadius, rotation, mode) {
    ctx.beginPath()
    ctx.ellipse(x, y, xRadius, yRadius, rotation, 0, 2 * Math.PI)

    if (mode == "fill") {
        ctx.fill();
    }
    else if (mode == "stroke") {
        ctx.stroke();
    }
    
}


//functions for images 
function image(img, x, y, w, h) {
    ctx.drawImage(img, x, y, w, h)
}

function imageClip (img, xs, yc, wc, hc, x, y, w, h) {
    ctx.drawImage (img, xs, yc, wc, hc, x, y, w, h)
}

//fill cnvas with provided colour
function background(color) {
    fill(color)
    rect(0,0, cnv.width, cnv.height, "fill")
}