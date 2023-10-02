const btn = document.getElementById('toNext');
const video02 = document.getElementById('video02');
const video = document.getElementById('video01');
const video03 = document.getElementById('video')


setTimeout(() => {
    btn.style.display = 'block';
}, 20000);

btn.onclick = () => {
    btn.style.display = 'none';
    video03.classList.add('active');
    video02.classList.add('active2');
    video02.style.display = 'block';
    setTimeout(() => {
        video.style.display = 'none';
        video.muted = true;
    }, 1000)
}

