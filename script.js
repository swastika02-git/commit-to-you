// Animated Heart Effect
const container = document.getElementById("container");

container.addEventListener("mousemove", (e) => {
    const heart = document.createElement("span");

    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";

    const size = Math.random() * 50 + 20;
    heart.style.width = size + "px";
    heart.style.height = size + "px";

    const rotate = Math.random() * 360;
    heart.style.transform = `rotate(${rotate}deg)`;

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000);
});
