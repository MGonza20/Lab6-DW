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
const btnTrip = document.createElement('button');
const imgD = document.createElement('div');

body.append(div);

//Colocar titulo
div.append(divTitle);
divTitle.append(title);
title.append('Mision cumplida');


div.append(imgD);


imgD.append(img);
img.setAttribute('src', '../../../images/general/misionCumplida.gif');
img.setAttribute('width', '400px');


body.append(divQ);
divQ.append(br);
divQ.append(btnTrip);
btnTrip.append("Viajar a NYC");
btnTrip.setAttribute('id', 'tripBtn');


document.getElementById("tripBtn").onclick = function () {
    location.href = "../page12/welcomeToNYC.html";
};


divQ.setAttribute('id', 'divQ');
divTitle.setAttribute('id', 'divT');