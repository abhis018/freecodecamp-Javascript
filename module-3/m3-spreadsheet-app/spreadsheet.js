const range = (start, end) => 
  Array(end - start + 1)        // create an array of appropriate length
    .fill(start)                // fill all elements with the starting value
    .map((element, index) => element + index); // adjust each value by index

const charRange = (start, end) => 
  range(start.charCodeAt(0), end.charCodeAt(0))
  .map(code => String.fromCharCode(code));

window.onload = () => {
  const container = document.getElementById("container"); //select an element(container) from the html by id
  const createLabel = (name) => {
    const label = document.createElement("div"); // created a div element and place it into the label variable
    label.className = "label"; // added a classname(label) to that div
    label.textContent = name; // set a text to that div 
    container.appendChild(label); // insert that div inside the container element
  }
}
const letters = charRange("A", "J");
letters.forEach(createLabel);
range(1, 99).forEach(number => {
  createLabel(number);
 letters.forEach(letter => {
  const input = document.createElement("input");
  input.type = "text";
  input.id = letter + number;

 })   
})