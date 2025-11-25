// ESERCIZIO - Eseguire una richiesta GET semplice

const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')  // Richiesta GET automatica
        .then(response => response.json)   // Quando arriva la risposta, la trasformo in JSON
        .then(data => {
            console.log("Dati ricevuti dall'API:", data);
        })
        .catch(error => {
            console.error("Errore richiesta:", error);
        });
};

// Chiamo la funzione
getData();

// ESERCIZIO - Eseguire una richiesta POST

const sendData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json" // etichetta: specifica che inviamo dati in formato JSON
        },
        body: JSON.stringify({            // I dati da inviare convertiti in stringa JSON
            title: "Studio JS",
            body: "Provo a usare fetch",
        })
    })
    .then(response => response.json()) // Converte la risposta in JSON
    .then(data => {
        console.log("Dati restituiti dal server:", data);
    })
    .catch(error => {
        console.error("Errore nella richiesta:", error);
    });
};

sendData();

// ESERCIZIO - Gestione degli errori con sync e await

const newGetData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

        if (!response.ok) {
            throw new Error("Errore:" + response.status); // response.status: contiene il cod. numerico della risposta del server
        }

        const dataBis = await response.json(); // trasforma il corpo della risposta (testo) in un oggetto JavaScript.
        console.log("Dati ricevuti", dataBis);

    } catch (error) {
        console.error("Si è verificato un errore!", error.message);
    }
};

newGetData();