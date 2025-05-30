const creatures = "https://rpg-creature-api.freecodecamp.rocks/api/creatures";
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const CreatureName= document.getElementById("creature-name");
const CreatureId = document.getElementById("creature-id");
const Weight = document.getElementById("weight");
const Height = document.getElementById("height");
const Types = document.getElementById("types");
const Hp = document.getElementById("hp");
const Attack = document.getElementById("attack");
const Defense = document.getElementById("defense");
const SpAttack = document.getElementById("special-attack");
const SpDefense = document.getElementById("special-defense");
const Speed = document.getElementById("speed");

let creatureListData = [];

const fetchList = async () => {
  try {
    const creatureList = await fetch(creatures);
    const list = await creatureList.json();
    creatureListData = list;
  }catch (err){
    console.log(err);
  }
}

fetchList();

searchBtn.addEventListener("click", async () => {
  const searchValue = searchInput.value.toLowerCase();
  const match = creatureListData.find(c => c.id.toString() === searchValue || c.name.toLowerCase() === searchValue);

  if(!match){
  alert("Creature not found");
  return;
}

const creaturesData = `https://rpg-creature-api.freecodecamp.rocks/api/creature/${match.id}`;

  try {
    const data = await fetch(creaturesData);
    const dataList = await data.json();
    const {id,name, weight, height, stats, types} = dataList;

const getStat = (statName) => {
      const stat = stats.find(s => s.name === statName);
      return stat ? stat.base_stat : "N/A";
    };

      CreatureName.innerText = name;
    CreatureId.innerText = id;
    Weight.innerText = weight;
    Height.innerText = height;
    Hp.innerText = getStat("hp");
    Attack.innerText = getStat("attack");
    Defense.innerText = getStat("defense");
    SpAttack.innerText = getStat("special-attack");
    SpDefense.innerText = getStat("special-defense");
    Speed.innerText = getStat("speed");
    Types.innerHTML = "";
    types.forEach(t => {
      const typeElement = document.createElement("span");
      typeElement.innerText = t.name.toUpperCase();
      Types.appendChild(typeElement);
    });
    
    console.log(dataList)
  }catch (err){
    console.log(err);
  }

});

