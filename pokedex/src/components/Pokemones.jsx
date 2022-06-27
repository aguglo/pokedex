import "./componentes.css";

function Pokemones() {
  const pokemons = [
    {
      name: "Bulbasaur",
      height: "0,7m",
      weight: "6,9kg",
      hp: "45",
      atk: "49",
      def: "49",
      spd: "45",
      satk: "65",
      sdef: "65",
      moves: "overgrow,chlorophyll",
      type1: "grass",
      type2: "poison",
      number:"#001",
      description:
        "It carries a seed on its back right from birth. As it grows older, the seed also grows larger.",
    },

    {
      name: "Charmander",
      height: "0,6m",
      weight: "8,5kg",
      hp: "39",
      atk: "52",
      def: "43",
      spd: "65",
      satk: "60",
      sdef: "50",
      moves: "blaze,solar-power",
      type1: "fire",
      type2: "",
      number:"#004",
      description:
        "The flame on its tail shows the strength of its life force. If it is weak, the flame also burns weakly",
    },

    {
      name: "Squirtle",
      height: "0,5m",
      weight: "9,0kg",
      hp: "44",
      atk: "48",
      def: "65",
      spd: "43",
      satk: "50",
      sdef: "64",
      moves: "torrent,rain-dish",
      type1: "water",
      type2: "",
      number:"#007",
      description:
        "Shoots water at prey while in the water. Withdraws into its shell when in danger",
    },
    {
      name: "ButterFree",
      height: "11m",
      weight: "3,20kg",
      hp: "60",
      atk: "45",
      def: "50",
      spd: "70",
      satk: "90",
      sdef: "80",
      moves: "compound-eyes,tinted-lens",
      type1: "bug",
      type2: "flying",
      number:"#012",
      description:
        "In battle, it flaps its wings at high speed to release highly toxic dust into the air",
    },
    {
      name: "Pikachu",
      height: "0.4m",
      weight: "6,0kg",
      hp: "35",
      atk: "55",
      def: "40",
      spd: "90",
      satk: "50",
      sdef: "50",
      moves: "static,lightning-rod",
      type1: "electric",
      type2: "",
      number:"#025",
      description:
     "It keeps its tail raised to monitor its surroundings. If you yank its tail, it will try to bite you",
    },
    { name: "Gastly", height: "0.4", weight: "12kg" },
    { name: "Ditto", height: "0.4", weight: "12kg" },
    { name: "Mew", height: "0.4", weight: "12kg" },
    { name: "Aron", height: "0.4", weight: "12kg" },
  ];
  return <main></main>;
}

export default Pokemones;
