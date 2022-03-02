//Colocar body
const body = document.body;

//Hacer un div para colocar elementos
const div = document.createElement('div');

const divTitle = document.createElement('div');

//Crear elemento para colocar titulo
const title = document.createElement('h1');

//Crear elemento para subtitulo 
const subtitle = document.createElement('h2');

//Crear elemento para img
const img = document.createElement('img');


//create break
const br = document.createElement('br');
const br2 = document.createElement('br');

//texto para subtitulo de pregunta
const subQuestion = document.createElement('h2');

//div para colocar pregunta
const divQ = document.createElement('div');
const btnDate1 = document.createElement('button');
const btnDate2 = document.createElement('button');
const btnDate3 = document.createElement('button');
const btnDate4 = document.createElement('button');
const btnDate5 = document.createElement('button');
//tag bold para pregunta
const bold = document.createElement('b');
const imgD = document.createElement('div');

body.append(div);

//Colocar titulo
div.append(divTitle);
divTitle.append(title);
title.append('Segunda búsqueda. Encuentra la fecha');


div.append(imgD);


imgD.append(img);
img.setAttribute('src', '../../../images/general/calendar.gif');


//Pregunta
body.append(divQ);
divQ.append(bold);
//divQ.append(br);
divQ.append(btnDate1);
btnDate1.append("6 de Octubre");
//divQ.append(br);
divQ.append(btnDate2);
btnDate2.append("19 de Noviembre");
//divQ.append(br2);
divQ.append(btnDate3);
btnDate3.append("11 de Julio");
//
divQ.append(btnDate4);
btnDate4.append("7 de Junio");
//
divQ.append(btnDate5);
btnDate5.append("9 de Marzo");

bold.append(subQuestion);
subQuestion.append('Basandote en la pista anterior, ¿Qué fecha es?');
btnDate1.setAttribute('id', 'date1Btn');
btnDate2.setAttribute('id', 'date2Btn');


document.getElementById("date1Btn").onclick = function () {
    location.href = "nope2.html";
};

document.getElementById("date2Btn").onclick = function () {
    location.href = "selectTime.html";
};


divQ.setAttribute('id', 'divQ');
divTitle.setAttribute('id', 'divT');
imgD.setAttribute('id', 'divImg');
