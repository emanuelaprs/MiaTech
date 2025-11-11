import { useState } from 'react';

function GetRecipes() {
    const [result, setResult] = useState(null);  // state per i risultati della chiamata API (ricette); --> (metto null, perché voglio renderizzare una sola ricetta)
    const [loading, setLoading] = useState(false);  // state per il caricamento dati;
    const [error, setError] = useState(null);  // state per eventuali errori;

    async function handleSearch(value) {  // oppure const handleSearch = async () => {}  -> funzione per effettuare la chiamata API
        setLoading(true);  // Attiva e mostra caricamento
        setError(null);    // Reset eventuali errori
        setResult(null); // array vuoto che conterrà le ricette --> (metto null, perché voglio renderizzare una sola ricetta)

        const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + value;
        console.log(URL);

        try {
            const response = await fetch(URL);

            if (!response.ok) {
                throw new Error('Si è verificato un errore!');
            }

            const data = await response.json();  // data è ciò che viene restituito dalla chiamata API, convertito in JSON
            console.log(data);                   // mi serve per vedere i dati ottenuti con la chiamata fetch

            if (data.meals) {               //  Se troviamo risultati, li salviamo nello stato
                setResult(data.meals[0]);   // Prendi solo la prima ricetta <----- **
                console.log(result)
            } else {
                setResult(false)            // Se nessuna ricetta trovata, impostiamo un array vuoto --> metto false, perché voglio renderizzare una sola ricetta 
            }

        } catch (error) {
            setError(error.message); // Salva l'errore nello state
        } finally {
            setLoading(false); // Ferma il caricamento 
        }
    };

    const handleSubmit = (event) => {     // funzione che gestisce l'invio  della ricerca
        event.preventDefault();           // evita il refresh della pagina

        const search = event.target.recipe.value.trim();  // quello che l'utente scrive nell'input; trim(): rimuove gli spazi dalle stringhe

        if (search !== "") {
             handleSearch(search);                   // chiamo la funzione per la ricerca
        } else {
            alert("Inserisci il nome di una ricetta")
        }
    }

    return (
        <>
            <div className='min-h-screen bg-amber-100 py-10 px-4'>   {/*Contenitore principale*/}
                <div className='max-w-3xl mx-auto bg-white p-6 rounded shadow-md'>   {/*Contenitore del form, dentro il quale si apre poi la card*/}
                    <h1 className='text-xl text-center'>La tua ricetta</h1>

                    <form onSubmit={handleSubmit} className='flex flex-col gap-4 mb-6'>
                        <input type="text" name='recipe' placeholder='Inserisci ricetta' className='border border-gray-400 rounded-md' />
                        <button type='submit' className='w-32 px-5 py-2 text-white rounded-md bg-yellow-600 hover:bg-gray-600 mx-auto'>Cerca</button>
                    </form>

                    {loading && (
                        <p className='text-center text-gray-600'>Caricamento in corso...</p>
                    )}

                    {error && (
                        <p className='text-center text-red-600'>Errore: {error}</p>
                    )}

                    {result && !loading && !error && (
                        <div className='bg-white rounded-lg shadow-lg p-6 mt-6 mx-auto border border-gray-200'>   {/*Contenitore-Card*/}
                            <img src={result.strMealThumb} alt={result.strMeal} className='w-full h-64 object-cover rounded-md mb-5' />
                            <h2 className='text-2xl font-bold mb-2'>
                                {result.strMeal}
                            </h2>
                            <p className='text-sm text-gray-600 mb-2'>
                                Categoria: {result.strCategory}
                            </p>
                            <p className='text-gray-700 text-justify'>
                               {result.strInstructions} 
                            </p>
                        </div>
                        
                    )}
            

                    {result === false && !loading && !error && (
                        <p className='text-center text-gray-500 mt-6'>
                            Nessuna ricetta trovata.
                        </p>
                    )}

                </div>

            </div>
        </>
    );
}

export default GetRecipes;