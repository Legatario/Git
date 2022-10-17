const hw1 = document.createElement("h1");
const texthw1 = document.createTextNode("Hello Word 1");
hw1.appendChild(texthw1);
const current1 = document.getElementById("div1");
document.body.insertBefore(hw1, current1);


const hw2 = document.createElement("h2");
const texthw2 = document.createTextNode("Hello Word 2");
hw2.appendChild(texthw2);
const current2 = document.getElementById("div2");
document.body.insertBefore(hw2, current2);


const hw3 = document.createElement("h3");
const texthw3 = document.createTextNode("Hello Word 3");
hw3.appendChild(texthw3);
const current3 = document.getElementById("div3");
document.body.insertBefore(hw3, current3);


const hw4 = document.createElement("h4");
const texthw4 = document.createTextNode("Hello Word 4");
hw4.appendChild(texthw4);
const current4 = document.getElementById("div4");
document.body.insertBefore(hw4, current4);

const hwp = document.createElement("p");
const texthwp = document.createTextNode("Hello Word 5");
hwp.appendChild(texthwp);
const currentp = document.getElementById("divp");
document.body.insertBefore(hwp, currentp);
hwp.style.color = "#FF0F0F";


const hwul = document.createElement("ul");
const hwli = document.createElement("li");
const texthwli = document.createTextNode("Hello Word 6");
hwul.appendChild(hwli)
hwli.appendChild(texthwli);

const hwli2 = document.createElement("li");
const texthwli2 = document.createTextNode("Hello Word 7");
hwli2.appendChild(texthwli2);
hwli2.style.color = "blue"
hwli2.style.fontFamily = "Arial"
hwul.appendChild(hwli2)

const currentli = document.getElementById("divli");
document.body.insertBefore(hwul, currentli);


const hwol = document.createElement("ol");
const hwli3 = document.createElement("li");
const texthwli3 = document.createTextNode("Hello Word 8");
hwli3.style.fontFamily = "Arial";
hwli3.style.fontSize = '20px';
hwol.appendChild(hwli3)
hwli3.appendChild(texthwli3);

const hwli4 = document.createElement("li");
const texthwli4 = document.createTextNode("Hello Word 9");
hwli4.appendChild(texthwli4);
hwli4.style.color = "pink"
hwli4.style.fontFamily = "Arial";
hwli4.style.fontSize = '80%';
hwol.appendChild(hwli4)

const currentol = document.getElementById("divol");
document.body.insertBefore(hwol, currentol);


const hwf = document.createElement("footer");
const texthwf = document.createTextNode("Desenvolvido por Hello Word ");
hwf.appendChild(texthwf);
hwf.style.textAlign = 'center';
hwf.style.background = '#4b9ddf'; 
hwf.style.color = '#fff';
hwf.style.padding = '20px' 
const currentf = document.getElementById("footer");
document.body.insertBefore(hwf, currentf);