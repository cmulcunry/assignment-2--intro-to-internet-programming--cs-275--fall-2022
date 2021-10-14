

function myFunction () {
    let rice = prompt("Do you want to cook White Rice or Sprouted California Rice ?");
    document.getElementById("Recipy").innerHTML
    let howMuch = prompt("How much rice would  you like  to cook (cups) ", "1");


    if (rice === "White Rice") {



        console.log( "Combine" + howMuch + "cup of rice with  "
            + howMuch * 2 + "cups of water and " + howMuch + "tbsp olive oil. Bring to a boil, then reduce heat to the lowest setting. Cook for about"
            + (18 + ((howMuch - 1) * 10)) + "minutes.") ;
    }


    else if (rice === "Sprouted California Rice") {

        console.log( "Combine" + howMuch +
            "cups" + "of rice with " + howMuch * 1.75 + "cups of water or both and "
            + howMuch + " Tbsp olive oil. Bring to a boil and stir once to mix. Reduce heat to low, cover with a tight-fitting lid and cook for"
            + (25 + ((howMuch - 1) * 10)) + "minutes. Remove from heat and let stand for" + 5 * howMuch + "minutes.Fluff with a fork and serve.");
    }

}
