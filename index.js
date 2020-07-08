const container = document.querySelector(".container");
const text = document.querySelector('#text');
const meditate = document.querySelector('.meditate');
const pointer = document.querySelector(".pointer");
const totalTime = 8000

text.setAttribute("style", "font-size: 25px")

const breatheTime = (totalTime / 5) * 2

const holdTime = totalTime / 5






function breathAnimation() {
    text.innerText = 'Breathe In!';
    container.className = 'container grow';
    pointer.setAttribute("style", "background: white")
    pointer.parentElement.setAttribute("style", "animation: rotate 8s linear forwards infinite;")


    setTimeout(() => {
        text.innerText = 'Hold';

        setTimeout(() => {
            text.innerText = 'Breathe Out!';
            container.className = 'container shrink';
        }, holdTime);
    }, breatheTime);
}



function theme() {
    var themes = [
        ["#142850", "#27496d", "#00909e", "#dae1e7"],
        ["#222831", "#393e46", "#32e0c4", "#eeeeee"],
        ["#45046a", "#5c2a9d", "#b5076b", "#f1ebbb"],
        ["#07031a", "#eeeeee", "#76ead7", "#c4fb6d"],
        ["#155263", "#ff6f3c", "#ff9a3c", "#ffc93c"],
        ["#155263", "#87dfd6", "#46b7b9", "#dff5f2"],
        ["#2d4059", "#ffb400", "#f6f6f6", "#ea5455"]
    ]
    let x = Math.floor(Math.random() * 7);
    var isExist = document.body.querySelector('h3');
    console.log(isExist);
    if (isExist !== null) {
        document.body.querySelector('h3').setAttribute('style', 'color:' + themes[x][0])
    }
    document.body.setAttribute("style", "background:" + themes[x][0] + " no-repeat center center/cover");
    document.body.querySelector(".gradient-circle").setAttribute("style", "background: conic-gradient( " + themes[x][1] + " 0%, " + themes[x][2] + " 40%," + themes[x][2] + " 60%, " + themes[x][3] + " 100%);")
}


meditate.addEventListener("click", function() {
    meditate.remove()

    setTimeout(function() { text.innerText = "Get" }, 1000);
    setTimeout(function() { text.innerText = "Set" }, 3000);
    setTimeout(function() { text.innerText = "Go" }, 5000);
    setTimeout(function() {

        breathAnimation();

        setInterval(breathAnimation, totalTime);

    }, 6000);


});
theme();
setInterval(theme, 24000);
console.log("hi")