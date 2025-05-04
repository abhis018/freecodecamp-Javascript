const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");
function Check (){
    const regex = /^1?\s?(?:\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
  if(userInput.value === ""){
    alert("Please provide a phone number");
  }else if(regex.test(userInput.value)){
    result.textContent = `Valid US number: ${userInput.value}`; 
  }else{
    result.textContent = `Invalid US number: ${userInput.value}`;
  }
}
function Clear(){
  result.innerHTML = "";
}
checkBtn.addEventListener("click", Check);
clearBtn.addEventListener("click", Clear);