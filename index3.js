function randomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green},${blue} )`;
}

const blocks = document.querySelectorAll(".block");
blocks.forEach(function (block) {
    block.addEventListener("click", function () {

        let changes = Math.floor(Math.random() * 2) + 4;
        for (let i = 0; i < changes; i++) {
            setTimeout(function () {
                block.style.backgroundColor = randomColor();
            }, i * 500);
        }
    });
});