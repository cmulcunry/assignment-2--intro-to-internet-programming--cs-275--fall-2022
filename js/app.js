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
let alDenteAmount = Math.floor(riceAmount * (2/1.25) * 10)/10;
let softAmount = Math.floor(riceAmount * (2.5/1.25) * 10)/10;
let whiteAmount = Math.floor(riceAmount * 20)/10;

cupsAlDente.value = `${alDenteAmount} cups of water are needed.`;
cupsSoft.value = `${softAmount} cups of water are needed.`;
cupsWhite.value = `${whiteAmount} cups of water are needed.`;
white.hidden = `hidden`;

input.onkeyup = function input() {
    riceAmount = document.getElementById(`riceAmount`).value;
    alDenteAmount = Math.floor(riceAmount * (2/1.25) * 10)/10;
    softAmount = Math.floor(riceAmount * (2.5/1.25) * 10)/10;
    whiteAmount = Math.floor(riceAmount * 20)/10;
    cupsAlDente.value = `${alDenteAmount} cups of water are needed.`;
    cupsSoft.value  = `${softAmount} cups of water are needed.`;
    cupsWhite.value = `${whiteAmount} cups of water are needed.`;
};

buttonWhiteRice.onclick = function changeRecipeToWhite() {
    h2.innerHTML = `Making White Rice`;
    sproutedCalifornia.hidden = `hidden`;
    white.hidden = ``;
};

buttonSproutedRice.onclick = function changeRecipeToSprouted() {
    h2.innerHTML = `Making Sprouted California Rice`;
    sproutedCalifornia.hidden = ``;
    white.hidden = `hidden`;
};
