// Scale design according to screen size
function scalar() {
    const designWidth = 550;
    const designHeight = 973;
    const bufferConstant = 0.8;

    const container = document.querySelector(".container");

    if (window.innerWidth < designWidth) {
        const ratio = window.innerWidth / designWidth;
        container.style.transform = `scale(${ratio})`;
    } else if (window.innerWidth > designWidth / bufferConstant) {
        // For bigger screens it's best to leave some room on the sides
        const ratioHeight =
            (window.innerHeight / designHeight) * bufferConstant;
        const ratioWidth = (window.innerWidth / designWidth) * bufferConstant;
        const ratio = Math.min(ratioHeight, ratioWidth);
        container.style.transform = `scale(${ratio})`;
    }
}

window.addEventListener("resize", scalar);
scalar();
