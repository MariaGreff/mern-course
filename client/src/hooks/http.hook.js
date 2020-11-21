import {useState, useCallback} from 'react';

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true);

        try {
            console.log(url, {method, body, headers});
            const response = await fetch(url, {method, body, headers});
            const data = await response.json();
            console.log(data);

            if(!response.ok) {
                throw new Error(data.message ||'Something went wrong')
            }

            setLoading(false);

            return data;

        } catch (error) {
            setLoading(false);
            setError(error.message);
            throw error;
        }
    }, [])

    const clearError = () => setError(null);

    return { loading, request, error, clearError };
}