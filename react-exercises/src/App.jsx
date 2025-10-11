import './App.css'
import Counter from './Counter';
import HelloWord from './HelloWord';
import TextInput from './TextInput';
import LoginForm from './LoginForm';
import UncontrolledInput from './UncontrolledInput'
import ItemList from './ItemList';


function App() {
  const name = "Mario";

  const colors = [ // array di oggetti con id univoco, da mostrare
    { id: 1, nome: "yellow" },
    { id: 2, nome: "green" },
    { id: 3, nome: "white" },
  ];


  return (
    <>
      <h1>Primo esercizio react</h1>
      <p>Ciao mi chiamo {name}</p>
      <div>
        <h2>I miei colori</h2>
        <ItemList items={colors} />   {/*Passo l'array di oggetti colors come prop "items" a ItemList*/}
      </div>

      <Counter />
      <HelloWord />
      <TextInput />
      <LoginForm />
      <UncontrolledInput />
    </>
  );

}

export default App;





