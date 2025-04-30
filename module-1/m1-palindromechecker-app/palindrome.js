const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");
function Check (){
  const reverseText = textInput.value.replace(/\s+/g, '').split("").reverse().join("");
  console.log(reverseText);
  if(textInput.value === ""){
    alert("Please input a value")
  }else if(textInput.value === reverseText){
    result.textContent = `${textInput.value} is a palindrome`;
  }else {
    result.textContent = `${textInput.value} is not a palindrome`;
  }
}
checkButton.addEventListener("click", Check);