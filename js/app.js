window.onload = () => {
    document.getElementById(`cupAmount`).addEventListener(`keyup`, listener, false);

    let whiteRiceButton = document.getElementById(`white-rice`);
    let sproutedRiceButton = document.getElementById(`sprouted-rice`);

    let whiteRice = document.getElementById(`white`);
    let sproutedRice = document.getElementById(`sprouted`);

    document.getElementById(`white`).style.display = `none`;
    document.getElementById(`sprouted`).style.display = `none`;
    document.getElementById(`cupContainer`).style.display = `none`;

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
