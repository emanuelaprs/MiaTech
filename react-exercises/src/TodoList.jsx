
import { useState, useCallback, useMemo, useRef, useEffect, useContext } from "react";
import { useFetch } from "./hooks/useFetch"; // importa il custom hook
import { useFilteredTodos } from "./hooks/useFilteredTodos";
import { TodoContext } from "./context/TodoContext";

export const TodoList = () => {
    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/todos"); // usa il custom hook per ottenere i todo.
    const { todos, setTodos } = useContext(TodoContext);

    // State per il termine di ricerca digitato dall'utente
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = useCallback((e) => {
        setSearchTerm(e.target.value);
    }, []);

    // Riferimento per gestire il focus dell'input di ricerca
    const searchInputRef = useRef(null);

    // Al montaggio del componente, mettiamo il focus sull'input
    useEffect(() => {
        if (searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, []);

    // Quando i dati vengono caricati, li salviamo nello stato globale dei todo
    useEffect(() => {
        if (data && data.length > 0 && todos.length === 0) {
            setTodos(data);
        }
    }, [data, todos, setTodos]);


    // Usa il custom hook per ottenere i todo filtrati in base al termine di ricerca
    // Lista filtrata memorizzata con useMemo per evitare ricalcoli inutili
    const filteredTodos = useMemo(() => {
        return useFilteredTodos(data || [], searchTerm);
    }, [data, searchTerm]);

    if (loading) return <p>Caricamento in corso...</p>;
    if (error) return <p>Errore: {error}</p>;

    return (
        <div>
            <h2>Lista Todo</h2>

            {/* Campo di input per la ricerca */}
            <input
                type="text"
                placeholder="Cerca todo..."
                value={searchTerm}
                onChange={handleSearchChange} // aggiorna lo stato al cambiamento dell'input
                ref={searchInputRef} // riferimento per il focus
            />

            <ul>
                {filteredTodos && filteredTodos.map(todo => (   // mappa i todo filtrati e li mostra in una lista
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
}

