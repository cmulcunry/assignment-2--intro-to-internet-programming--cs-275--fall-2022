window.onload = () => {
    let whiteRice = document.getElementById(`whiteRice`);
    let caliRice = document.getElementById(`caliRice`);
    let whiteRecipe = document.getElementById(`whiteRecipe`);
    let caliRecipe = document.getElementById(`caliRecipe`);
    let error = document.getElementById(`error`);
    let currentRice = `white`;
    error.style.display = `none`;
    caliRecipe.style.display = `none`;

    function setWhiteRice(cup) {
        document.getElementById(`cup`).textContent = cup;
        document.getElementById(`whiteWater`).textContent =
        Math.round((cup * 2)*100)/100;
    }

    function setCaliRice(cup) {
        document.getElementById(`cups`).textContent = cup;
        document.getElementById(`caliWater`).textContent =
        Math.round((cup * 1.6)*100)/100;
    }

    function isNumeric(str) {
        if (typeof str !== `string`) return false;
        return !isNaN(str) &&
        !isNaN(parseFloat(str)) &&
        str > 0;
    }

    document.getElementById(`givenCups`).addEventListener(`keyup`, listener, false);
    function listener()  {
        let cup = document.getElementById(`givenCups`).value;
        error.style.display = `none`;
        if (!isNumeric(cup)) {
            error.style.display = `block`;
            whiteRecipe.style.display = `none`;
            caliRecipe.style.display = `none`;
        } else {
            if (currentRice === `white`) {
                caliRecipe.style.display = `none`;
                whiteRecipe.style.display = `block`;
                setWhiteRice(cup);
            } else if (currentRice === `cali`) {
                whiteRecipe.style.display = `none`;
                caliRecipe.style.display = `block`;
                setCaliRice(cup);
            }
        }
    }

    whiteRice.onclick = () => {
        currentRice = `white`;
        listener();
        whiteRice.classList.add(`buttonClicked`);
        caliRice.classList.remove(`buttonClicked`);
    };

    caliRice.onclick = () => {
        currentRice = `cali`;
        listener();
        caliRice.classList.add(`buttonClicked`);
        whiteRice.classList.remove(`buttonClicked`);
    };

    const END = document.getElementById(`givenCups`).value.length;
    document.getElementById(`givenCups`).setSelectionRange(END, END);
    document.getElementById(`givenCups`).focus();
    document.getElementById(`whiteRice`).click();
};
