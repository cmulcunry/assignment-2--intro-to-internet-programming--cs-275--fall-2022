window.onload = () => {
    document.getElementById(`cupAmount`).addEventListener(`keyup`, listener, false);

    //Variables to assign button functions to
    let whiteRiceButton = document.getElementById(`white-rice`);
    let sproutedRiceButton = document.getElementById(`sprouted-rice`);

    //Content of recipes
    let whiteRice = document.getElementById(`white`);
    let sproutedRice = document.getElementById(`sprouted`);

    //Hide recipes by default until buttonclick
    document.getElementById(`white`).style.display = `none`;
    document.getElementById(`sprouted`).style.display = `none`;
    document.getElementById(`cupContainer`).style.display = `none`;

    //Create functions to hide the recipes
    whiteRiceButton.onclick = function white() {
        document.getElementById(`sprouted`).style.display = `none`;
        document.getElementById(`white`).style.display = ``;
        document.getElementById(`cupContainer`).style.display = ``;
    };
    sproutedRiceButton.onclick = function sprouted() {
        document.getElementById(`sprouted`).style.display = ``;
        document.getElementById(`white`).style.display = `none`;
        document.getElementById(`cupContainer`).style.display = ``;
    }; 

    function listener() {
        let cups = document.getElementById(`cupAmount`).value;
        if (sproutedRice.style.display == `none`) {
            amountWhite(cups);
        }
        else if (whiteRice.style.display == `none`) {
            amountSprouted(cups);
        }
    }

    function amountWhite(cups) {
        let amountWhite = Math.ceil(cups);
        document.getElementById(`cupWater`).textContent = amountWhite * 2;
        document.getElementById(`cupRice`).textContent = amountWhite;
    }

    function amountSprouted(cups) {
        let amountSprouted = Math.ceil(cups);
        document.getElementById(`cupSproutRice`).textContent = amountSprouted;
        document.getElementById(`cupSproutWater`).textContent = amountSprouted * 1.6;
    }
};
