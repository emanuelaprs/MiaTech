function creaPromessa(risolvi) {
    return new Promise((resolve, reject) => {
         if (risolvi) {
            resolve("Promessa risolta");
         } else {
            reject(new Error("Promessa rifiutata"));
         }
    });
}

async function aspettaPromessa(risolvi) {
    try {
        const risultato = await creaPromessa(risolvi);
        console.log(risultato);
    } catch (errore) {
        console.error("Errore  catturato", errore.message);
    }
}

aspettaPromessa(true);
aspettaPromessa(false);