const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");
function Check (){
  const reverseText = textInput.value.replace(/[^a-z0-9]/gi, '').toLowerCase().split("").reverse().join("");
  if(textInput.value === ""){
    alert("Please input a value");
  }else if(textInput.value.replace(/[^a-z0-9]/gi, '').toLowerCase() === reverseText){
    result.textContent = `${textInput.value} is a palindrome`;
  }else {
    result.textContent = `${textInput.value} is not a palindrome`;
  }
}
checkButton.addEventListener("click", Check);
