"use strict";

const bestRetirementPlaces = [
  {
    city: "Lisbon",
    country: "Portugal",
    costOfLiving: "Moderate",
    climate: "Mild, Mediterranean",
    highlights: "Rich history, scenic coastal views, great healthcare",
  },
  {
    city: "Panama City",
    country: "Panama",
    costOfLiving: "Low",
    climate: "Tropical",
    highlights: "Affordable, expat-friendly, tax benefits for retirees",
  },
  {
    city: "Chiang Mai",
    country: "Thailand",
    costOfLiving: "Low",
    climate: "Warm",
    highlights: "Low living costs, rich culture, beautiful landscapes",
  },
  {
    city: "San Miguel de Allende",
    country: "Mexico",
    costOfLiving: "Moderate",
    climate: "Warm, dry",
    highlights: "Charming architecture, strong expat community, vibrant arts scene",
  },
  {
    city: "Valencia",
    country: "Spain",
    costOfLiving: "Moderate",
    climate: "Mediterranean",
    highlights: "Beautiful beaches, great healthcare, active lifestyle",
  },
  {
    city: "Medellín",
    country: "Colombia",
    costOfLiving: "Low",
    climate: "Spring-like year-round",
    highlights: "Friendly locals, mild climate, good healthcare",
  },
  {
    city: "Auckland",
    country: "New Zealand",
    costOfLiving: "High",
    climate: "Mild, oceanic",
    highlights: "High quality of life, outdoor activities, English-speaking",
  },
  {
    city: "George Town",
    country: "Malaysia",
    costOfLiving: "Low",
    climate: "Tropical",
    highlights: "Modern amenities, healthcare, and vibrant food scene",
  },
  {
    city: "Malaga",
    country: "Spain",
    costOfLiving: "Moderate",
    climate: "Mediterranean",
    highlights: "Sunny beaches, rich history, lively culture",
  },
  {
    city: "Dubrovnik",
    country: "Croatia",
    costOfLiving: "Moderate",
    climate: "Mediterranean",
    highlights: "Scenic views, historic sites, relaxed pace",
  },
];

//let retirementTBody = document.getElementByID("retirementTBody");
let retirementTBody = document.querySelector("#retirementTBody");
console.log(retirementTBody);

const retirementDropDown = document.querySelector("#retirementDropDown");

const retire =  document.createElement("tr");



for (const place of bestRetirementPlaces) {

  let tr = document.createElement("tr");
  retirementTBody.appendChild(tr)

  let td1 = document.createElement("td");
  td1.innerText = place.city;
  tr.appendChild(td1);

  let td2 = document.createElement("td");
  td2.innerText = place.climate;
  tr.appendChild(td2);

  let td3 = document.createElement("td");
  td3.innerText = place.country;
  tr.appendChild(td3);

  let td4 = document.createElement("td");
  td4.innerText = place.costOfLiving;
  tr.appendChild(td4);
  
}




