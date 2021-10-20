window.onload = () => {
    updateAmount();
    dropdownChangeRice();
};

function changeSelection(toWhat) {
    if (toWhat === `white rice`) {
        document.getElementById(`white-div`).classList.remove(`disabled`);
        document.getElementById(`cali-div`).classList.add(`disabled`);
    } else {
        document.getElementById(`white-div`).classList.add(`disabled`);
        document.getElementById(`cali-div`).classList.remove(`disabled`);
    }
}

function dropdownChangeRice() {
    changeSelection(document.getElementById(`rice-selector`).value);
}

function washNumber(washable) {
    if (isNaN(washable)) return washable;

    washable = Number(washable);
    if (Math.floor(washable) < washable) {
        const WASHABLE_DECIMAL = washable - Math.floor(washable);
        let numerator = 1;

        while (numerator/16 < WASHABLE_DECIMAL) {
            numerator += 1;
        }

        let denominator = 16;
        while (!(numerator % 2)) {
            numerator /= 2;
            denominator /= 2;
        }

        if (numerator === 1 && denominator === 1) {
            washable = `${Math.ceil(washable)}`;
        } else {
            washable = `${washable > 1 ? Math.floor(washable) : ``}`
                + `${numerator}/${denominator}`;
        }
    }

    return washable;
}

function updateAmount() {
    let rice = document.getElementById(`amount-input`).value;

    if (isNaN(rice) || Number(rice) < 0) {
        rice = 1;
    } else {
        rice = Number(rice);

        if (rice > 999) {
            rice = 999;
        }
    }

    updateWhite(rice);
    updateCali(rice);
}

function updateWhite(rice) {
    const RICE_TEXT = `${washNumber(rice)} ${rice === 1 ? `cup` : `cups`}`;
    const WATER_TEXT = `${washNumber(rice * 2)} ${rice * 2 === 1 ? `cup` : `cups`}`;

    document.getElementById(`white-rice`).innerHTML = RICE_TEXT;
    document.getElementById(`white-water`).innerHTML = WATER_TEXT;
}

function updateCali(rice) {
    const RICE_TEXT = `${washNumber(rice)} ${rice === 1 ? `cup` : `cups`}`;
    const WATER_TEXT = `${washNumber(rice * 8 / 5)}`
        + `${washNumber(rice * 8 / 5) === `1` ? `cup` : `cups`}`;

    document.getElementById(`cali-rice`).innerHTML = RICE_TEXT;
    document.getElementById(`cali-water`).innerHTML = WATER_TEXT;
}
