const rollDiceBtn = document.getElementById("roll-dice-btn");
const keepScoreBtn = document.getElementById("keep-score-btn");
const dieElement = document.querySelectorAll(".die");
const none = document.getElementById("none");

let total = 0;

rollDiceBtn.addEventListener("click", () => {
    none.disabled = false;
    dieElement.forEach(die => {
        const dice = Math.floor(Math.random() * 6) + 1;
        die.textContent = dice;
    });
    checking();
});

const checking = () => {
  const diceValues = Array.from(dieElement, die => parseInt(die.textContent));
  const counts = {};
  diceValues.forEach(num => counts[num] = (counts[num] || 0) + 1);

  const values = Object.values(counts).sort((a, b) => b - a);
  const sorted = [...new Set(diceValues)].sort((a, b) => a - b);

  let caseNumber;

  if (values[0] === 3 && values[1] === 2) {
    caseNumber = 3; 
  } else if (values[0] === 4) {
    caseNumber = 2; 
  } else if (values[0] === 3) {
    caseNumber = 1; 
  } else if (sorted.length === 5 && sorted[4] - sorted[0] === 4) {
    caseNumber = 5; 
  } else if (sorted.length >= 4) {
    for (let i = 0; i <= sorted.length - 4; i++) {
      if (sorted[i + 3] - sorted[i] === 3) {
        caseNumber = 4; 
        break;
      }
    }
  }
    const scoreOptionIds = ["three-of-a-kind","four-of-a-kind","full-house","small-straight","large-straight"];

    scoreOptionIds.forEach(id => {
        const option = document.getElementById(id);
        if (option) {
            option.disabled = true;
        }
    });

  switch (caseNumber) {
    case 1:
      document.getElementById("three-of-a-kind").disabled = false;
      break;
    case 2:
      document.getElementById("four-of-a-kind").disabled = false;
      break;
    case 3:
      document.getElementById("full-house").disabled = false;
      break;
    case 4:
      document.getElementById("small-straight").disabled = false;
      break;
    case 5:
      document.getElementById("large-straight").disabled = false;
      break;
  }
}

keepScoreBtn.addEventListener("click", () => {
    const selectedOption = document.querySelector('input[name="score-options"]:checked');

    if (selectedOption) {
        const value = selectedOption.value;

        if(value === "three-of-a-kind"){
            calculateTotal();
            return;
        }else if(value === "four-of-a-kind"){
            calculateTotal();
            return;
        }else if(value === "full-house"){
            total += 25;
            return;
        }else if(value === "small-straight"){
            total += 30;
            return;
        }else if(value === "large-straight"){
            total += 40;
            return;
        }else{
            total += 0;
            console.log(total);
            return;
        }
        document.querySelectorAll('input[name="score-options"]').forEach(option => {
            option.checked = false;
            option.disabled = true;
        });

        none.disabled = true; 


    } else {
        alert('Please select an option first!');
    }

});

const calculateTotal = () => {
  dieElement.forEach(die => {
    total += parseInt(die.textContent, 10);
  });
  return total;
};

