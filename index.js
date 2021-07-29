function fetchData(location) {sendGetRequest(`https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST?fbclid=IwAR1UCKt-lM0mITqxyalzx-XdQ3cFYX51Il_7kU0X79sS5LDZwdIp7FFPAxg&utm_source=j2team&utm_medium=url_shortener`, function(data) {
const corona = data;for(let i = 0; i < corona.detail.length; i++){for(let j = 0; j < location.key.length; j++){
if(corona.detail[i][`hc-key`] === location.key[j][`hec-key`]){corona.detail[i][`name`] =  location.key[j][`name`].replaceAll("-", " ");}
if(!corona.detail[i][`name`]){corona.detail[i][`name`] = "Khu vực không rõ";}}}addTable1(corona);addInfected(corona);addRecovered(corona);addTreated(corona);addDeathCase(corona);})}
function fetchDataLocation() {sendGetRequest(`https://api.apify.com/v2/key-value-stores/p3nS2Q9TUn6kUOriJ/records/LATEST?fbclid=IwAR1o7kdFhs5VHsR2q1m5EBhIG0cCSyLHg8D8xpbtSKKvngtpSUWMGWWGn5c&utm_source=j2team&utm_medium=url_shortener`, function(data) {
const location = data;fetchData(location);})}function fetchDataDate(){sendGetRequest(`https://api.apify.com/v2/key-value-stores/Tksmptn5O41eHrT4d/records/LATEST`, function(data) {
const date = data;addTable2(date);})}function addTable1(corona){let content = "";content += `<thead><tr class="tr-head"><th>Tỉnh/Thành phố</th><th>Ca nhiễm</th><th>Ca khỏi</th><th>Tử vong</th></tr></thead>`;content += `<tbody>`;
corona.detail.forEach((itemData) =>{content += `<tr>`;content += `<td class = "text">${itemData[`name`]}</td>`;content += `<td class="red">${itemData[`value`]}</td>`;
content += `<td class="green">${itemData[`socakhoi`]}</td>`;content += `<td>${itemData[`socatuvong`]}</td>`;content += `</tr>`;})
content += `</tbody>`;document.getElementById("table1").innerHTML = content;}function addTable2(date){let infected = date.canhiem;let treated = date.cakhoi;let death = date.catuvong;let content = "";
content += `<thead><tr class="tr-head"><th>Ngày</th><th>Ca nhiễm</th><th>Ca khỏi</th><th>Tử vong</th></tr></thead>`;
content += `<tbody>`;for(let i = 0; i < infected.length; i++){content += `<tr>`;content += `<td>${infected[i][`day`]}</td>`;
content += `<td class="red">${infected[i][`quantity`]}</td>`;content += `<td class="green">${treated[i][`quantity`]}</td>`;
content += `<td>${death[i][`quantity`]}</td>`;content += `</tr>`;}content += `</tbody>`;document.getElementById("table2").innerHTML = content;}
function addInfected(corona){let content = "";content += `<div><h1><span class="material-icons">coronavirus</span>${corona.infected}</h1></div>`;
content += `<h3>Ca nhiễm</h3>`;document.getElementById("infected").innerHTML = content;}function addRecovered(corona){let content = "";content += `<div><h1><span class="material-icons">favorite</span>${corona.recovered}</h1></div>`;
content += `<h3>Ca khỏi</h3>`;document.getElementById("recovered").innerHTML = content;}function addTreated(corona){let content = "";content += `<div><h1><span class="material-icons">medication</span>${corona.treated}</h1></div>`;
content += `<h3>Đang điều trị</h3>`;document.getElementById("treated").innerHTML = content;}function addDeathCase(corona){let content = "";content += `<div><h1><span class="material-icons">gpp_bad</span>${corona.deceased}</h1></div>`;
content += `<h3>Ca tử vong</h3>`;document.getElementById("death").innerHTML = content;}fetchDataLocation();fetchDataDate();




