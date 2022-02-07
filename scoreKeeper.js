const plOne = document.querySelector('#plOne');
const plTwo = document.querySelector('#plTwo');
const scoreOne = document.querySelector('#scoreOne');
const scoreTwo = document.querySelector('#scoreTwo');
const reset = document.querySelector('#reset');
let p1 = 0;
let p2 = 0;
const winScore = document.querySelector('#upTo');
winScore.addEventListener('change', function () {
    upTo = winScore.value;

})

plOne.addEventListener('click', function (e) {
    if (p1 < upTo && p2 < upTo) {
        p1++;
        scoreOne.innerText = p1;
        scoreTwo.innerText = p2;
        if (p1 == upTo) {
            plOne.style.backgroundColor = 'rgb(13, 153, 106)'
            plTwo.style.backgroundColor = 'rgb(46, 47, 155)'
            scoreOne.style.color = 'green';
            scoreTwo.style.color = 'red';
        }
    }
}
)

plTwo.addEventListener(
    'click', function (e) {
        if (p2 < upTo && p1 < upTo) {
            p2++;
            scoreOne.innerText = p1;
            scoreTwo.innerText = p2;
            if (p2 == upTo) {
                plOne.style.backgroundColor = 'rgb(13, 153, 106)'
                plTwo.style.backgroundColor = 'rgb(46, 47, 155)'
                scoreTwo.style.color = 'green';
                scoreOne.style.color = 'red';
            }
        }
    }
)

reset.addEventListener('click', function () {
    p1 = 0;
    p2 = 0;
    scoreOne.innerText = p1;
    scoreTwo.innerText = p2;
    plOne.style.backgroundColor = 'rgb(27, 228, 161)'
    plTwo.style.backgroundColor = 'rgb(74, 77, 233)'
    scoreOne.style.color = 'black';
    scoreTwo.style.color = 'black';
})
