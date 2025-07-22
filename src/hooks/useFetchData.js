import { useEffect, useState } from 'react';

export default function useFetchData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFun = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(response.status);
        }
        const json = await response.json();
        setData(json);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchFun();
  }, [url]);

  return { loading, data, error };
}
