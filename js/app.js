let caliRiceRecipe = document.getElementById(`caliRiceRecipe`);
let caliButton = document.getElementById(`caliButton`);

let whiteRiceRecipe = document.getElementById(`whiteRiceRecipe`);
let whiteRiceButton = document.getElementById(`whiteButton`);

let ricetextbox = document.getElementById(`ricetextbox`);

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

let whiteRiceRecipeSelected = () => {

    caliRiceRecipe.style.display = `none`;
    whiteRiceRecipe.style.display = `block`;
};

let caliRiceRecipeSelected = () => {

    caliRiceRecipe.style.display = `block`;
    whiteRiceRecipe.style.display = `none`;
};

caliButton.addEventListener(`click`, caliRiceRecipeSelected);
whiteRiceButton.addEventListener(`click`, whiteRiceRecipeSelected);
