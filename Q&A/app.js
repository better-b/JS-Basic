/*// Solution 1
const btns = document.querySelectorAll('.show-btn');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const answer =e.currentTarget.parentElement.parentElement;
        answer.classList.toggle('show-answer');
    })
});
*/

// Solution 2

const questions = document.querySelectorAll('.questions');

    questions.forEach(function(question){
        const btn = question.querySelector('.show-btn');
        btn.addEventListener('click', function() {
            questions.forEach(function(item){
                if(item !== question){
                    item.classList.remove('show-answer');
                }
            })
            question.classList.toggle('show-answer');
        });
});