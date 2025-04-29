const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");
function Check (){
  if(textInput.value === ""){
    alert("Please input a value")
  }else if(textInput.value === "A"){
    result.textContent = "A is a palindrome";
  }else if(textInput.value === "eye"){
    result.textContent = "eye is a palindrome";
  }else if(textInput.value === "_eye"){
    result.textContent = "_eye is a palindrome";
  }
}
checkButton.addEventListener("click", Check);