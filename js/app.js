window.onload = () => {
    const EMOJIBUTTON = document.getElementById(`emoji-button`);
    const WHITERICEBUTTON = document.getElementById(`white-rice`);
    const CALIRICEBUTTON = document.getElementById(`cali-rice`);
    let whiteRecipe = document.getElementById(`white-recipe`);
    let caliRice = document.getElementById(`cali-recipe`);
    let error = document.getElementById(`error`);
    let currentRice = `white`;
    let currentVersion = `normal`;

    const END = document.getElementById(`given-cups`).value.length;
    document.getElementById(`given-cups`).setSelectionRange(END, END);
    document.getElementById(`given-cups`).focus();

    let calculatedWater = 0;
    function setwhiteRiceButton(cup) {
        calculatedWater = Math.round((cup * 2)*100)/100;
        if (currentVersion === `normal`) {
            document.getElementsByClassName(`cup`)[0].textContent = cup;
            document.getElementById(`white-water`).textContent = calculatedWater;
        } else {
            let riceEmoji = ``;
            for (let i = 0; i < cup; i++) {
                riceEmoji += `🍙`;
            }
            document.getElementsByClassName(`cup`)[2].textContent = riceEmoji;
            let waterEmoji = ``;
            for (let i = 0; i < calculatedWater; i++) {
                waterEmoji += `💦`;
            }
            document.getElementById(`white-water-emoji`).textContent = waterEmoji;
        }
    }

    function setcaliRiceButton(cup) {
        calculatedWater = Math.round((cup * 1.6)*100)/100;
        if (currentVersion === `normal`) {
            document.getElementsByClassName(`cup`)[1].textContent = cup;
            document.getElementById(`cali-water`).textContent = calculatedWater;
        } else {
            let riceEmoji = ``;
            for (let i = 0; i < cup; i++) {
                riceEmoji += `🍙`;
            }
            document.getElementsByClassName(`cup`)[3].textContent = riceEmoji;
            let waterEmoji = ``;
            for (let i = 0; i < calculatedWater; i++) {
                waterEmoji += `💦`;
            }
            document.getElementById(`cali-water-emoji`).textContent = waterEmoji;
        }
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
            caliRice.style.display = `none`;
        } else {
            if (currentRice === `white`) {
                caliRice.style.display = `none`;
                whiteRecipe.style.display = `block`;
                setwhiteRiceButton(cup);
            } else if (currentRice === `cali`) {
                whiteRecipe.style.display = `none`;
                caliRice.style.display = `block`;
                setcaliRiceButton(cup);
            }
        }
    }

    let turnOffRecipe = () => {
        error.style.display = `none`;
        whiteRecipe.style.display = `none`;
        caliRice.style.display = `none`;
    };

    let headerText = document.getElementsByTagName(`h1`)[0];
    let text = document.getElementsByTagName(`text`);
    let normalSetup = () => {
        turnOffRecipe();
        headerText.textContent = `Rice Recipes`;
        text[0].textContent = `Type of rice:`;
        text[1].textContent = `Number of cups:`;
        whiteRecipe = document.getElementById(`white-recipe`);
        caliRice = document.getElementById(`cali-recipe`);
        error = document.getElementById(`error`);
        WHITERICEBUTTON.textContent = `White Rice‍`;
        CALIRICEBUTTON.textContent = `California Sprouted Rice`;
        listener();
    };

    let emojiSetup = () => {
        turnOffRecipe();
        headerText.textContent = `🍥 🧾`;
        text[0].textContent = `⁉🍚`;
        text[1].textContent = `⁉⁉⁉🥛🥛🥛`;
        whiteRecipe = document.getElementById(`white-recipe-emoji`);
        caliRice = document.getElementById(`cali-recipe-emoji`);
        error = document.getElementById(`error-emoji`);
        WHITERICEBUTTON.textContent = `⚪👩‍🦳👨‍🦳👨‍💼👩‍`;
        CALIRICEBUTTON.textContent = `🥵🚒🔥🍚🧨`;
        listener();
    };

    EMOJIBUTTON.addEventListener(`click`, emojiButtonlistener, false);
    function emojiButtonlistener() {
        if (currentVersion !== (`emoji`)) {
            currentVersion = `emoji`;
            EMOJIBUTTON.innerText= `😁`;
            EMOJIBUTTON.classList.add(`emoji-version-clicked`);
            emojiSetup();
        } else {
            currentVersion = `normal`;
            EMOJIBUTTON.innerText= `😀`;
            EMOJIBUTTON.classList.remove(`emoji-version-clicked`);
            normalSetup();
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
