import React, {useEffect, useState} from 'react';

import {HackerNewsApi} from '../services';

const useStoriesApi = (type: string) => {
    const [stories, setStories] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const api = new HackerNewsApi();

    useEffect(() => {
        setLoading(true);

        async function activate() {
            const [error, data]  = await api.fetchStories(type);

            setError(error);
            setStories(data);
            setLoading(false);
        }

        activate();
    }, [type]);

    return {loading, error, stories};
}

export default useStoriesApi;