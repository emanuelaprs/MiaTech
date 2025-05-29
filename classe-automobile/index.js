// Esercizio Automobile

class automobile {
     constructor (marca, modello, anno, chilometraggio = 0) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio;
    }

    descrizione() {
        return `Automobile: ${this.marca} ${this.modello}, anno ${this.anno}`;
  }
    aggiungiChilometri(km) {
        this.chilometraggio += km;
    }

    mostraChilometraggio() {
        return this.chilometraggio;
    }

    #calcolaEtà() {
    const annoCorrente = new Date().getFullYear();
    return annoCorrente - this.anno;
    }

    mostraEtà() {
    const età = this.#calcolaEtà();
    console.log(età);
    }
}

const car = new automobile("Opel", "Corsa", 2010);
console.log(car.descrizione()); 

car.mostraEtà();

// Esercizio Aggiungiamo metodi e proprietà -- (aggiunto allo stesso codice sopra)

car.aggiungiChilometri(100);
console.log(car.mostraChilometraggio());

car.aggiungiChilometri(80);
console.log(car.mostraChilometraggio());

// Esercizio Sottoclasse elettrica

class Elettrica extends automobile {
    constructor (marca, modello, anno, chilometraggio = 0, autonomia) {
        super (marca, modello, anno, chilometraggio = 0);
        this.autonomia = autonomia;
    }

    descrizione() {
        return `${super.descrizione()} - autonomia: ${this.autonomia} km`;
    }

    ricarica(km) {
        this.autonomia += km;
    }
}

// Esercizio Aggiungi metodo saluta()

automobile.prototype.saluta = function() {
    return `Ciao sono una ${this.marca} ${this.modello}.`;
};

const auto = new automobile("Opel", "Corsa");
console.log(auto.saluta());

