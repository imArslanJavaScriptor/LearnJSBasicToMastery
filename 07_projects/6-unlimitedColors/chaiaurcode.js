let startBtn = document.querySelector("#start")
let stopBtn = document.querySelector("#stop")


let intervalId = null

function changeBG() {
    let r = Math.floor(Math.random() * 250)
    let g = Math.floor(Math.random() * 250)
    let b = Math.floor(Math.random() * 250)
    let rgb = `${r},${g},${b}`
    document.body.style.backgroundColor = `rgb(${rgb})`
}

startBtn.addEventListener("click", function() {
    if(!intervalId) {
        intervalId = setInterval(changeBG, 1000);
    }
})

stopBtn.addEventListener("click", function() {
    clearInterval(intervalId)
    intervalId = null
})