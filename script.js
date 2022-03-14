function createFlag(Flag, Country, Population, Region, Capital) {
  const country = Country;
  const population = Population;
  const region = Region;
  const capital = Capital;

  const flag = document.createElement("img");
  flag.src = Flag;
  flag.className = "flag";

  const info = document.createElement("div");
  info.setAttribute("class", "info");

  info.innerHTML = `
  <h2>${country}</h2>
  <p><span class="side-heading" >Population : </span> ${population}</p>
  <p><span class="side-heading" >Region :</span> ${region}</p>
  <P><span class="side-heading" >Capital:</span>${capital}</P>
  `;
  const contain = document.createElement("div");
  contain.className = "container";
  contain.append(flag, info);

  document.body.append(contain);
}
let flagGermany =
  "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/364px-Flag_of_Germany.svg.png";

createFlag(flagGermany, "Germany", "81,770,900", "Europe", "Berlin");

let flagUsa =
  "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/410px-Flag_of_the_United_States.svg.png";
createFlag(flagUsa, "America", "32,394,700", "Americas", "Washington,DC");
let flagBrazil =
  "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/315px-Flag_of_Brazil.svg.png";
createFlag(flagBrazil, "Brazil", "206,135,293", "Americas", "Brasilla");
let flagIceland =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/320px-Flag_of_Iceland.svg.png";
createFlag(flagIceland, "Iceland", "334,300", "Europe", "Reykjavik");
let flagAfghanistan =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Flag_of_Afghanistan_%28Colored_Emblem%29.svg/364px-Flag_of_Afghanistan_%28Colored_Emblem%29.svg.png";
createFlag(flagAfghanistan, "Afghanistan", "27,657,700", "Asia", "Kabul");
