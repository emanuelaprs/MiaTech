import './App.css'
import Counter from './Counter';
import HelloWord from './HelloWord';
import TextInput from './TextInput';
import LoginForm from './LoginForm';


function App() {
  const name = "Mario";
  return (
    <>
    <h1>Primo esercizio react</h1>
    <p>Ciao mi chiamo {name}</p>
    <Counter/>
    <HelloWord/>
    <TextInput/>
    <LoginForm/>
    </>
  );

}

export default App;





