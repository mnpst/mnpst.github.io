import Papa from "https://cdn.skypack.dev/papaparse@5.3.0";

// Clear Console
console.clear();

// Variable declarations
let data = undefined;
let display = document.getElementById("result-text");


  Papa.parse("mzk.csv", {
    download: true,
    complete: function (result) {
    data = result.data;
    renderData(data);
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
        html += `<img src=${data[i][0]} width="200" height="200">`
      } else if (j === 1) {
        html += `<p>${data[i][1]}</p>`
      } else if (j === 2) {
        html += `<a href="https://open.spotify.com/album/${data[i][5]}" target="_blank">${data[i][2]}</a>`
      } else if (j === 3) {
        html += `<p>${data[i][3]}  -   ${data[i][4]}</p>`
      } else if (j === 7) {
        html += `<p id='musicStyle'>${data[i][7]}</p>`
      } else if (j === 15) {
        html += `<p id='rating'> Rating: ${data[i][15]}</p>`
      } else {
      }

    card.innerHTML = html;
    display.appendChild(card);
    }
  }
}
