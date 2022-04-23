import React from 'react';
import {Link} from 'react-router-dom';

const Footer : React.FC = () => {
    return (
        <>
            <div className="w-full border-t-2 border-orange-600 py-4 text-center">
                <div className="text-center mb-2">
                    Applications are open for YC Summer 2022
                </div>
                <ul className="list-none flex text-sm justify-center">
                    <li>
                        <Link className="px-2 text-xs border-gray-700 border-r" to="https://news.ycombinator.com/newsguidelines.html">Guidelines</Link>
                    </li>
                    <li>
                        <Link className="px-2 text-xs border-gray-700 border-r" to="https://news.ycombinator.com/newsfaq.html">FAQ</Link>
                    </li>
                    <li>
                        <Link className="px-2 text-xs border-gray-700 border-r" to="https://news.ycombinator.com/lists">Lists</Link>
                    </li>
                    <li>
                        <Link className="px-2 text-xs border-gray-700 border-r" to="https://github.com/HackerNews/API">API</Link>
                    </li>
                    <li>
                        <Link className="px-2 text-xs border-gray-700 border-r" to="https://news.ycombinator.com/security.html">Security</Link>
                    </li>
                    <li>
                        <Link className="px-2 text-xs border-gray-700 border-r" to="http://www.ycombinator.com/legal/">Legal</Link>
                    </li>
                    <li>
                        <Link className="px-2 text-xs border-gray-700 border-r" to="http://www.ycombinator.com/apply/">Apply to YC</Link>
                    </li>
                    <li>
                        <Link className="px-2 text-xs border-gray-700" to="mailto:hn@ycombinator.com">Contact</Link>
                    </li>
                </ul>
                <div className="text-center mt-2">
                <form method="get" action="//hn.algolia.com/">
                    <label htmlFor="q" className="text-gray-500 text-sm">Search:</label> <input className="border-gray-400 border bg-white" type="text" name="q" value="" size={17} autoCorrect="off" spellCheck="false" autoCapitalize="off" autoComplete="false"/>
                </form>
                </div>
            </div>
        </>
    )
};

export default Footer;