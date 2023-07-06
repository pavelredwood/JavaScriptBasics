// For the first task, you have to create a simple function — chooseName() — that prints 
// a random name from the provided array (names) to the provided paragraph (para), and then run it once.

const names = [
  "Chris",
  "Li Kang",
  "Anne",
  "Francesca",
  "Mustafa",
  "Tina",
  "Bert",
  "Jada",
];
const para = document.createElement("p");

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

// Add your code here
function chooseName() {
    const randomIndex = Math.floor(Math.random()* names.length);
    const randomName = names[randomIndex];
    para.textContent = randomName;
}
// Don't edit the code below here!

section.innerHTML = " ";

section.appendChild(para);
