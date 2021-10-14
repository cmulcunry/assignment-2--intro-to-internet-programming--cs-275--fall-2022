const WHITE = document.getElementById(`white`);
const CALIFORNIA = document.getElementById(`california`);
const BUTTON = document.getElementById(`button`);
const QUANTITY = document.getElementById(`input`);
//const SELECT = document.getElementById(`select`);

let toggleRecipe = () => {
    if(CALIFORNIA.style.display === `none`) {
        CALIFORNIA.style.display = `block`;
        WHITE.style.display = `none`;
        BUTTON.innerHTML = `White Rice`;
    }
    else {
        CALIFORNIA.style.display = `none`;
        WHITE.style.display = `block`;
        BUTTON.innerHTML = `California Sprouted Rice`;
    }
};

let updateQuantities = () => {
    let x = QUANTITY.value;
    CALIFORNIA.children[2].innerHTML = `1. Combine ${decToFrac(1*x)} cups of rice with ${decToFrac(1.6*x)} cups of water or broth and ${decToFrac(.8*x)} Tbsp olive oil.`;
    CALIFORNIA.children[6].innerHTML = `For softer rice, increase liquid by ${decToFrac(.4*x)} cup and cook time by 5 minutes.`;
    WHITE.children[1].innerHTML = `1. Combine ${decToFrac(1*x)} cup of rice with ${decToFrac(2*x)} cups of water and ${decToFrac(1*x)} Tbsp olive oil.`;
};

//SELECT.addEventListener(`change`, toggleRecipe());

let gcd = (n,d) => {
    if(d===0) return n;
    return gcd(d, n%d | 0);
};

let length = (x) => {
    return x.toString.length;
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
};
