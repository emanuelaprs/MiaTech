
// Esercizio Automobile

class Automobile {
    #contatoreChiamate;

    constructor(marca, modello, anno, chilometraggio = 0) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio;
        this.#contatoreChiamate = 0;
    }
    descrizione() {
        return `Automobile: ${this.marca} ${this.modello} ${this.anno}`;
    }

    aggiungiChilometri(km) {
        this.chilometraggio += km;

        this.#incrementaContatore();
    }

    mostraChilometraggio() {
        return `Chilometraggio attuale: ${this.chilometraggio} km`;
    }

    get chilometraggioAttuale() {
        return this.chilometraggio;
    }

    set chilometraggioAttuale(nuovoValore) {
        if (nuovoValore >= this.chilometraggio) {
            this.chilometraggio = nuovoValore;
        } else {
            console.log("Il chilometraggio non può diminuire")
        }
    }

    #calcolaEtà() {
        const annoCorrente = new Date().getFullYear();
        return annoCorrente - this.anno;
    }

    mostraEtà() {
        return `L'automobile ha ${this.#calcolaEtà()} anni.`;
    }

    _controllaChilometri() {
        if (this.chilometraggio > 100000) {
            return `Avviso: ${this.marca} ${this.modello} ha superato i 100.000 km!`;
        }
    }

    static confrontaChilometraggio(auto1, auto2) {
        if (auto1.chilometraggio > auto2.chilometraggio) {
            return `${auto1.marca} ${auto1.modello} ha più chilometri (${auto1.chilometraggio} km) di ${auto2.marca} (${auto2.modello} (${auto2.chilometraggio} km)`;
        } else if (auto1.chilometraggio < auto2.chilometraggio) {
            return `${auto2.marca} ha più chilometri (${auto2.modello} km) di ${auto1.marca} (${auto1.modello} (${auto1.chilometraggio} km)`;
        } else {
            return `Entrambe le auto (${auto1.modello} e ${auto2.modello}) hanno lo stesso chilometraggio (${auto1.chilometraggio} km)`;
        }
    }

    #incrementaContatore() {
        this.#contatoreChiamate++;
    }

    guida(km) {
        this.chilometraggio += km;
        // this.#contatoreChiamate++; 
        this.#incrementaContatore();

        console.log(`Hai guidato per ${km} km.`);
    }

    getNumeroChiamateGuida() {
        return this.#contatoreChiamate;
    }

    mostraContatoreChiamate() {
        return this.#contatoreChiamate;
    }

}

const myCar = new Automobile("Ford", "Focus", 2010);
console.log(myCar.descrizione());

// Esercizio Aggiungi metodi & proprietà - aggiunto sopra

myCar.aggiungiChilometri(200);
console.log(myCar.mostraChilometraggio());


// Esercizio Sottoclasse elettrica

class Elettrica extends Automobile {
    constructor(marca, modello, anno, chilometraggio = 0, autonomia = 0) {
        super(marca, modello, anno, chilometraggio);
        this.autonomia = autonomia;
    }

    descrizione() {
        return `Veicolo Elettrico: ${this.marca} ${this.modello}, Autonomia: ${this.autonomia} km`;
    }

    ricarica(km) {
        this.autonomia += km;
        console.log(`Autonomia aumentata di ${km} km. Nuova autonomia: ${this.autonomia} km.`);
    }

}

const myElectricCar = new Elettrica("Volkwagen", "Model E", 2024, 500, 15000);
console.log(myElectricCar.descrizione());

// Esercizio Saluta

Automobile.prototype.saluta = function () {
    return `Sono una ${this.marca} ${this.modello}`;
}

console.log(myElectricCar.saluta());

// Esercizio Metodo privato

console.log(myElectricCar.mostraEtà());

// Esercizio Metodo protetto  ---> SVOLTO A META'

// Esercizio Confronta km

let auto1 = new Automobile("Fiat", "Panda", 2017, 90000);
let auto2 = new Automobile("Mercedes", "GLA", 2019, 120000);

console.log(Automobile.confrontaChilometraggio(auto1, auto2));

// Esercizio Contatore - proprietà privata

auto1.guida(50);
auto2.guida(30);

console.log(auto1.getNumeroChiamateGuida());

//	Esercizio Aggiungi km

auto1.aggiungiChilometri(100);
auto1.aggiungiChilometri(50);
console.log("Chiamate totali:", auto1.getNumeroChiamateGuida());

// Esercizio Mostra contatore

auto1.aggiungiChilometri(100);
auto1.aggiungiChilometri(50);

console.log(auto1.mostraContatoreChiamate());

// Esercizio Getter

console.log(myCar.chilometraggioAttuale);

// Esercizio Setter

const a = new Automobile("Fiat", "Panda", 2017, 10000);

a.chilometraggioAttuale = 12000;   //  aumenta
console.log(a.chilometraggioAttuale); // 12000

a.chilometraggioAttuale = 8000;    // non aumenta: valore resta 12000
console.log(a.chilometraggioAttuale); // 12000
