window.onload = () => {
    const WHITERICEBUTTON = document.getElementById(`white-rice`);
    const CALIRICEBUTTON = document.getElementById(`cali-rice`);
    const WHITERECIPE = document.getElementById(`white-recipe`);
    const CALIRECIPE = document.getElementById(`cali-recipe`);
    const ERROR = document.getElementById(`error`);
    let currentRice = `white`;

    const END = document.getElementById(`given-cups`).value.length;
    document.getElementById(`given-cups`).setSelectionRange(END, END);
    document.getElementById(`given-cups`).focus();

    function setwhiteRiceButton(cup) {
        document.getElementsByClassName(`cup`)[0].textContent = cup;
        document.getElementById(`white-water`).textContent =
        Math.round((cup * 2)*100)/100;
    }

    function setcaliRiceButton(cup) {
        document.getElementsByClassName(`cup`)[1].textContent = cup;
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
        ERROR.style.display = `none`;
        if (!isNumeric(cup)) {
            ERROR.style.display = `block`;
            WHITERECIPE.style.display = `none`;
            CALIRECIPE.style.display = `none`;
        } else {
            if (currentRice === `white`) {
                CALIRECIPE.style.display = `none`;
                WHITERECIPE.style.display = `block`;
                setwhiteRiceButton(cup);
            } else if (currentRice === `cali`) {
                WHITERECIPE.style.display = `none`;
                CALIRECIPE.style.display = `block`;
                setcaliRiceButton(cup);
            }
        }
    }

    WHITERICEBUTTON.addEventListener(`click`, whiteButtonlistener, false);
    function whiteButtonlistener() {
        currentRice = `white`;
        listener();
        WHITERICEBUTTON.classList.add(`button-clicked`);
        CALIRICEBUTTON.classList.remove(`button-clicked`);
    }

    CALIRICEBUTTON.addEventListener(`click`, caliButtonlistener, false);
    function caliButtonlistener() {
        currentRice = `cali`;
        listener();
        CALIRICEBUTTON.classList.add(`button-clicked`);
        WHITERICEBUTTON.classList.remove(`button-clicked`);
    }

    document.getElementById(`white-rice`).click();
};
