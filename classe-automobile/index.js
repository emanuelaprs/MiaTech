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
}

const car = new automobile("Opel", "Corsa", 2010);
console.log(car.descrizione()); 

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
