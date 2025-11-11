

const Card = (props) => {      // posso anche destrutturare le props -> aggiungo { children } direttamente nei parametri della funzione.
    return (
        <div className="bg-yellow-100 border-gray-200 rounded-md max-w-md p-4 m-4">
            <h2 className="text-xl font-bold text-gray-700 text-center">La tua card</h2>
            <p className="text-gray-600">Contenuto</p>
            {props.children}
        </div>
    );
};

export default Card;