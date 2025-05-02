const number = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");
function Convert (){
  if(output.value === ""){
    alert("Please input a value");
  }else if(output.value <= 0){
    output.textContent = `Please enter a number greater than or equal to 1`;
  }else if(output.value >= 4000){
    output.textContent = `Please enter a number less than or equal to 3999`;
  }
}
convertButton.addEventListener("click", Convert);
