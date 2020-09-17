let width = 20;
let height = 15;

let player = {
    x : 5,
    y : 3,
    char : "@"
};

let screen = "";

function drawScreen()
{
    screen = "";
    for (let i = 0; i < height; i++)
    {
        for (let j = 0; j < width; j++)
        {
            if (j == player.x && i == player.y) {
                screen += player.char;
            } else {
                screen += ".";
            }
        }
        screen += "<br>";
    }

    document.getElementById("canvas").innerHTML = screen;
}

function movePlayer(x, y)
{
    let newX = player.x + x;
    let newY = player.y + y;
    if (newX >= 0 && newX < width) player.x = newX;
    if (newY >= 0 && newY < height) player.y = newY;

    drawScreen();
}

window.addEventListener("load", (event) => {
    drawScreen();
});

window.addEventListener("keydown", (event) => {
    if (event.key == "ArrowLeft") {
        movePlayer(-1, 0);
    }

    if (event.key == "ArrowRight") {
        movePlayer(1, 0);
    }

    if (event.key == "ArrowUp") {
        movePlayer(0, -1);
    }

    if (event.key == "ArrowDown") {
        movePlayer(0, 1);
    }
});