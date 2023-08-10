import { useState, useEffect } from "react";


const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [errorType, setErrorType] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      if (!url) return;  /* exit from useEffect() */
    setIsLoading(true);

    async function fetchData() {
        try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        } catch (err) {
        setHasError(true);
        setErrorType(err.message);
        } finally {
        setIsLoading(false);
        }
    }

    fetchData();
    }, [url]);

    return { data, hasError, errorType, isLoading };
}
// export function useFetch(url) {
//     const [fetchedData, setFetchedDat] = useState(null)
//     const [isLoading, setLoading] = useState(true)
//     const [error, setError] = useState(false)

//     useEffect(() => {
//         if (!url) 
//         return
//     setLoading(true)
//     async function fetchData() {
//         try {
//             const response = await fetch(url)
//             const data = await response.json()
//             setFetchedDat(data)
//         } catch (err) {
//             setError(true)
//         }
//     }
//     fetchData()
//     }, [url])
//     return {isLoading, fetchedData, error}
// }

export default useFetch;