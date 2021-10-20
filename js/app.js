let input = document.getElementById(`riceAmount`);
let riceAmount = document.getElementById(`riceAmount`).value;
let buttonWhiteRice = document.getElementById(`changeRecipeToWhite`);
let buttonSproutedRice = document.getElementById(`changeRecipeToSprouted`);
let h2 = document.querySelector(`h2`);
document.getElementById(`cupsAlDente`).value = riceAmount * (2/1.25);
document.getElementById(`cupsSoft`).value = riceAmount * (2.5/1.25);
document.getElementById(`white`).hidden = `hidden`;

input.onkeyup = function input() {
    riceAmount = document.getElementById(`riceAmount`).value;
    document.getElementById(`cupsAlDente`).value = riceAmount * (2/1.25);
    document.getElementById(`cupsSoft`).value = riceAmount * (2.5/1.25);
};

buttonWhiteRice.onclick = function changeRecipeToWhite() {
    h2.innerHTML = `Making White Rice`;
    document.getElementById(`sproutedCalifornia`).hidden = `hidden`;
    document.getElementById(`white`).hidden = ``;
};

buttonSproutedRice.onclick = function changeRecipeToSprouted() {
    h2.innerHTML = `Making Sprouted California Rice`;
    document.getElementById(`sproutedCalifornia`).hidden = ``;
    document.getElementById(`white`).hidden = `hidden`;
};
