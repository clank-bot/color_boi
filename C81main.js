canvas = document.getElementById("myCanvas");

ctx= canvas.getContext("2d");

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(E)
{
    color = document.getElementById("color").value;

    mouse_x = E.clientX - canvas.offsetLeft;
    mouse_y = E.clientY - canvas.offsetTop;

    console.log("X = " + mouse_x + ",Y = " +  mouse_y);
    CIRCLE(mouse_x, mouse_y);
}

function CIRCLE(mouse_x , mouse_y)
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth= 2;
    ctx.arc(mouse_x, mouse_y, 40 ,0 ,  2*Math.PI);
    ctx.rect(150, 143, 430, 200)
    ctx.stroke();

}