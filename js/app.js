let input = document.getElementById(`riceAmount`);
let riceAmount = input.value;
let buttonWhiteRice = document.getElementById(`changeRecipeToWhite`);
let buttonSproutedRice = document.getElementById(`changeRecipeToSprouted`);
let h2 = document.querySelector(`h2`);
let cupsWhite = document.getElementById(`cupsWhite`);
document.getElementById(`cupsAlDente`).value = `${riceAmount * (2/1.25)}
cups of water are needed.`;
document.getElementById(`cupsSoft`).value = `${riceAmount * (2.5/1.25)}
cups of water are needed.`;
cupsWhite.value = `${riceAmount * 2} cups of water are needed.`;
document.getElementById(`white`).hidden = `hidden`;

input.onkeyup = function input() {
    riceAmount = document.getElementById(`riceAmount`).value;
    document.getElementById(`cupsAlDente`).value = `${riceAmount * (2/1.25)}
    cups of water are needed.`;
    document.getElementById(`cupsSoft`).value = `${riceAmount * (2.5/1.25)}
    cups of water are needed.`;
    cupsWhite.value = `${riceAmount * 2} cups of water are needed.`;
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
