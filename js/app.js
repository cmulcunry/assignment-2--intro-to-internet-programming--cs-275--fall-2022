let white = document.getElementById(`white`);
let cali = document.getElementById(`cali`);
let amount = document.getElementById(`amount`).value;
let displayRice = document.getElementById(`displayRice`);
let currentRice = `white`;

// eslint-disable-next-line no-unused-vars
function display()
{
    amount = document.getElementById(`amount`).value;
    if (currentRice == `white`)
    {
        displayRice.innerHTML =
        `Combine ` + amount +  ` cups of rice with `
        + (amount*2) + ` cups of water and 1 Tbsp olive oil.
        Bring to a boil, then reduce heat to the lowest setting.
        Cook for about 18 minutes.`;
    }
    else if (currentRice == `cali`)
    {
        displayRice.innerHTML =
        `For slightly al dente rice:
        Combine ` + amount +` cups of rice with `+ Math.round((amount*1.6)*100)/100 +
        ` cups of water or broth and 1 Tbsp olive oil.
        Bring to a boil and stir once to mix.
        Reduce heat to low, cover with a tight-fitting lid and cook for 25 minutes.
        Remove from heat and let stand for 5 minutes.
        Fluff with a fork and serve. \n

        For softer rice:
        Increase liquid by 1/2 cup and cook time by 5 minutes.`;
    }
}

let whiteRice =
`Combine ` + amount +  ` cups of rice with `
+ (amount*2) + ` cups of water and 1 Tbsp olive oil.
Bring to a boil, then reduce heat to the lowest setting.
Cook for about 18 minutes.`;

let caliRice =
`For slightly al dente rice:
Combine ` + amount +` cups of rice with `+ Math.round((amount*1.6)*100)/100 +
` cups of water or broth and 1 Tbsp olive oil.
Bring to a boil and stir once to mix.
Reduce heat to low, cover with a tight-fitting lid and cook for 25 minutes.
Remove from heat and let stand for 5 minutes.
Fluff with a fork and serve. \n

For softer rice:
Increase liquid by 1/2 cup and cook time by 5 minutes.`;

white.onclick = () =>
{
    currentRice = `white`;
    displayRice.textContent = whiteRice;
};

cali.onclick = () =>
{
    currentRice = `cali`;
    displayRice.textContent = caliRice;
};
