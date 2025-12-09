// 1 - Utilizzare il localStorage

// Funzione per salvare un valore nel localStorage
function saveValue(key, value) {
    localStorage.setItem(key, value);
    console.log(`Valore salvato: ${key} = ${value}`);
}

// Funzione per recuperare un valore nel localStorage
function getValue(key) {
    const value = localStorage.getItem(key);

    if (value !== null) {
        console.log(`Valore trovato: ${key} = ${value}`);
    } else {
        console.log(`Valore "${key}" NON trovato`);
    }
    return value;
}

// Funzione per rimuovere un valore nel localStorage
function removeValue(key) {
    localStorage.removeItem(key);
    console.log(`Valore rimosso: ${key}`);
}   

saveValue("username", "Mario");
getValue("username");
removeValue("username");

// 2- Utilizzare il sessionStorage

// Funzione per salvare un valore nel sessionStorage
function saveSession(key, value) {
    sessionStorage.setItem(key, value); // Salvo il valore
    console.log(`Valore salvato in sessionStorage: ${key} = ${value}`);
}

// Funzione per recuperare un valore nel sessionStorage
function getSession(key) {
    const value = sessionStorage.getItem(key); // Leggo il valore
    if (value !== null) {
        console.log(`Valore trovato in sessionStorage: ${key} = ${value}`);
    } else {
        console.log(`Valore "${key}" NON trovato in sessionStorage`);
    }
    return value;
}

// Funzione per rimuovere  un valore nel sessionStorage
function removeSession(key) {
    sessionStorage.removeItem(key); // Rimuovo il valore
    console.log(`Valore rimosso da sessionStorage: ${key}`);
}

saveSession("username", "Mario"); 
getSession("username");             
removeSession("username"); 

// 3 - Utilizzare localStorage e sessionStorage insieme

// Funzione per salvare un valore in entrambi gli storage
function saveBothStorages(key, value) {
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);
    console.log(`Valore salvato in entrambi gli storage: ${key} = ${value}`);
}

// Funzione per recuperare un valore da entrambi gli storage
function getBothStorages(key) {
    const localValue = localStorage.getItem(key);
    const sessionValue = sessionStorage.getItem(key);
    console.log(`Valore in localStorage: ${key} = ${localValue}`);
    console.log(`Valore in sessionStorage: ${key} = ${sessionValue}`);
    return { localValue, sessionValue };
}

// Funzione per rimuovere un valore da entrambi gli storage
function removeBothStorages(key) {
    localStorage.removeItem(key);
    sessionStorage.removeItem(key);
    console.log(`Valore rimosso da entrambi gli storage: ${key}`);
}   

saveBoth("color", "rosso");  
getBoth("color");            
removeBoth("color");     