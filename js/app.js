let caliRiceRecipe = document.getElementById(`cali-rice-recipe`);
let whiteRiceRecipe = document.getElementById(`white-rice-recipe`);

document.getElementById(`cali-Button`).onclick = () => {
    caliRiceRecipe.style.display = `block`;
    whiteRiceRecipe.style.display = `none`;
}
document.getElementById(`white-Button`).onclick = () => {
    caliRiceRecipe.style.display = `none`;
    whiteRiceRecipe.style.display = `block`;
}

let ricetextbox = document.getElementById(`rice-text-box`);

window.onload = function() {
    ricetextbox.addEventListener("keyup", returnAmountOfWater);
    caliRiceRecipe.style.display = `block`;
    caliRiceRecipe.style.display = `none`;
};

function returnAmountOfWater() {
    let ricefloat = Math.ceil(ricetextbox.value);

    if (ricefloat < 0) {
        alert(`Amount of rice can't be negative. Please enter another value.`);
    } else {
        if (caliRiceRecipe.style.display==`none`) {
            document.getElementById(`cups-of-rice`).innerHTML = ricefloat;
            document.getElementById(`cups-of-water`).innerHTML = ricefloat * 2;
        } else {
            document.getElementById(`cali-cups-of-rice`).innerHTML = ricefloat;
            document.getElementById(`cali-cups-of-water`).innerHTML = ricefloat * 1.6;
        }
    }
}
