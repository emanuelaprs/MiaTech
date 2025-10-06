import { useState } from 'react';

function LoginForm() {  
    //non due state separati: unico useState per gestire i due campi del form(proprietà di un oggetto
    const [form, setForm] = useState({
        username:'',
        password:'',
    });  

    // Funzione che aggiorna i campi in modo dinamico

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setForm((form) => {
            return {
                ...form,
                [name]: value
            } 
        });
    };

    // funzione di invio del form
    const handleSubmit = (event) => {
        event.preventDefault(); // Blocca il comportamento predefinito del form (il ricaricamento della pagina).
    }
    
    return (
        <form onSubmit={handleSubmit}> 
            <div>
             <label>Username:</label>
             <input onChange={handleChange} type="text" name="username" value={form.username}/>
            </div>
    
            <div>
             <label>Password:</label>
             <input onChange={handleChange} type="password" name="password" value={form.password}/>
            </div>

            <button>Login</button>

        </form> 
        
    )
}



export default LoginForm;