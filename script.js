import Papa from "https://cdn.skypack.dev/papaparse@5.3.0";

// Clear Console
console.clear();

// Variable declarations
let button = document.querySelector("button");
let data = undefined;
let fileInput = document.getElementById("file-input");
let display = document.getElementById("result-text");
let remoteFile = "";
let string =
  "first_name,last_name,email,age      Niko,Radolf,nradolf0@sun.com,50 Rand,Feaster,rfeaster1@loc.gov,80 Sena,Earthfield,searthfield2@t.co,26 Sindee,Lowthorpe,slowthorpe3@issuu.com,35 Ursa,Oty,uoty4@goodreads.com,78";

fileInput.addEventListener("change", (event) => {
    if (fileInput.value != "") {
      Papa.parse(fileInput.files[0], {
        complete: function (result) {
          data = result.data;
          renderData(data);
          }
        })
    }
  });

function renderData(data) {

  for (let i = 1; i < data.length; i++) {
    let card = document.createElement("div");
    card.className = 'profile-card'
      let html = ''
    for (let j = 0; j < data[i].length; j++) {
      if (j === 0) {
        if (data[i][j] === '') return;
        html += `<img src=${data[i][j]} width="200" height="200">`
        // card.insertAdjacentHTML('afterend', `<h1>${data[i][j]}</h1>`)
         // += `<h1>${data[i][j]}</h1>`;
      } else if (j === 2) {
        html += `<a href="https://open.spotify.com/album/${data[i][5]}" target="_blank">${data[i][2]}</a>`
      } else if (j === 3) {
        html += `<p>${data[i][8]}  -   ${data[i][3]}</p>`
      } else if (j === 4) {
      } else if (j === 5) {
      } else if (j === 6) {
        html += `<p>${data[i][6]}  -   ${data[i][7]}</p>`
      } else if (j === 7) {
      } else if (j === 8) {
      } else if (j === 9) {
      } else {
        html += `<p>${data[i][j]}</p>`
        // card.insertAdjacentHTML('afterend', `<p>${data[i][j]}</p>`)
        // card += `<p>${data[i][j]}</p>`;
      }
    card.innerHTML = html;
    display.appendChild(card);


    }

    // card.innerHTML = html;
    // card += '</div>'
    // let card = document.createElement("div");

    // display.appendChild(card);
  }
}
