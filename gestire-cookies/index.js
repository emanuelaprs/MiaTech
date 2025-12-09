// Gesire i cookies

// Funzione che salva/crea un cookie
function saveCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();

    document.cookie = `${name}=${value}; ${expires}; path=/`;

    console.log(`Cookie salvato: ${name}=${value}`);
}

// Funzione che recupera/legge un cookie
function getCookie(name) {
    const cookies = document.cookie.split(';');

    for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split("=");

        if (cookieName === name) {
            return cookieValue;         
        }
    }
     console.log(`Cookie non trovato: ${name}`);
     return null;
}

// Funzione che rimuove un cookie
function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    console.log(`Cookie eliminato: ${name}`);
}   

// Esempi di utilizzo delle funzioni
saveCookie("username", "Mario", 7); 
getCookie("username"); 
deleteCookie("username");
