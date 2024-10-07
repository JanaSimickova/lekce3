// Vstup, vystup

// Cviceni 1 - Ockovani
// const jmeno = prompt("Zadej své celé jméno");
// const vek = Number(prompt(("Zadej svůj věk")));

// document.body.innerHTML += "<p>" + jmeno + ", věk:" + vek + "</p>";
// alert(jmeno + ", vek: " + vek);

// Cviceni 2 - Vyplata jako stranka

// const hodinovaSazba = Number(prompt("Zadej výši tvé hodinové sazby:"));
// const pocetHodin = Number(prompt("Zadej, kolik hodin denně pracuješ:"));
// const pocetDni = Number(prompt("Zadej, kolik dní v měsíci pracuješ:"));

// document.body.innerHTML += "<p> Vyděláváš " + hodinovaSazba * pocetHodin * pocetDni + ",- Kč měsíčně.</p>";

// Objekty

// Cviceni 1 - Realitka

const apartment = {
  type: 'rent',
  disposition: '3+1',
  area: {
    floorage: 100,
    balcony: 2,
    units: 'sqm',
  },
  city: 'Prague',
  district: 'Old Town',
  price: {
    rent: 28000,
    fees: {
      water: 1000,
      energy: 2500,
      services: 560,
    },
    currency: 'czk',
  },
  ownership: 'personal',
  condition: 'renovated',
  status: 'free',
  floor: 3,
};

document.body.innerHTML += "<p> Dispozice bytu je " + apartment.disposition + ".</p>";
document.body.innerHTML += "<p> Čistý nájem bez poplatků činí " + apartment.price.rent + ".</p>";
const celkovaVymera = apartment.area.floorage + apartment.area.balcony
document.body.innerHTML += "<p> Výměra bytu činí " + apartment.area.floorage + apartment.area.units + " a k tomu balkon " + apartment.area.balcony + apartment.area.units + ".</p>";
document.body.innerHTML += `<p> celkova vymera ${apartment.area.floorage + apartment.area.balcony} ${apartment.area.units}.</p>`;
document.body.innerHTML += "<p> celkova vymera " + (apartment.area.floorage + apartment.area.balcony) + " " + apartment.area.units + ".</p>";
// document.body.innerHTML += "<p> Výměra bytu činí celkem " + celkovaVymera + " " + apartment.area.units + ".</p>";
// document.body.innerHTML += "<p>Vymera bytu: apartment: "+ apartment.area.floorage + apartment.area.units +"</br> balcony: "+apartment.area.balcony + apartment.area.units+ "</p>"

// const mesto = apartment.city
// const mestskaCast = apartment.district
// document.body.innerHTML += "<p> Byt se nachazi ve meste " + mesto + " v mestske casti " + mestskaCast + ".</p>";

// apartment.status = "taken"
// document.body.innerHTML += "<p> Stav inzeratu: " + apartment.status + ".</p>";

// Cviceni 2

// const kniha1 = {
//   nazev: "Harry Potter a kamen mudrcu",
//   autor: "J. K. Rowling",
//   pocetStran: 320,
//   hlavniPostavy: {
//     postava1: "Harry Potter",
//     postava2: "Hermiona Grangerova",
//     postava3: "Ronald Weasley",
//   },
//   rokVydani: 2000,
// }

// const kniha2 = {
//   nazev: "Harry Potter a tajemna komnata",
//   autor: "J. K. Rowling",
//   pocetStran: 380,
//   hlavniPostavy: {
//     postava1: "Harry Potter",
//     postava2: "Hermiona Grangerova",
//     postava3: "Ronald Weasley",
//   },
//   rokVydani: 2001,
// }

// Cviceni 3

// const jmeno = prompt("Zadej své celé jméno");
// const vek = Number(prompt(("Zadej svůj věk")));

// document.body.innerHTML += "<p>" + jmeno + ", věk:" + vek + "</p>";
// alert(jmeno + ", vek: " + vek);

// const person = {
//   name: jmeno,
//   age: vek,
//   jazyk: window.navigator.language,
// }

// document.body.innerHTML += "<p>Jmeno: " + person.name + "</br>věk: " + person.age + "</br>jazyk: " + person.jazyk + "</p>"
