const rectangle = document.getElementById("rectangle");

rectangle.addEventListener("mousemove", (event) => {
    const rect = rectangle.getBoundingClientRect();
    const mouseX = event.clientX - rect.left; // Get cursor position inside rectangle
    const width = rect.width;
    const halfWidth = width / 2;

    let color;
    if (mouseX < halfWidth) {
        // Left to center (red to blue)
        let percentage = mouseX / halfWidth;
        let red = Math.round(255 * (1 - percentage));
        let blue = Math.round(255 * percentage);
        color = `rgb(${red}, 0, ${blue})`;
    } else {
        // Center to right (blue to black)
        let percentage = (mouseX - halfWidth) / halfWidth;
        let blue = Math.round(255 * (1 - percentage));
        let black = Math.round(255 * percentage);
        color = `rgb(0, 0, ${blue - black})`; // Transitioning to black
    }

    rectangle.style.background = color;
});

// When the cursor leaves the rectangle, reset the color to white
rectangle.addEventListener("mouseleave", () => {
    rectangle.style.background = "white";
});
