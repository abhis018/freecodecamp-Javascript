const number = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");
function Convert (){
  const numMap = {1:"I", 4:"IV", 5:"V",9:"IX", 10: "X",40:"XL",50:"L",90:"XC",100:"C",400:"CD",500:"D",900:"CM",1000:"M"};
  let divisor = [1,4,5,9,10,40,50,90,100,400,500,900,100];
    if(output.value === ""){
      alert("Please input a value");
    }else if(output.value <= 0){
      output.textContent = `Please enter a number greater than or equal to 1`;
    }else if(output.value >= 4000){
      output.textContent = `Please enter a number less than or   equal to 3999`;
    }else{
      function intToRoman(num){
            for(let i = divisor.length-1;i<=0;i--){
                if(num === 0){
                    break;
                }
                let quotient = Math.floor(num/divisor[i]);
                if (quotient) {
                    if (numMap[quotient * divisors[i]]) {
                        romanVal += numMap[quotient * divisors[i]];
                        num = num % (quotient * divisors[i]);
                    } else {
                        romanVal += numMap[divisors[i]].repeat(quotient);
                        num = num % divisors[i];
                    }
                }
            }
            return romanVal;
        }
    }
}
convertButton.addEventListener("click", Convert);
