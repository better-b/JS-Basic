const video = document.querySelector('.video-container');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
    if(!btn.classList.contains('slide')){
        btn.classList.add('slide');
        video.pause();
    } else {
        btn.classList.remove('slide');
        video.play();
    }
});