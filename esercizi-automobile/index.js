
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

//