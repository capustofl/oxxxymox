let i = 0
let audio = new Audio('oxxxymironmox.mp3')
audio.volume = 0.3
function audioPause() {
    if (i != 1){
        audio.play();
        i++
    } else {
        audio.pause();
        i--
    }
}

function audioPlay() {
    if (i != 1) {
        audio.pause();
        audio = new Audio('oxxxymironmox.mp3');
        audio.volume = 0.3
        audio.play()
        i++
    } else {
        audio.pause();
        audio = new Audio('oxxxymironmox.mp3');
        audio.volume = 0.3
        audio.play()
        i--
    }
}