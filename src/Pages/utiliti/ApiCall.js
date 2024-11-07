const baseUrl = 'http://localhost:8000/client/ui'

const getApi = async (url) => {
    try {
        const response = await fetch(baseUrl + url);

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        // setPosts(data);
        return data
    } catch (error) {
        return error
        // setError(error.message);
    } finally {
        // setLoading(false);
    }
}

export { getApi };