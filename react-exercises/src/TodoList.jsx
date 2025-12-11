
import { useFetch } from "./hooks/useFetch"; // importa il custom hook
import { useFilteredTodos } from "./hooks/useFilteredTodos";

export const TodoList = () => {
    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/todos"); // usa il custom hook per ottenere i todo.
    
    // State per il termine di ricerca digitato dall'utente
    const [searchTerm, setSearchTerm] = useState("");

    // Usa il custom hook per ottenere i todo filtrati in base al termine di ricerca
    const filteredTodos = useFilteredTodos(data || [], searchTerm); // passa un array vuoto se data è null

    if(loading) return <p>Caricamento in corso...</p>;
    if(error) return <p>Errore: {error}</p>;    

    return (
        <div>
            <h2>Lista Todo</h2>   

            {/* Campo di input per la ricerca */}
            <input 
                type="text" 
                placeholder="Cerca todo..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} // aggiorna lo stato al cambiamento dell'input
            />

            <ul>
                {filteredTodos && filteredTodos.map(todo => (   // mappa i todo filtrati e li mostra in una lista
                    <li key={todo.id}>{todo.title}</li> 
                ))}
            </ul>
        </div>
    );
}  

