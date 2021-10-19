window.onload = function() {
    let white = document.getElementById(`white`);
    let sproutedCalifornia = document.getElementById(`sproutedCalifornia`);
    let whiteRiceRecipe = document.getElementById(`whiteRiceRecipe`);
    let sproutedCaliRecipe = document.getElementById(`sproutedCaliRecipe`);
    let errorMessage = document.getElementById(`errorMessage`);
    let currentRice = `whiteRice`;

    function setWhite (cup) {
        document.getElementById(`whiteCups`).textContent = cup;
        document.getElementById(`whiteWater`).textContent = cup * 2;
    }

    function setCali (cup) {
        document.getElementById(`caliCups`).textContent = cup;
        document.getElementById(`caliWater`).textContent = cup * 1.6;
    }

    function numeric(str) {
        if(typeof str !== `string`) return false;
        return !isNaN(str) && !isNaN(parseFloat(str)) && str > 0;
    }

    document.getElementById(`textBox`).addEventListener(`keyup`, listener, false);
    function listener() {
        let cup = document.getElementById(`textBox`).value;
        errorMessage.classList.add(`recipeRelativeFixed`);
        if (!numeric(cup)) {
            errorMessage.classList.remove(`recipeRelativeFixed`);
            whiteRiceRecipe.classList.add(`recipeRelativeFixed`);
            sproutedCaliRecipe.classList.add(`recipeRelativeFixed`);
        }
        else {
            if (currentRice === `whiteRice`) {
                sproutedCaliRecipe.classList.add(`recipeRelativeFixed`);
                whiteRiceRecipe.classList.remove(`recipeRelativeFixed`);
                setWhite(cup);
            }
            else if (currentRice === `sproutedCali`) {
                whiteRiceRecipe.classList.add(`recipeRelativeFixed`);
                sproutedCaliRecipe.classList.remove(`recipeRelativeFixed`);
                setCali(cup);
            }
        }
    }

    white.onclick = () => {
        currentRice = `whiteRice`;
        listener();
    };

    sproutedCalifornia.onclick = () => {
        currentRice = `sproutedCali`;
        listener();
    };

    const END = document.getElementById(`textBox`).value.length;
    document.getElementById(`textBox`).setSelectionRange(END, END);
    document.getElementById(`textBox`).focus();
    document.getElementById(`whiteRice`).click();
};
