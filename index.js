var up = false;
var down = false;
var left = false;
var right = false;


document.addEventListener("keydown", function (event)
{
    switch (event.key)
    {
        case "ArrowUp":
            up = true;
            break;
        case "ArrowDown":
            down = true;
            break;
        case "ArrowLeft":
            left = true;
            break;
        case "ArrowRight":
            right = true;
            break;
    }
});
document.addEventListener("keyup", function (event)
{
    switch (event.key)
    {
        case "ArrowUp":
            up = false;
            break;
        case "ArrowDown":
            down = false;
            break;
        case "ArrowLeft":
            left = false;
            break;
        case "ArrowRight":
            right = false;
            break;
    }
});

$(document).ready(function ()
{
    setInterval(function ()
    {
        var currentX = parseInt($("#entity").css("top"));
        var currentY = parseInt($("#entity").css("left"));
        if (up)
        {
            $("#entity").css("top", currentX - 10);
        }
        if (down)
        {
            $("#entity").css("top", currentX + 10);
        }
        if (left)
        {
            $("#entity").css("left", currentY - 10);
        }
        if (right)
        {
            $("#entity").css("left", currentY + 10);
        }
    }, 25);
});











//area [x][y]; [0][0] = top left corner
// var currentX = parseInt($("#entity").css("top"));
// var currentY = parseInt($("#entity").css("left"));
// var area = [currentX][currentY];
// $("#entity").css("top", currentX - 10);
//     (event.key == "ArrowLeft") ? $("#entity").css("left", currentY - 10) : {} ;
//     (event.key == "ArrowRight") ? $("#entity").css("left", currentY + 10) : {} ;
// $("#entity").css("top", currentX + 10);
//     (event.key == "ArrowLeft") ? $("#entity").css("left", currentY - 10) : {} ;
//     (event.key == "ArrowRight") ? $("#entity").css("left", currentY + 10) : {} ;
// $("#entity").css("left", currentY - 10);
//     (event.key == "ArrowUp") ? $("#entity").css("left", currentX - 10) : {} ;
//     (event.key == "ArrowDown") ? $("#entity").css("left", currentX + 10) : {} ;
// $("#entity").css("left", currentY + 10);
//     (event.key == "ArrowUp") ? $("#entity").css("top", currentX - 10) : {} ;
//     (event.key == "ArrowDown") ? $("#entity").css("top", currentX + 10) : {} ;