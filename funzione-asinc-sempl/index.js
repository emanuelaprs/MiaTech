function promessa() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("La promessa si risolve dopo due secondi");
        }, 2000);
    });
}

async function aspettaPromessa() {
    const messaggio = await promessa();
    console.log(messaggio)
}

aspettaPromessa()