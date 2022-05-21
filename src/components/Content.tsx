import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NewStories from '../features/NewStories';
import TopStories from '../features/TopStories';
import BestStories from '../features/BestStories';
import Story from '../features/Story';

const Content: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<TopStories />} />
                <Route path="/newstories" element={<NewStories />} />
                <Route path="/beststories" element={<BestStories />} />
                <Route path="/item/:itemId" element={<Story />} />
            </Routes>
        </>
    );
}

export default Content;