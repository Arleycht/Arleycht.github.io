function update() {
    let image = document.getElementById("caret-img");

    let sources = ["images/caret.gif", "images/caret o.gif"];
    let src = sources[Math.floor(Math.random() * sources.length)];

    image.setAttribute("src", src);
}

setInterval(update, 3000);
