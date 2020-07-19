const name = "Henrique";
const weight = 67;
const height = 1.75;
const gender = "Male";

const imc = weight / (height * height);

if ( imc >= 30) {
  console.log(`${name} are you overweight, IMC: ${imc.toFixed(2)}`);
} else {
  console.log(`${name} you are not overweight, IMC: ${imc.toFixed(2)}`);
}