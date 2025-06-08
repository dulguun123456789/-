const animals = [
  "🐭 Mouse", "🐮 Cow", "🐯 Tiger", "🐰 Rabbit", "🐉 Dragon", "🐍 Snake",
  "🐴 Horse", "🐑 Sheep", "🐵 Monkey", "🐔 Rooster", "🐶 Dog", "🐷 Pig"
];

function getAnimal(year) {
  const baseYear = 2020; // Mouse year
  const index = (year - baseYear) % 12;
  return animals[(index + 12) % 12];
}

function fromAge() {
  const age = parseInt(document.getElementById("ageInput").value);
  const now = new Date().getFullYear();
  const birthYear = now - age;

  const r1 = document.getElementById("ageResult1");
  const r2 = document.getElementById("ageResult2");

  if (!age || age <= 0 || age > 120) {
    r1.innerText = "❌ Please enter a valid age.";
    r2.innerText = "";
    return;
  }

  const animal = getAnimal(birthYear);
  r1.innerText = `🎂 You were born in ${birthYear}.`;
  r2.innerText = `🐾 Your animal is ${animal}.`;
}

function fromYear() {
  const year = parseInt(document.getElementById("yearInput").value);
  const now = new Date().getFullYear();
  const age = now - year;

  const r1 = document.getElementById("yearResult1");
  const r2 = document.getElementById("yearResult2");

  if (!year || year < 1900 || year > now) {
    r1.innerText = "❌ Please enter a valid birth year.";
    r2.innerText = "";
    return;
  }

  const animal = getAnimal(year);
  r1.innerText = `🎂 You are ${age} years old.`;
  r2.innerText = `🐾 Your animal is ${animal}.`;
}
