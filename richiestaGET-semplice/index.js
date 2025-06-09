function richiestaGet() {
    const url = 'https://jsonplaceholder.typicode.com/users';
fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Errore nella risposta: " + response.status);
        }
        return response.json();
    })

    .then((data) => {
        console.log(data);
    })

    .catch((error) => {
            console.error('Errore:', error);
    });
}

richiestaGet();