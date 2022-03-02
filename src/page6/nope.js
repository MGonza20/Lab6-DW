//Colocar body
const body = document.body;

//Hacer un div para colocar elementos
const div = document.createElement('div');

const divTitle = document.createElement('div');

//Crear elemento para colocar titulo
const title = document.createElement('h1');

//Crear elemento para img
const img = document.createElement('img');

//create break
const br = document.createElement('br');



//div para colocar pregunta
const divQ = document.createElement('div');
const btnBack = document.createElement('button');
const imgD = document.createElement('div');

body.append(div);

//Colocar titulo
div.append(divTitle);
divTitle.append(title);
title.append('Esta pista no te lleva a la sisguiente...');


div.append(imgD);


imgD.append(img);
img.setAttribute('src', '../../../images/general/sadFacee.gif');
img.setAttribute('width', '300px');


body.append(divQ);
divQ.append(br);
divQ.append(btnBack);
btnBack.append("Back");
btnBack.setAttribute('id', 'backBtn');


document.getElementById("backBtn").onclick = function () {
    location.href = "../page5/magsOptions.html";
};


