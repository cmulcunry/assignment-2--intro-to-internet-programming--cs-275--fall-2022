const WHITE = document.getElementById(`white`);
const CALIFORNIA = document.getElementById(`california`);
const INPUT = document.getElementById(`input`);
const SELECT = document.getElementById(`select`);
const RICETYPE = document.getElementById(`riceType`);
const CALIRICE = document.getElementById(`caliRice`);
const CALIWATER = document.getElementById(`caliWater`);
const CALISOFTWATER = document.getElementById(`caliSoftWater`);
const WHITERICE = document.getElementById(`whiteRice`);
const WHITEWATER = document.getElementById(`whiteWater`);

let updateQuantities = () => {
    let x = INPUT.value;
    CALIRICE.innerHTML = `${Math.round(x*2)/2}`;
    CALIWATER.innerHTML = `${Math.round(1.6*x)}`;
    CALISOFTWATER.innerHTML = `${Math.round(0.4*x)}`;
    WHITERICE.innerHTML = `${Math.round(x)}`;
    WHITEWATER.innerHTML = `${Math.round(2*x)}`;
};

let toggleSelect = () => {
    if(SELECT.selectedOptions[0].value === `California Sprouted Rice`) {
        CALIFORNIA.style.display = `block`;
        WHITE.style.display = `none`;
        RICETYPE.innerHTML = `California Sprouted`;
    }
    else if(SELECT.selectedOptions[0].value === `White Rice`) {
        CALIFORNIA.style.display = `none`;
        WHITE.style.display = `block`;
        RICETYPE.innerHTML = `White`;
    }
};

SELECT.addEventListener(`click`, () => {toggleSelect();});
INPUT.addEventListener(`input`,() => {updateQuantities();});
