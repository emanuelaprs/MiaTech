import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);     
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Errore nella risposta del server");
        }

        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // esegue di nuovo la fetch se cambia la URL

  // RITORNO CORRETTO SU UNA SOLA RIGA
  return { data, loading, error };
};
