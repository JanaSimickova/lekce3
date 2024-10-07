// Cviceni 1 - Ockovani
// const jmeno = prompt("Zadej své celé jméno");
// const vek = Number(prompt(("Zadej svůj věk")));

// document.body.innerHTML += "<p>" + jmeno + ", věk:" + vek + "</p>";
// alert(jmeno + ", vek: " + vek);

// Cviceni 2 - Vyplata jako stranka

const hodinovaSazba = Number(prompt("Zadej výši tvé hodinové sazby:"));
const pocetHodin = Number(prompt("Zadej, kolik hodin denně pracuješ:"));
const pocetDni = Number(prompt("Zadej, kolik dní v měsíci pracuješ:"));

document.body.innerHTML += "<p> Vyděláváš " + hodinovaSazba * pocetHodin * pocetDni + ",- Kč měsíčně.</p>";

