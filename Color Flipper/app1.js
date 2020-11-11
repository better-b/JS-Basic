const colors = ["lightblue", "lightgreen", "coral", "rgb(122,122,122)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    // get random number btw 0-5
    const randomNumber = Math.floor(Math.random()* colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});