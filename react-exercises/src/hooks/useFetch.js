import { useEffect, useState } from "react";

function useFetch() {   // Stati per gestire i dati, il caricamento e l’errore
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {    // Effettua la chiamata fetch ogni volta che cambia la URL
        if (!url) return;

        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error("Errore");
                }

                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return
}


export default useFetch; 