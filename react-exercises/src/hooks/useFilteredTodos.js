import { useState, useEffect } from 'react';

export const useFilteredTodos = (todos, searchTerm) => {
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        if (!searchTerm) {
            setFilteredTodos(todos);
            return;
        }

        const results = todos.filter(todo =>
            todo.title.toLowerCase().includes(searchTerm.toLowerCase()) // filtro i todo in base al termine di ricerca
        );
        setFilteredTodos(results); // aggiorno lo stato con i todo filtrati
    }, [todos, searchTerm]);

    return filteredTodos;
}