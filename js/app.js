window.onload = () => {
    //Value of how many cups
    let cups = document.getElementById(`cupAmount`);
    cups.setAttribute(`value`, cups.value);
    //Variables to assign button functions to
    let whiteRiceButton = document.getElementById(`white-rice`);
    let sproutedRiceButton = document.getElementById(`sprouted-rice`);
    //let calculate = document.getElementById(`cupSubmit`);

    //calculate.addEventListener(`click`, cups, false); 
    //Content of recipes
    let whiteRice = document.getElementById(`white`);
    let sproutedRice = document.getElementById(`sprouted`);

    //Hide recipes by default until buttonclick
    document.getElementById(`white`).style.display = `none`;
    document.getElementById(`sprouted`).style.display = `none`;

    //Create functions to hide the recipes
    whiteRiceButton.onclick = function white() {
        document.getElementById(`sprouted`).style.display = `none`;
        document.getElementById(`white`).style.display = ``;
    };
    sproutedRiceButton.onclick = function sprouted() {
        document.getElementById(`sprouted`).style.display = ``;
        document.getElementById(`white`).style.display = `none`;

    };

    //Function to show how many cups
    function amountOfCups() {
        let amount = Math.ceil(cups.value);

        if (sproutedRice.style.display == `none`) {
            document.getElementById(`cupRice`).value = amount;
            document.getElementById(`cupWater`).value = amount * 2;
        } else
        {
            if (whiteRice.style.display == `none`) {
                document.getElementById(`cupSproutRice`).value = amount;
                document.getElementById(`cupSproutWater`).value = amount * 1.6;
            }
        }
    }



   // alert(`Cup amount is ${amountofCups}`);
};
