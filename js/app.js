let riceAmount = document.getElementById(`riceAmount`).value;
let button = document.getElementById(`changeRecipe`);
document.getElementById(`cupsAlDente`).value = riceAmount * (2/1.25);
document.getElementById(`cupsSoft`).value = riceAmount * (2.5/1.25);
document.getElementById(`white`).hidden = `hidden`;

button.onclick = function changeRecipe() {
    document.getElementById(`sproutedCalifornia`).hidden = `hidden`;
    document.getElementById(`white`).hidden = ``;
};
