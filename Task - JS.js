let name = "Kaia-Rose";
let age = 5;
let x = false;
let lastName = "Blanchard";

let inTenYears = (age += 10);
console.log(inTenYears);

fullName = name + " " + lastName;
console.log(fullName);

if ((lastName = "Blanchard")) {
  console.log("Last name identified");
}

if (inTenYears >= 15) {
  console.log("You are old enough");
} else {
  console.log("You are not old enough yet");
}

if ((name = "Kaia") && (age = 5)) {
  console.log("Correct canine identified");
}

const person = {
  name: "Steven",
  age: 16,
  height: "175cm",
};

console.log(person.name);

const daysOfTheWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
console.log("Today is " + daysOfTheWeek[0]);
