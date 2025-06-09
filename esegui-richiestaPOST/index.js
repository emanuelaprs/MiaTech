async function richiestaPost() {
    const dati = {
        nome: "Giulio",
        email: "giulio.bianchi@example.com"
    };

    try {
        const risposta = await 
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(dati)
        });

        if (!risposta.ok) {
            throw new Error('Errore nella richiesta: '+ risposta.status);
        }

        const datiRisposta = await risposta.json();
        console.log('Risposta dal server: ', datiRisposta);
    } catch (errore) {
        console.error('Siè verificato un errore:', errore);
    }
}


richiestaPost();