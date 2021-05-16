const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");
const width = document.getElementById("linewidth");
const changewidth = document.getElementById("changeWidth");
const clearcanvas = document.getElementById("clearCanvas");
const blackcolor = document.getElementById("black");
const redcolor = document.getElementById("red");
const greencolor = document.getElementById("green");
const yellowcolor = document.getElementById("yellow");
const bluecolor = document.getElementById("blue");
const purplecolor = document.getElementById("purple");
const browncolor = document.getElementById("brown");
let pencolor = "black";
let penwidth = 5;

window.addEventListener("load", () => {

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    let painting = false;
    function startpainting(e) {
        painting = true;
        context.lineCap = "round";
        context.strokeStyle = pencolor;
        context.lineWidth = penwidth;
        context.lineTo(e.clientX, e.clientY);
        context.stroke();
        context.beginPath();
        context.moveTo(e.clientX, e.clientY);
    }

    function stoppainting() {
        painting = false;
        context.beginPath();
    }


    canvas.addEventListener("mousedown", startpainting);
    canvas.addEventListener("mouseup", stoppainting);
    canvas.addEventListener("mousemove", (e) => {
        if (painting) {
            context.lineCap = "round";
            context.strokeStyle = pencolor;
            context.lineWidth = penwidth;
            context.lineTo(e.clientX, e.clientY);
            context.stroke();
            context.beginPath();
            context.moveTo(e.clientX, e.clientY);

        } else {
            return;
        }

    })

});

window.addEventListener("resize", () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});

changewidth.addEventListener("click", () => {
    penwidth = width.value;
})

clearcanvas.addEventListener("click", () => {
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.clearRect(0, 0, canvas.width, canvas.height);
});

blackcolor.addEventListener("click",()=>{
    pencolor = "black";
});

redcolor.addEventListener("click",()=>{
    pencolor = "red";
});

greencolor.addEventListener("click",()=>{
    pencolor = "green";
});

yellowcolor.addEventListener("click",()=>{
    pencolor = "yellow";
});

bluecolor.addEventListener("click",()=>{
    pencolor = "blue";
});

purplecolor.addEventListener("click",()=>{
    pencolor = "purple";
});

browncolor.addEventListener("click",()=>{
    pencolor = "brown";
});



