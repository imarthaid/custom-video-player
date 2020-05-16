let video = document.querySelector('.video');
let bar = document.querySelector('.play-bar');
let btn = document.getElementById('play-pause');

function tooglePlayPause() {
    if (video.paused) {
        btn.className = 'pause';
        video.play();
    } else {
        btn.className = 'play';
        video.pause();
    }
}

video.onclick = function () {
    tooglePlayPause();
}

btn.onclick = function () {
    tooglePlayPause();
}

video.addEventListener('timeupdate', function () {
    let barPos = video.currentTime / video.duration;
    bar.style.width = barPos * 100 + '%';
    if (video.ended) {
        btn.className = 'play';
    }
})