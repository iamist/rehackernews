import React from 'react';
import useStoriesApi from '../hooks/useStoriesApi';

import Loading from '../components/Loading';
import StoryCard from '../components/StoryCard';

import { StoryInterface } from '../services/types/StoryInterface';

const TopStories: React.FC = () => {
    const {loading, error, stories} = useStoriesApi('topstories');

    if (error) return null;

    if (loading) return <Loading />;

    return (
        <>
            <h2 className='text-left m-2 font-bold uppercase text-orange-800'>Top Stories</h2>
            <ul className="list-inside list-decimal m-2 w-full text-left">
            {
                stories.map((story: StoryInterface) => {
                    return (
                        <li key={story.id} className="mb-1 text-sm text-gray-500">
                            <StoryCard {...story}></StoryCard>
                        </li>
                    );
                })
            }
            </ul>
        </>
    );
}

export default TopStories;