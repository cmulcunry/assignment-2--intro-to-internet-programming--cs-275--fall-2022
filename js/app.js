function init() {
    updateAmount();
};

function changeSelection(toWhat) {
    if (toWhat === "white rice") {
        document.getElementById("whiteDiv").classList.remove("disabled");
        document.getElementById("caliDiv").classList.add("disabled");
    } else {
        document.getElementById("whiteDiv").classList.add("disabled");
        document.getElementById("caliDiv").classList.remove("disabled");
    }
};

function dropdownChangeRice() {
    changeSelection(document.getElementById("riceSelector").value);
};

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

        washable = `${washable > 1 ? Math.floor(washable) : ""} ${numerator}/${denominator}`;
    }

    return washable;
};

function updateAmount() {
    let rice = document.getElementById("amountInput").value;

    if (isNaN(rice) || Number(rice) < 0) {
        rice = 1;
    } else {
        rice = Number(rice);
    }

    updateWhite(rice);
    updateCali(rice);
};

function updateWhite(rice) {
    const RICE_TEXT = `${washNumber(rice)} ${rice === 1 ? "cup" : "cups"}`;
    const WATER_TEXT = `${washNumber(rice * 2)} ${rice * 2 === 1 ? "cup" : "cups"}`;

    document.getElementById("whiteRice").innerHTML = RICE_TEXT;
    document.getElementById("whiteWater").innerHTML = WATER_TEXT;
};

function updateCali(rice) {
    const RICE_TEXT = `${washNumber(rice)} ${rice === 1 ? "cup" : "cups"}`;
    const WATER_TEXT = `${washNumber(rice * 8 / 5)} ${washNumber(rice * 8 / 5) === "1" ? "cup" : "cups"}`;

    document.getElementById("caliRice").innerHTML = RICE_TEXT;
    document.getElementById("caliWater").innerHTML = WATER_TEXT;
};
