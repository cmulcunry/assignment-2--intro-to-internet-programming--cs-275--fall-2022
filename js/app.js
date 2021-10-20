let caliRiceRecipe = document.getElementById(`cali-rice-recipe`);
let whiteRiceRecipe = document.getElementById(`white-rice-recipe`);
let ricetextbox = document.getElementById(`rice-text-box`);
let softricecheckbox = document.getElementById(`checkbox`);

let caliRice = 0;

document.getElementById(`cali-Button`).onclick = () => {
    caliRiceRecipe.style.display = `block`;
    softricecheckbox.style.display = `block`;
    whiteRiceRecipe.style.display = `none`;
    returnAmountOfWater();
};

document.getElementById(`white-Button`).onclick = () => {
    caliRiceRecipe.style.display = `none`;
    softricecheckbox.style.display = `none`;
    whiteRiceRecipe.style.display = `block`;
    returnAmountOfWater();
};

document.getElementById(`white-Button`).onclick = () => {
    caliRiceRecipe.style.display = `none`;
    softricecheckbox.style.display = `none`;
    whiteRiceRecipe.style.display = `block`;
    returnAmountOfWater();
};

window.onload = function() {
    ricetextbox.addEventListener(`keyup`, returnAmountOfWater);
    whiteRiceRecipe.style.display = `block`;
    caliRiceRecipe.style.display = `none`;
    softricecheckbox.style.display = `none`;
    ricetextbox.value = 1;
    document.getElementById(`cooktime`).innerHTML = 25;
    returnAmountOfWater();
};

function returnAmountOfWater() {
    let ricefloat = ricetextbox.value;
    if (!isNumeric(ricefloat.value)) {
        if (ricefloat < 0) {
            alert(`Amount of rice can't be negative. Please enter another value.`);
        } else {
            if (caliRiceRecipe.style.display==`none`) {
                document.getElementById(`white-cups-rice`).innerHTML = ricefloat;
                document.getElementById(`white-cups-water`).innerHTML =
                Math.round((ricefloat * 2)*10)/10;
            } else {
                caliRice = Math.round((ricefloat * 1.6)*10)/10;
                document.getElementById(`cali-cups-rice`).innerHTML = ricefloat;
                document.getElementById(`cali-cups-water`).innerHTML = caliRice;
            }
        }
    } else {
        alert(`Amount of rice can't be negative. Please enter another value.`);
    }
}

document.getElementById(`softrice`).onclick = () => {
    if(document.getElementById(`softrice`).checked) {
        if (whiteRiceRecipe.style.display==`none`) {
            document.getElementById(`cali-cups-water`).innerHTML =
            (caliRice + .5);
            document.getElementById(`cooktime`).innerHTML = 30;
        }
    } else {
        document.getElementById(`cali-cups-water`).innerHTML = caliRice;
        document.getElementById(`cooktime`).innerHTML = 25;
    }
};

function isNumeric(str) {
    if (typeof str !== `string`) return false;
    return !isNaN(str) &&
    !isNaN(parseFloat(str));
}