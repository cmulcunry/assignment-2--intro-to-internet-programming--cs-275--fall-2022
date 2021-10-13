/*const WHITE = document.getElementById(`white`);
const CALIFORNIA = document.getElementById(`california`);
const INPUT = document.getElementById(`input`)

WHITE.style.display = `none`;
WHITE.style.display = `block`;

CALIFORNIA.style.display = `none`;
CALIFORNIA.style.display = `block`;*/

const WHITE = document.getElementById(`white`);
const CALIFORNIA = document.getElementById(`california`);

/*let toggleCalifornia = () => {
    if(CALIFORNIA.style.display === `none`) CALIFORNIA.style.display = `block`;
    else CALIFORNIA.style.display = `none`;
};

let toggleWhite = () => {
    if(WHITE.style.display === `none`) WHITE.style.display = `block`;
    else WHITE.style.display = `none`;
};*/

let toggleButton = () => {
    if(CALIFORNIA.style.display === `none`) {
        CALIFORNIA.style.display = `block`;
        WHITE.style.display = `none`;
    }
    else {
        CALIFORNIA.style.display = `none`;
        WHITE.style.display = `block`;
    }
};
