import "./style.css";

var body = document.querySelector("body");
var text = document.querySelector("#app");
setInterval(() => {
    randomColorFlash();
    setTimeout(() => {
        body.style.backgroundColor = "#0b0e21";
        text.style.color = "white";
    }, randomTime(50, 150));
    setTimeout(() => {
        randomColorFlash();
        setTimeout(() => {
            body.style.backgroundColor = "#0b0e21";
            text.style.color = "white";
        }, randomTime(20, 80));
    }, randomTime(150, 250));
}, randomTime(3000, 7000));

function randomColorFlash() {
    body.style.backgroundColor = "white";
    text.style.color = "#0b0e21";
}
function randomTime(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
