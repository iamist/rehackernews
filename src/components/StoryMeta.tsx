import React from 'react';
import moment from 'moment';
import StoryMetaInterface from '../services/types/StoryMetaInterface';

const StoryMeta: React.FC<StoryMetaInterface> = ({id, title, score, by, time, descendants, type, showPassLink, showFavoriteLink}) => {
    return (
        <>
            <div className="text-xs text-gray-600 ml-4">
                <ul className='list-none flex flex-row'>
                    <li className="mr-1 pr-1 border-gray-500 border-r">{score} points</li>
                    <li className="mr-1 pr-1 border-gray-500 border-r">by {by}</li>
                    <li className="mr-1 pr-1 border-gray-500 border-r">
                        {time && moment(moment.unix(time).format('YYYY-MM-DD HH:mm:ss'), 'YYYY-MM-DD HH:mm:ss').fromNow()}
                    </li>
                    <li className="mr-1 pr-1 border-gray-500 border-r"><a href={`https://news.ycombinator.com/hide?id=${id}&goto=${type}`}>hide</a></li>
                    <li className="mr-1 pr-1 border-gray-500 border-r"><a href={`https://hn.algolia.com/?query=${title}&type=${type}&dateRange=all&sort=byDate&storyText=false&prefix&page=0`}>past</a></li>
                    <li className="mr-1 pr-1 border-gray-500 border-r"><a href={`https://news.ycombinator.com/fave?id=${id}&auth=`}>favorite</a></li>
                    <li>{descendants} comments</li>
                </ul>
            </div>
        </>
    )
}

export default StoryMeta;