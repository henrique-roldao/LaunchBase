const name = "Miss Polskiws";
const gender = "F";
const age = 70;
const contribution = 32;

if (gender === "M" && contribution >= 35) {
  if (contribution + age >= 95) {
    console.log(`${name} you can retire.`);
  } else {
    console.log(`${name} you cannot retire.`);
  }
}

if (gender === "F" && contribution >= 30) {
  if (contribution + age >= 85) {
    console.log(`${name} you can retire.`);
  } else {
    console.log(`${name} you cannot retire.`);
  }
}