import React, {useEffect, useState} from 'react';
import Loading from '../components/Loading';
import StoryCard from '../components/StoryCard';

import {HackerNewsApi} from '../services';
import { StoryInterface } from '../services/types/StoryInterface';

const NewStories: React.FC = () => {
    const service = new HackerNewsApi();
    const [stories, setStories] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function activate() {
            const [error, data] = await service.fetchStories('newstories');

            setError(error);
            setStories(data);
            setIsLoading(false);
        }

        activate();
    }, []);

    if (error) return null;

    if (isLoading) return <Loading />;

    return (
        <>
            <ul className="list-inside list-decimal m-2 w-full text-left">
            {
                stories.map((story: StoryInterface) => {
                    return <li key={story.id} className='mb-1 text-md'>
                        <StoryCard {...story}></StoryCard>
                    </li>;
                })
            }
            </ul>
        </>
    )
}

export default NewStories;