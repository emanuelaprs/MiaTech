import { useRef } from "react";


function UncontrolledInput() {
    const inputRef = useRef(null); // viene creata una ref con la hook - riferimento vuoto
    const handleClick = () => {
        alert(inputRef.current.value)
    };

    return (
        <div>
            <input type="text"  ref={inputRef} placeholder="Scrivi qui"/>
            <button onClick={handleClick}>Mostra valore</button>
        </div>
    );
    
}

export default UncontrolledInput;