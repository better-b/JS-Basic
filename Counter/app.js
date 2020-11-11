/* let count = 0;

const counterContent = document.getElementById('value');
const decreasecounter = () => {
    counterContent.textContent = count;
    if(count < 0){
    counterContent.style.color = "green";
    }
}
const decreasebtn = document.getElementById('decrease');
decreasebtn.addEventListener('click', () => {
    count--;
    decreasecounter();
});

const increasecounter = () => {
    counterContent.textContent = count;
    if(count > 0) {
    counterContent.style.color = "red";
    }
}
const increasebtn = document.getElementById('increase');
increasebtn.addEventListener('click', () => {
    count++;
    increasecounter();
});

const resetbtn = document.getElementById('reset');
resetbtn.addEventListener('click', () => {
    counterContent.textContent = 0;
    counterContent.style.color = "black";
});

*/

let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else if (styles.contains('reset')) {
            count = 0;
        }
        if (count > 0) {
          value.style.color = "red";
        } else if (count < 0) {
          value.style.color = "green";
        } else if ((count == 0)) {
          value.style.color = "black";
        }
        value.textContent = count;
    });
});