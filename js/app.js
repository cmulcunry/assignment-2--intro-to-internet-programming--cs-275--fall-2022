const WHITE = document.getElementById(`white`);
const CALIFORNIA = document.getElementById(`california`);
const QUANTITY = document.getElementById(`input`);
const SELECT = document.getElementById(`select`);
const LABEL2 = document.getElementById(`label2`);
const CALIRICE = document.getElementById(`caliRice`);
const CALIWATER = document.getElementById(`caliWater`);
const CALISOFTWATER = document.getElementById(`caliSoftWater`);
const WHITERICE = document.getElementById(`whiteRice`);
const WHITEWATER = document.getElementById(`whiteWater`);

let updateQuantities = () => {
    let x = QUANTITY.value;
    CALIRICE.innerHTML = `${x}`;
    CALIWATER.innerHTML = `${1.6*x}`;
    CALISOFTWATER.innerHTML = `${0.4*x}`;
    WHITERICE.innerHTML = `${x}`;
    WHITEWATER.innerHTML = `${2*x}`;
};

SELECT.addEventListener(`click`, () => {toggleSelect();});
//QUANTITY.addEventListener(`change`, updateQuantities());

let toggleSelect = () => {
    if(SELECT.selectedOptions[0].value === `California Sprouted Rice`) {
        CALIFORNIA.style.display = `block`;
        WHITE.style.display = `none`;
        LABEL2.innerHTML = `cups of California Sprouted Rice`;
    }
    else if(SELECT.selectedOptions[0].value === `White Rice`) {
        CALIFORNIA.style.display = `none`;
        WHITE.style.display = `block`;
        LABEL2.innerHTML = `cups of White Rice`;
    }
};


/*let updateQuantities = () => {
    let x = QUANTITY.value;
    CALIFORNIA.children[2].innerHTML = `1. Combine ${decToFrac(1*x)} cups of rice with ${decToFrac(1.6*x)} cups of water or broth and ${decToFrac(.8*x)} Tbsp olive oil.`;
    CALIFORNIA.children[6].innerHTML = `For softer rice, increase liquid by ${decToFrac(.4*x)} cup and cook time by 5 minutes.`;
    WHITE.children[1].innerHTML = `1. Combine ${decToFrac(1*x)} cup of rice with ${decToFrac(2*x)} cups of water and ${decToFrac(1*x)} Tbsp olive oil.`;
};

let gcd = (n,d) => {
    if(d==0) return n;
    return gcd(d | 0, n%d | 0);
};

let length = (x) => {
    if(x-x|0===0) return x.toString.length;
    else return x.toString.length-2;
};

let decToFrac = (x) => {
    let y = x | 0;
    let denominator = 10**length(x-y);
    let numerator = (x-y)*denominator;
    let g = gcd(numerator, denominator);
    denominator = denominator/g;
    numerator = numerator/g;
    if(numerator !== 0 && y !== 0) return `${y} ${parseFloat(numerator).toPrecision(length(x-y))}/${denominator}`;
    else if(numerator !== 0) return `${parseFloat(numerator).toPrecision(length(x-y))}/${denominator}`;
    else return `${y}`;
};*/

/*let fracToMixed = (n,d) => {
    return `${n/d | 0} ${n-(d*(n/d | 0))}/${d}`;
};*/
