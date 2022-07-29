import { useState, useEffect } from 'react';

// custom hook to fetch data from server
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // runs every time render is called
  // second arg is array of dependencies to run this only if that state changed
  // empty array, it only runs on initial render
  useEffect(() => {
    const abortController = new AbortController(); // Used to stop the fetch

    // fetch data from server
    fetch(url, { signal: abortController.signal })
      .then((res) => {
        if (!res.ok) throw Error('Could not fetch the data for that resource');
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        // don't update state if we aborted
        if (err.name === 'AbortError') {
          console.log('fetch aborted');
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });
    return () => abortController.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
