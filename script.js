const fruitsA = ["banana", "apple", "Strawberry", "Kiwi", "Orange"];
const fruitsB = ["banana", "apple", "Kiwi", "Kiwi", "Pineapple"];

console.log(updateArray(fruitsA, fruitsB));

function updateArray(a, b) {
  let newArray = [];
  let seenFruit = [];

  for (let fruit of b) {
    if (!a.includes(fruit)) {
      newArray.push(`delete.${fruit}`);
    } else if (a.includes(fruit)) {
      newArray.push(fruit);
    }
  }

  for (let fruit of a) {
    if (!b.includes(fruit)) {
      newArray.push(`add.${fruit}`);
    }
  }

  for (let i = 0; i < newArray.length; i++) {
    if (seenFruit.includes(newArray[i])) {
      newArray[i] = `duplicate.${newArray[i]}`;
    } else {
      seenFruit.push(newArray[i]);
    }
  }

  return newArray;
}
