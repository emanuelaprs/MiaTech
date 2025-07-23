
// Esercizio Automobile

class Automobile {
    constructor(marca, modello, anno, chilometraggio = 0) {
    this.marca = marca;
    this.modello = modello;
    this.anno = anno;
    this.chilometraggio = chilometraggio;
    }
  descrizione() {
    return `Automobile: ${this.marca} ${this.modello} ${this.anno}`;
    }

  aggiungiChilometri(km) {
    this.chilometraggio += km;
    }

    mostraChilometraggio() {
    return `Chilometraggio attuale: ${this.chilometraggio} km`;
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
            return `${auto1.marca} ${auto1.modello} ha più chilometri (${auto1.chilometraggio} km) di ${auto2.marca} (${auto2.modello} (${auto2.chilometraggio} km)` ;
        } else if (auto1.chilometraggio < auto2.chilometraggio) {
            return `${auto2.marca} ha più chilometri (${auto2.modello} km) di ${auto1.marca} (${auto1.modello} (${auto1.chilometraggio} km)`;
        } else {
            return `Entrambe le auto (${auto1.modello} e ${auto2.modello}) hanno lo stesso chilometraggio (${auto1.chilometraggio} km)`;
        }
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

