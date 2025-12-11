
import { useFetch } from "./hooks/useFetch"; // importa il custom hook

export const TodoList = () => {
    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/todos"); // usa il custom hook per ottenere i todo.
    
    if(loading) return <p>Caricamento in corso...</p>;
    if(error) return <p>Errore: {error}</p>;    

    return (
        <div>
            <h2>Lista Todo</h2>   
            <ul>
                {data && data.map(todo => (   // mappa i todo e li mostra in una lista
                    <li key={todo.id}>{todo.title}</li> 
                ))}
            </ul>
        </div>
    );
}  

