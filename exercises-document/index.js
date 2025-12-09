
// ESERCIZIO - Oggetto document

console.log(document);

// ESERCIZIO - getElementById
// questo metodo cerca nella pagina (document) un elemento che un Id specifico

let elementTitle = document.getElementById("titolo");

console.log(elementTitle)

//querySelector

const paragraph = document.querySelector(".text");

console.log(paragraph);

// Modifica il testo di un paragrafo

const paragraphTwo = document.querySelector("#myParagraph");

paragraphTwo.innerText = "Questo è il mio nuovo testo del paragrafo";
console.log(paragraphTwo);

// Cambia stile 

paragraphTwo.style.backgroundColor = "yellow";
paragraphTwo.style.fontSize = "20px";

// Modifica l'html

const paragraphOther = document.querySelector(".text");
paragraphOther.innerHTML = "<button>Cliccami!</button>";

console.log(paragraphOther);

// Crea una lista 

const box = document.querySelector("#box");

const list = document.createElement("ul");

const item1 = document.createElement("li");
item1.innerText = "Elemento 1"; 

const item2 = document.createElement("li");
item2.innerText = "Elemento 2";

const item3 = document.createElement("li");
item3.innerText = "Elemento 3";

const item4 = document.createElement("li");
item4.innerText = "Elemento 4";

const item5 = document.createElement("li");
item5.innerText = "Elemento 5";

list.appendChild(item1);
list.appendChild(item2);
list.appendChild(item3);
list.appendChild(item4);
list.appendChild(item5);

box.appendChild(list);  

// submit

const form = document.querySelector("#myForm");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Impedisce il comportamento predefinito del form
    const nome = document.querySelector("#nome").value;
    const cognome = document.querySelector("#cognome").value;
    if (nome === "" || cognome === "") {
        alert("Per favore, compila tutti i campi.");
    }
});