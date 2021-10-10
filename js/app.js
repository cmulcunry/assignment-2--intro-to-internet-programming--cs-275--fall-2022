let whiteRice = document.getElementById(`whiteRice`);
let caliRice = document.getElementById(`caliRice`);
let recipe = document.getElementById(`recipe`);
var cups = document.getElementById(`cups`).value;

var currentRice = `white`;

window.onload = function() {
    document.getElementById(`cups`).focus();
    document.getElementById(`whiteRice`).click();
};

//https://stackoverflow.com/questions/175739/built-in-way-in-javascript-to-
//check-if-a-string-is-a-valid-number?page=1&tab=votes#tab-top
function isNumeric(str) {
    if (typeof str != `string`) return false; // we only process strings!
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string
    !isNaN(parseFloat(str)); // ...and ensure strings of whitespace fail
}

function listener() { // eslint-disable-line no-unused-vars
    cups = document.getElementById(`cups`).value;
    if (!isNumeric(cups)) {
        recipe.textContent =
        `Error, please input a number.`;
    } else {
        if (currentRice == `white`) {
            recipe.textContent =
            `Combine `+ cups +` cup(s) of rice with ` +
            Math.round((cups * 2)*100)/100 +
            ` cups of water and 1 Tbsp olive oil.\n` +
            `Bring to a boil, then reduce heat to the lowest setting.\n` +
            `Cook for about 18 minutes.`;
        } else if (currentRice == `cali`) {
            recipe.textContent =
            `For slightly al dente rice: Combine ` + cups +
            ` cup(s) of rice with  ` +
            Math.round((cups * 1.6)*100)/100 + ` cups of water or broth and 1 ` +
            `Tbsp olive oil.\n Bring to a boil and stir once to mix.\n` +
            `Reduce heat to low, cover with a tight-fitting lid and cook for 25 ` +
            `minutes.\n` +
            `Remove from heat and let stand for 5 minutes.\n` +
            `Fluff with a fork and serve.\n` +
            `For softer rice: Increase liquid by 1/2 cup and cook time by ` +
            `5 minutes.`;
        }
    }
}

let whiteRiceRecipe =
    `Combine `+ cups +` cup(s) of rice with ` + Math.round((cups * 2)*100)/100 +
    ` cups of water and 1 Tbsp olive oil.\n` +
    `Bring to a boil, then reduce heat to the lowest setting.\n` +
    `Cook for about 18 minutes.`;

let caliRiceRecipe =
    `For slightly al dente rice: Combine ` + cups +
    ` cup(s) of rice with  ` +
    Math.round((cups * 1.6)*100)/100 + ` cups of water or broth and 1 Tbsp ` +
    `olive oil.\n` +
    `Bring to a boil and stir once to mix.\n` +
    `Reduce heat to low, cover with a tight-fitting lid and cook for 25 ` +
    `minutes.\n` +
    `Remove from heat and let stand for 5 minutes.\n` +
    `Fluff with a fork and serve.\n` +
    `For softer rice: Increase liquid by 1/2 cup and cook time by 5 minutes.`;

whiteRice.onclick = () => {
    currentRice = `white`;
    recipe.textContent = whiteRiceRecipe;
    whiteRice.style.background=`#bd8f97`;
    whiteRice.style.color=`white`;
    whiteRice.style.border=`1px solid white`;
    caliRice.style.border=`none`;
    caliRice.style.background=`grey`;
};

caliRice.onclick = () => {
    currentRice = `cali`;
    recipe.textContent = caliRiceRecipe;
    caliRice.style.background=`#bd8f97`;
    caliRice.style.color=`white`;
    caliRice.style.border=`1px solid white`;
    whiteRice.style.border=`none`;
    whiteRice.style.background=`grey`;
};
