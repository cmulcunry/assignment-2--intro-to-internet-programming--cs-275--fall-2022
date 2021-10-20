let input = document.getElementById(`riceAmount`);
let riceAmount = input.value;
let buttonWhiteRice = document.getElementById(`changeRecipeToWhite`);
let buttonSproutedRice = document.getElementById(`changeRecipeToSprouted`);
let h2 = document.querySelector(`h2`);
let cupsAlDente = document.getElementById(`cupsAlDente`);
let cupsSoft = document.getElementById(`cupsSoft`);
let cupsWhite = document.getElementById(`cupsWhite`);
let sproutedCalifornia = document.getElementById(`sproutedCalifornia`);
let white = document.getElementById(`white`);

cupsAlDente.value = `${riceAmount * (2/1.25)} cups of water are needed.`;
cupsSoft.value = `${riceAmount * (2.5/1.25)} cups of water are needed.`;
cupsWhite.value = `${riceAmount * 2} cups of water are needed.`;
document.getElementById(`white`).hidden = `hidden`;

input.onkeyup = function input() {
    riceAmount = document.getElementById(`riceAmount`).value;
    cupsAlDente.value = `${riceAmount * (2/1.25)} cups of water are needed.`;
    cupsSoft.value  = `${riceAmount * (2.5/1.25)} cups of water are needed.`;
    cupsWhite.value = `${riceAmount * 2} cups of water are needed.`;
};

buttonWhiteRice.onclick = function changeRecipeToWhite() {
    h2.innerHTML = `Making White Rice`;
    sproutedCalifornia.hidden = `hidden`;
    document.getElementById(`white`).hidden = ``;
};

buttonSproutedRice.onclick = function changeRecipeToSprouted() {
    h2.innerHTML = `Making Sprouted California Rice`;
    sproutedCalifornia.hidden = ``;
    white.hidden = `hidden`;
};
