window.onload = () => {
    let whiteRice = document.getElementById(`whiteRice`);
    let caliRice = document.getElementById(`caliRice`);
    let whiteRecipe = document.getElementById(`whiteRecipe`);
    let caliRecipe = document.getElementById(`caliRecipe`);
    let error = document.getElementById(`error`);
    let currentRice = `white`;

    function setWhiteRice(cup) {
        document.getElementById(`cup`).textContent = cup;
        document.getElementById(`whiteWater`).textContent = Math.round((cup * 2)*100)/100;
    }

    function setCaliRice(cup) {
        document.getElementById(`cups`).textContent = cup;
        document.getElementById(`caliWater`).textContent = Math.round((cup * 1.6)*100)/100;
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
        error.classList.add(`relativeFixed`);
        if (!isNumeric(cup)) {
            error.classList.remove(`relativeFixed`);
            whiteRecipe.classList.add(`relativeFixed`);
            caliRecipe.classList.add(`relativeFixed`);
        } else {
            if (currentRice === `white`) {
                caliRecipe.classList.add(`relativeFixed`);
                whiteRecipe.classList.remove(`relativeFixed`);
                setWhiteRice(cup);
            } else if (currentRice === `cali`) {
                whiteRecipe.classList.add(`relativeFixed`);
                caliRecipe.classList.remove(`relativeFixed`);
                setCaliRice(cup);
            }
        }
    }

    whiteRice.onclick = () => {
        currentRice = `white`;
        listener();
        whiteRice.style.background=`#bd8f97`;
        whiteRice.style.color=`white`;
        whiteRice.style.border=`1px solid white`;
        caliRice.style.border=`none`;
        caliRice.style.background=`grey`;
    };

    caliRice.onclick = () => {
        currentRice = `cali`;
        listener();
        caliRice.style.background=`#bd8f97`;
        caliRice.style.color=`white`;
        caliRice.style.border=`1px solid white`;
        whiteRice.style.border=`none`;
        whiteRice.style.background=`grey`;
    };

    const END = document.getElementById(`givenCups`).value.length;
    document.getElementById(`givenCups`).setSelectionRange(END, END);
    document.getElementById(`givenCups`).focus();
    document.getElementById(`whiteRice`).click();
};
