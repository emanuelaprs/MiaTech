import { createContext, useState } from "react";

// Creo il contesto per i todo
export const TodoContext = createContext();


// Creo il provider per il contesto dei todo
export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]); // Stato globale per i todo

    return (
        <TodoContext.Provider value={{ todos, setTodos }}>
            {children}
        </TodoContext.Provider>
    );
}