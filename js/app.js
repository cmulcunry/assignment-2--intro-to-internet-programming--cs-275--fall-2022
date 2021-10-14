const WHITE = document.getElementById(`white`);
const CALIFORNIA = document.getElementById(`california`);
const BUTTON = document.getElementById(`button`);

let toggleRecipe = () => {
    if(CALIFORNIA.style.display === `none`) {
        CALIFORNIA.style.display = `block`;
        WHITE.style.display = `none`;
        BUTTON.innerHTML = `White Rice`;
    }
    else {
        CALIFORNIA.style.display = `none`;
        WHITE.style.display = `block`;
        BUTTON.innerHTML = `California Sprouted Rice`;
    }
};
