import './App.css'
import Counter from './Counter';
import HelloWord from './HelloWord';
import TextInput from './TextInput';
import LoginForm from './LoginForm';
import UncontrolledInput from './UncontrolledInput'
import ItemList from './ItemList';
import Card from './Card';
import { useFetch } from './hooks/useFetch';
import { TodoList } from "./TodoList";

function App() {
  const name = "Mario";

  const colors = [ // array di oggetti con id univoco, da mostrare
    { id: 1, nome: "yellow" },
    { id: 2, nome: "green" },
    { id: 3, nome: "white" },
  ];

  //esercizio useFetch 
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");


  return (
    <>
      <h1>Primo esercizio react</h1>
      <p>Ciao mi chiamo {name}</p>
      <div>
        <h2>I miei colori</h2>
        <ItemList items={colors} />   {/*Passo l'array di oggetti colors come prop "items" a ItemList*/}
      </div>

      <div>
        {loading ? "Caricamento in corso..." : error ? `Errore: ${error}` : JSON.stringify(data)}
      </div>

      <div>
      <h1>Lista To-Do (Fetch con Hook Personalizzato)</h1>
      {/* Inseriamo la nostra componente con la lista */}
      <TodoList />
    </div>

      <Counter />
      <HelloWord />
      <TextInput />
      <LoginForm />
      <UncontrolledInput />
      <Card>
        <p>Questa è la mia card color canarino!</p>
      </Card>

      




    </>
  );

}

export default App;





