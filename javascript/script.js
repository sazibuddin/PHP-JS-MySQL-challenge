// get the current height of main page 
let pageHeight = document.getElementById("main-page").offsetHeight;

// get the square in a variable 
let box = document.getElementById("sqaure");

// Define animatedDirection as 0 as default 
let animatedDirection = 0


// Create the animateBox function 
const animateBox = () => {

    // Set the box position with the device width and height 
    let positionLeft = box.offsetLeft;
    let positionTop = box.offsetTop;

   /**  Check if position left of the box + width of the box getter than or equal screen width
     or position top + box width getter than or equal screen height **/
    if((positionLeft + 100) >= screen.width || (positionTop + 100) >= pageHeight ) {
        // set animatedDirection to 0 
        animatedDirection = 1;
    }
    else if(positionLeft < 0) {
        animatedDirection = 0;
    }

    /* if animatedDirection is 0 always add 10 with previous value of positionLeft and positionTop 
        otherwise subtract 10 from both */
    if(animatedDirection === 0) {
        positionLeft = positionLeft + 10;
        positionTop = positionTop + 10;
    }else {
        positionLeft = positionLeft - 10;
        positionTop = positionTop - 10;
    }

    // And finally set the lef and top position of the box by the value of positionLeft and positionTop
    box.style.left = `${positionLeft}px`;
    box.style.top = `${positionTop}px`;

    // Call the same funciton as recursive function to do the same thing in every 1 second 
    setTimeout(function () { animateBox() }, 1000);
}

// Finally Call the animateBox function 
animateBox();