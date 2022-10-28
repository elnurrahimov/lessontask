const sentence = ["sense", "make", "all", "will", "This"];
let trueSentence = [...sentence];
let reverseArray = (trueSentence) => {
  console.log(trueSentence.reverse());
};
reverseArray(trueSentence);
//-------------------------//
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
const greetAliens = (arr) => {
  arr.forEach((item) => {
    console.log(
      `Oh powerful ${item}, we humans offer our unconditional surrender!`
    );
  });
};

greetAliens(aliens);

//----------------------------//
const coolStuff = [
  "gameboys",
  "skateboards",
  "backwards hats",
  "my room",
  "temporary tattoos",
];
const myStuff = ["sweaters", "skateboards", "family-night", "my room"];
const sameStuff = [];
function justCoolStuff(arr1, arr2) {
  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        sameStuff.push(arr1[i]);
      }
    }
  }
  console.log(sameStuff);
}
justCoolStuff(myStuff, coolStuff);
//------------------------------//
const meal = [
  { name: "arugula", source: "plant" },
  { name: "tomatoes", source: "plant" },
  { name: "lemon", source: "plant" },
  { name: "olive oil", source: "plant" },
];
const dinner = [
  { name: "hamburger", source: "meat" },
  { name: "cheese", source: "dairy" },
  { name: "ketchup", source: "plant" },
  { name: "bun", source: "plant" },
];

let isTheDinnerVegan = (meal) => {
  let type = true;
  meal.forEach((item) => {
    const source = Object.values(item)[1];
    if (source != "plant") {
      type = false;
    }
  });
  return type;
};
console.log(isTheDinnerVegan(meal));
console.log(isTheDinnerVegan(dinner));
