const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");
function Check (){
    const regex1 = /^\(\d{3}\) \d{3}-\d{4}$/;
    const regex2 = /^\(\d{3}\)\d{3}-\d{4}$/;
    const regex3 = /^\d{3}-\d{3}-\d{4}$/;
    const regex4 = /^\d{10,11}$/;
    const regex5 = /^\d{3} \d{3} \d{4}$/;
  if(userInput.value === ""){
    alert("Please provide a phone number");
  }else if(regex.test(userInput.value)){
    const digitsOnly = userInput.value.relace(/\D/g,"");
    const digitCount = digitsOnly.length;
  }else{
    result.textContent = "invalid";
  }
}
function Clear(){
  result.innerHTML = "";
}
checkBtn.addEventListener("click", Check);
clearBtn.addEventListener("click", Clear);