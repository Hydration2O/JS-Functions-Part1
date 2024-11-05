function printName() {
  console.log("Steve McMain");
}
printName();
function printAge(birthYear) {
  // const birthYear = prompt("write your birth year", 0);
  let currentYear = new Date().getFullYear();
  age = currentYear - birthYear;
  console.log(`${age}`);
  return age;
}
printAge(1522);

function printAgeAndName(name,birthYear) {
  console.log(`Hello ${name} you are ${printAge(birthYear)} years old`)
}
printAgeAndName("bob",1989);
function printHello(name, language) {
  // const name = prompt("Write your name", "Jane Doe");
  //   const language =prompt("choose language, en = english, es = espaneol, fr = french, tr = arabic", "en");
  switch (language) {
    case "en":
      console.log(`Hello ${name}`);
      break;
    case "es":
      console.log(`Hola ${name}`);
      break;
    case "fr":
      console.log(`Bonjour${name}`);
      break;
    case "tr":
      console.log(`Merhaba ${name}`);
      break;
    default:
      console.log(`Hello ${name}`);
  }
 }
printHello("salem", "es");
function printMax(x, y) {
  // const x= prompt("Enter the first number X", 0);
  // const y=prompt("Enter the second number Y", 1);
  if (x > y) console.log(`X=${x} so it is bigger`);
  else console.log( `Y=${y} so it is bigger`);

}
printMax(5,6);