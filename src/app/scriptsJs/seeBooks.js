//Crear body
const body = document.body;

//Crear un div para colocar elementos
const div = document.createElement('div');

//Crear tabla 
const table = document.createElement('table');

//Crear cuerpo de tabla 
const tBody = document.createElement('tbody');

//Crear fila
const tRow = document.createElement('tr');
//Crear columna
const tD1 = document.createElement('td');
const tD2 = document.createElement('td');
const tD3 = document.createElement('td');


//Crear figuras para colocar revistas
const fig1 = document.createElement('figure');
const fig2 = document.createElement('figure');
const fig3 = document.createElement('figure');

//crear imgs 
const img1 = document.createElement('img');
const img2 = document.createElement('img');
const img3 = document.createElement('img');

//Crear descripciones de las imagenes 
const figCap1 = document.createElement('figcaption');
const figCap2 = document.createElement('figcaption');
const figCap3 = document.createElement('figcaption');

//Create anchors to go to pages 
const anch1 = document.createElement('a');
const anch2 = document.createElement('a');
const anch3 = document.createElement('a');

//Create back button
const backBtn = document.createElement('button');


body.append(div);
div.append(table);
table.append(tRow);
tRow.append(tD1);
tRow.append(tD2);
tRow.append(tD3);
div.append(backBtn);


tD1.append(fig1);
fig1.append(img1);
img1.setAttribute('src', '../../../images/general/midnight.jpg');
img1.setAttribute('width', '300');
fig1.append(figCap1);
fig1.append("The midnight library");

tD2.append(fig2);
fig2.append(img2);
img2.setAttribute('src', '../../../images/general/duneBook.jpg');
img2.setAttribute('width', '275');
fig2.append(figCap2);
fig2.append("Dune");

tD3.append(fig3);
fig3.append(img3);
img3.setAttribute('src', '../../../images/general/pi.jpg');
img3.setAttribute('width', '300');
fig3.append(figCap3);
fig3.append("The life of pi");

backBtn.append("back");
backBtn.setAttribute('id', 'backBtn');

document.getElementById("backBtn").onclick = function () {
    location.href = "selectTime.html";
};