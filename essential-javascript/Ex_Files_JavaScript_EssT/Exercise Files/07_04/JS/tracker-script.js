const AREA = document.body;
const CIRCLE = document.querySelector('.circle');
const CIRCLE2 = document.querySelector('.circle2');

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function mouseCoordinates(e) {
    // Capture the event object (mouse movement).
    // Get X coordinate (distance from left viewport edge) via clientX property.
    // Take total window width, subtract current coordinate and width of circle.
    // Do the same for Y coordinate (distance from top viewport edge).
    var circle1Horizontal = windowWidth - e.clientX - 26;
    var circle1Vertical = windowHeight - e.clientY - 26;

    var circle2Horizontal = circle1Horizontal - e.clientX;
    var circle2Vertical = circle1Vertical - e.clientY;
    

    // Set horizontal and vertical position.
    CIRCLE.style.left = circle1Horizontal + 'px';
    CIRCLE.style.top = circle1Vertical + 'px';

    // Set horizontal and vertical position.
    CIRCLE2.style.left = circle2Horizontal + 'px';
    CIRCLE2.style.top = circle2Vertical + 'px';
}

function changeCircleColorOnTouch() {
    CIRCLE.style.backgroundColor = "green";
    CIRCLE.style.borderColor = "green";
}

function changeCircle2ColorOnTouch() {
    CIRCLE2.style.backgroundColor = "green";
    CIRCLE2.style.borderColor = "green";
}

// When the mouse moves, run the mouseCoordinates function.
AREA.addEventListener('mousemove', mouseCoordinates, false);

// When the mouse touches the circle, run the changeColorOnTouch function.
CIRCLE.addEventListener('mouseenter', changeCircleColorOnTouch, false);

// When the mouse leaves the circle, remove inline styles with an anonymous function.
CIRCLE.addEventListener('mouseleave', function(){CIRCLE.removeAttribute("style");}, false);

// When the mouse touches the circle, run the changeColorOnTouch function.
CIRCLE2.addEventListener('mouseenter', changeCircle2ColorOnTouch, false);

// When the mouse leaves the circle, remove inline styles with an anonymous function.
CIRCLE2.addEventListener('mouseleave', function(){CIRCLE2.removeAttribute("style");}, false);
