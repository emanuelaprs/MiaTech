import { useState } from 'react'; 

function TextInput() {
    const [text, setText] = useState('') // Definisco lo stato per memorizzare il valore dell'input

    // funzione che gestisce il cambiamento 
    const inputChange = (event) => {
        setText(event.target.value);
    };

    return (
        <>
        <input type="text" value={text} onChange={inputChange} />
        <p>{text}</p>
        </>
    )
}



export default TextInput;