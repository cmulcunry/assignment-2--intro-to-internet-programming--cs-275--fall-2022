
let caliRiceRecipe = document.getElementById(`caliRiceRecipe`);
let caliButton = document.getElementById(`caliButton`);

let whiteRiceRecipe = document.getElementById(`whiteRiceRecipe`);
let whiteRiceButton = document.getElementById(`whiteButton`);


let whiteRiceRecipeSelected = () => {

    if (caliRiceRecipe.style.display=="none"){
      caliRiceRecipe.style.display = 'block';
        whiteRiceRecipe.style.display = 'none';
  } else {
    caliRiceRecipe.style.display = 'none';
      whiteRiceRecipe.style.display = 'block';
  }

};

caliButton.addEventListener("click", whiteRiceRecipeSelected);
whiteRiceButton.addEventListener("click", whiteRiceRecipeSelected);
