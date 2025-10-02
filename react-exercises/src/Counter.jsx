import {useState} from 'react'; // qui dovrei importare useEffect ---FARE ESERCIZIO SINCRONIZZA

 // restituisci il valore di count in modo dinamico

// Esercizio incrementa contatore + esercizio decrementa + esercizio reset




function Counter() {
  const [count, setCount] = useState(0); // è lo stato iniaziale = 0

  const increment = () => {
    setCount(count + 1); // incremento: la funzione aggiorna lo stato aggiungendo 1
  };
  // const increment = () => setCount(count + 1); ---> forma contratta.

  const decrement = () => {
    setCount(count - 1);  // decremento: fa funzione aggiorna lo stato sottraendo 1
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <div>Count: {count}</div> 
      <button onClick={increment}>Incrementa</button>
      <button onClick={decrement}>Decrementa</button>
      <button onClick={reset}>Resetta</button>
    </div>
  );

}

export default Counter;