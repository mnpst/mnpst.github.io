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
        html += `<img src=${data[i][j]} width="200" height="200">`

      } else if (j === 2) {
        html += `<a href="https://open.spotify.com/album/${data[i][5]}" target="_blank">${data[i][2]}</a>`
      } else if (j === 3) {
        html += `<p>${data[i][8]}  -   ${data[i][3]}</p>`
      } else if (j === 4) {
        html += `<p id='rating'> Rating: ${data[i][4]}</p>`
      } else if (j === 5) {
      } else if (j === 6) {
      } else if (j === 7) {
        html += `<p id='musicStyle'>${data[i][7]}</p>`
      } else if (j === 8) {
      } else if (j === 9) {
        html += `<p id='decades'>${data[i][9]}</p>`
      } else {
        html += `<p>${data[i][j]}</p>`
      }

    card.innerHTML = html;
    display.appendChild(card);
    }
  }
}
