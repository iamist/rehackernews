import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { StoryInterface } from '../services/types/StoryInterface';
import moment from 'moment';


const StoryCard: React.FC<StoryInterface> = (
    { id, title, descendants, score, by, url, time, type }: StoryInterface
) => {
    const {hostname} = url ? new URL(url) : {hostname: ''};
    return (
        <>
            <NavLink to={url ? url : '#'}>{title} <span className="text-xs text-gray-600">{hostname ? `(${hostname})` : ''}</span></NavLink>
            <div className="text-xs text-gray-600 ml-4">
                {score} points by {by} {moment(time).fromNow()} |
                <Link className="ml-2" to={`https://news.ycombinator.com/hide?id=${id}&goto=${type}`}>hide</Link> |
                <Link className="ml-2" to={`https://news.ycombinator.com/item?id=${id}`}>{descendants} comments</Link>
            </div>
        </>
    )
}

export default StoryCard;