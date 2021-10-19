let riceAmount = document.getElementById(`riceAmount`).value;
let buttonWhiteRice = document.getElementById(`changeRecipeToWhite`);
let buttonSproutedRice = document.getElementById(`changeRecipeToSprouted`);
document.getElementById(`cupsAlDente`).value = riceAmount * (2/1.25);
document.getElementById(`cupsSoft`).value = riceAmount * (2.5/1.25);
document.getElementById(`white`).hidden = `hidden`;

buttonWhiteRice.onclick = function changeRecipeToWhite() {
    document.getElementById(`sproutedCalifornia`).hidden = `hidden`;
    document.getElementById(`white`).hidden = ``;
};

buttonSproutedRice.onclick = function changeRecipeToSprouted() {
    document.getElementById(`sproutedCalifornia`).hidden = ``;
    document.getElementById(`white`).hidden = `hidden`;
};
