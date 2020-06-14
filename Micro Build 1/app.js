let colours = ["green", "red", "violet", "cyan","rgba(133,122,200)", "#f15025", "brown", "yellow", "beige", "rebeccapurple"];

const btn = document.getElementById('btn');
const colour = document.querySelector(".colour");

btn.addEventListener("click", function() {
    randomNumber = getRandomNumber(11)
    document.body.style.backgroundColor = colours[randomNumber];
    // console.log(getRandomNumber(4));
    colour.textContent = colours[randomNumber];
});

function getRandomNumber(maxNumber){
    return Math.floor(Math.random() * maxNumber);
}