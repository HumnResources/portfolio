// ripple.js

document.addEventListener('mousemove', function(event) {
    // Get the position of the mouse cursor
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    
    // Create a new ripple element
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    ripple.style.left = mouseX + 'px';
    ripple.style.top = mouseY + 'px';
    
    // Append the ripple element to the body
    document.body.appendChild(ripple);
    
    // Remove the ripple element after the animation ends
    ripple.addEventListener('animationend', function() {
        ripple.remove();
    });
});
