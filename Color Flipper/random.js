const letters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    // get random number btw 0-5
    let randomColor = "#";
    for (var i = 0; i < 6; i++){
        randomColor += letters[randomNumber()];
    }
    color.textContent = randomColor; 
    document.body.style.backgroundColor = randomColor;
});

function randomNumber(){
     return Math.floor(Math.random() * letters.length);
};