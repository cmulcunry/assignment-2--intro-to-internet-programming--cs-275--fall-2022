window.onload = () => {
    const WHITE = document.getElementById(`white`),
        CALIFORNIA = document.getElementById(`california`),
        INPUT = document.getElementById(`input`),
        SELECT = document.getElementById(`select`),
        RICETYPE = document.getElementById(`riceType`),
        CALIRICE = document.getElementById(`caliRice`),
        CALIWATER = document.getElementById(`caliWater`),
        CALISOFTWATER = document.getElementById(`caliSoftWater`),
        WHITERICE = document.getElementById(`whiteRice`),
        WHITEWATER = document.getElementById(`whiteWater`);

    let updateQuantities = () => {
        let x = INPUT.value;
        CALIRICE.innerHTML = `${Math.round(x*2)/2}`;
        CALIWATER.innerHTML = `${Math.round(1.6*x)}`;
        CALISOFTWATER.innerHTML = `${Math.round(0.4*x)}`;
        WHITERICE.innerHTML = `${Math.round(x)}`;
        WHITEWATER.innerHTML = `${Math.round(2*x)}`;
    };

    let toggleSelect = () => {
        if(SELECT.selectedOptions[0].value === `California Sprouted Rice`) {
            CALIFORNIA.style.display = `block`;
            WHITE.style.display = `none`;
            RICETYPE.innerHTML = `California Sprouted`;
        }
        else if(SELECT.selectedOptions[0].value === `White Rice`) {
            CALIFORNIA.style.display = `none`;
            WHITE.style.display = `block`;
            RICETYPE.innerHTML = `White`;
        }
    };

    SELECT.addEventListener(`click`, () => {toggleSelect();});
    INPUT.addEventListener(`input`,() => {updateQuantities();});
};
