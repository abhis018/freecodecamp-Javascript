const range = (start, end) => Array(); // created an empty array inside the range function

window.onload = () => {
  const container = document.getElementById("container"); //select an element(container) from the html by id
  const createLabel = (name) => {
    const label = document.createElement("div"); // created a div element and place it into the label variable
    label.className = "label"; // added a classname(label) to that div
    label.textContent = name; // set a text to that div 
    container.appendChild(label); // insert that div inside the container element
  }
}