const creatures = "https://rpg-creature-api.freecodecamp.rocks/api/creatures";
const searchInput = document.getElementById("search-input").value;
const searchBtn = document.getElementById("search-button");

let creatureListData = [];

const fetchList = async () => {
  try {
    const creatureList = await fetch(creatures);
    const list = await creatureList.json();
    creatureListData = list;
    console.log(creatureListData);
  }catch (err){
    console.log(err);
  }
}

fetchList();

searchBtn.addEventListener("click", () => {
  const match = creatureListData.find(c => c.id.toString() === searchInput.toLowerCase() || c.name.toLowerCase() === searchInput.toLowerCase());

  if(!match){
  alert("Creature not found");
}

const creaturesData = `https://rpg-creature-api.freecodecamp.rocks/api/creature/${match.id}`;

const fetchData = async () => {
  try {
    const data = await fetch(creaturesData);
    const dataList = await data.json();
    console.log(dataList);
  }catch (err){
    console.log(err);
  }
}

fetchData();

});

