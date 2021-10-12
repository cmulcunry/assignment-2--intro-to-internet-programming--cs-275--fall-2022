let caliRiceRecipe = document.getElementById(`caliRiceRecipe`);
let whiteRiceRecipe = document.getElementById(`whiteRiceRecipe`);

document.getElementById(`caliButton`).onclick = () => {
    caliRiceRecipe.style.display = `block`;
    whiteRiceRecipe.style.display = `none`;
}
document.getElementById(`whiteButton`).onclick = () => {
    caliRiceRecipe.style.display = `none`;
    whiteRiceRecipe.style.display = `block`;
}

let ricetextbox = document.getElementById(`ricetextbox`);

window.onload = function() {
    ricetextbox.addEventListener("keyup", returnAmountOfWater);
    caliRiceRecipe.style.display = `block`;
    caliRiceRecipe.style.display = `none`;
};

function returnAmountOfWater() {
    let ricefloat = parseFloat(ricetextbox.value);

    if (ricefloat < 0) {
        alert(`Amount of rice can't be negative. Please enter another value.`);
    } else {
        if (caliRiceRecipe.style.display==`none`) {
            document.getElementById(`cupsofrice`).innerHTML = ricefloat;
            document.getElementById(`cupsofwater`).innerHTML = ricefloat * 2;
        } else {
            document.getElementById(`calicupsofrice`).innerHTML = ricefloat;
            document.getElementById(`calicupsofwater`).innerHTML = ricefloat * 1.6;
        }
    }
}
