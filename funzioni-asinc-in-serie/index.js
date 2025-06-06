function asincronaUno() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Risultato dopo due secondi");
        }, 2000);
    });
}

function asincronaDue() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Risultato dopo quattro secondi");
        }, 4000);
    });
}

async function funzioniInSerie() {
    try {
        const risultatoUno = await asincronaUno();
        console.log(risultatoUno);

        const risultatoDue = await asincronaDue();
        console.log(risultatoDue);
    } catch (errore) {
        console.error("Errore", errore);
    }
}

funzioniInSerie()