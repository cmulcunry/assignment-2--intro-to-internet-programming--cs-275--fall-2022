window.onload = () => {
    let whiteRice = document.getElementById(`white-rice`);
    let caliRice = document.getElementById(`cali-rice`);
    let whiteRecipe = document.getElementById(`white-recipe`);
    let caliRecipe = document.getElementById(`cali-recipe`);
    let error = document.getElementById(`error`);
    let currentRice = `white`;
    error.style.display = `none`;
    caliRecipe.style.display = `none`;

    function setWhiteRice(cup) {
        document.getElementById(`cup`).textContent = cup;
        document.getElementById(`white-water`).textContent =
        Math.round((cup * 2)*100)/100;
    }

    function setCaliRice(cup) {
        document.getElementById(`cups`).textContent = cup;
        document.getElementById(`cali-water`).textContent =
        Math.round((cup * 1.6)*100)/100;
    }

    function isNumeric(str) {
        if (typeof str !== `string`) return false;
        return !isNaN(str) &&
        !isNaN(parseFloat(str)) &&
        str > 0;
    }

    document.getElementById(`given-cups`).addEventListener(`keyup`, listener, false);
    function listener()  {
        let cup = document.getElementById(`given-cups`).value;
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
        whiteRice.classList.add(`button-clicked`);
        caliRice.classList.remove(`button-clicked`);
    };

    caliRice.onclick = () => {
        currentRice = `cali`;
        listener();
        caliRice.classList.add(`button-clicked`);
        whiteRice.classList.remove(`button-clicked`);
    };

    const END = document.getElementById(`given-cups`).value.length;
    document.getElementById(`given-cups`).setSelectionRange(END, END);
    document.getElementById(`given-cups`).focus();
    document.getElementById(`white-rice`).click();
};
