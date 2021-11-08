window.onload = function myButton() {
    let CookRecipy = prompt(`Do you want to learn how to make White Rice
or Sprouted California Rice?`);
    if (CookRecipy != null) {
        document.getElementById(`Recipy`).innerHTML =`How many cups?`;
    }
    let HowMuch = prompt(`How many cups of rice would you like to make?`, `1`);
    if (CookRecipy != null) {
        document.getElementById(`Recipy`).innerHTML = `You haven't selected
        the amount.`;
    }
    if(CookRecipy===`Sprouted California Rice`){
        document.getElementById(`Recipy`).innerHTML = `For slightly al dente rice:
Combine ` + HowMuch + ` cup of rice with ` + HowMuch * 2 + ` cups of water or
broth and 1 Tbsp olive oil. Bring to a boil and stire once to mix. Reduce heat to
low, cover with a tigh-fitting lid and cook for about ` + (25 + ((HowMuch - 1) *
10)) + ` minutes. Remove from heat and let stand for 5 minutes. Fluff with a fork
and serve.` +
`For softer rice: Increase liquid by 1/2 cup and cook time by 5 minutes.`;
    } else if (CookRecipy===`White Rice`){
        document.getElementById(`Recipy`).innerHTML = `Combine ` + HowMuch +
` cup of rice with`+  HowMuch *2 + `cups of water and `+ HowMuch + `Tbsp
olive oil. Bring to a boil, then reduce heat to the lowest setting. Cook for
about ` + (18 + ((HowMuch - 1) * 10))  + ` minutes.`;
    } else {
        document.getElementById(`Recipy`).innerHTML=`Please select all
        options available`;
    }
};
