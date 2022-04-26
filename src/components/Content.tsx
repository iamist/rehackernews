import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import NewStories from '../features/NewStories';
import TopStories from '../features/TopStories';
import BestStories from '../features/BestStories';

const Content: React.FC = () => {
    return (
        <>
            <ul className="list-none flex flex-row m-2">
                <li>
                    <NavLink to="/" className={
                        ({isActive}) =>
                        'inline-block p-1 hover:bg-gray-200 border border-gray-500 ' +
                        (isActive ? 'bg-orange-200' : 'bg-gray-200')
                    }>
                            Top Stories
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/newstories" className={
                        ({isActive}) =>
                        'inline-block p-1 hover:bg-gray-200 border border-gray-500 ' +
                        (isActive ? 'bg-orange-200' : 'bg-gray-200')
                    }>
                            New Stories
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/beststories" className={
                        ({isActive}) =>
                        'inline-block p-1 hover:bg-gray-200 border border-gray-500 ' +
                        (isActive ? 'bg-orange-200' : 'bg-gray-200')
                    }>
                            Best Stories
                    </NavLink>
                </li>
            </ul>

            <Routes>
                <Route path="/" element={<TopStories />} />
                <Route path="/newstories" element={<NewStories />} />
                <Route path="/beststories" element={<BestStories />} />
            </Routes>
        </>
    );
}

export default Content;