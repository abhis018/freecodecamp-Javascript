const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("result-div");
function Check (){
  if(userInput.value === ""){
    alert("Please provide a phone number");
  }
}
function Clear(){
  result.innerHtml = "";
}
checkBtn.addEventListener("click", Check);
clearBtn.addEventListener("click", Clear);