const hex = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const colour = document.querySelector(".colour");

btn.addEventListener('click', function(){
    randomColour = getRandomHexColour();
    document.body.style.backgroundColor = randomColour;
    colour.textContent = randomColour;
});

function getRandomHexColour(){
    let hexColour = '#';
    for( i = 0; i < 6; i++){
        hexColour += hex[Math.floor(Math.random() * 16)];
    }
    return hexColour;
}