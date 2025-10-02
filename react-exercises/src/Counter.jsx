import { useState, useEffect } from 'react'; 
 
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

  // Qua uso useEffect per aggiornare il titolo al cambiamento del contatore - quando 'count' cambia;
  
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); // secondo argomento di useEffect: dipendenza su count: l'effetto si esegue solo al mutare di count;


  // restituisci il valore di count in modo dinamico (parentesi graffe)
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