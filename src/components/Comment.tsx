import React from 'react';
import { Link } from 'react-router-dom';
import { CommentInterface } from '../services/types/CommentInterface';
import moment from 'moment';
import sanitizeHtml from 'sanitize-html';
import upVoteIcon from '../img/grayarrow2x.gif';

const htmlOptions = {
    allowedTags: ['a', 'p'],
    allowedSchemes: [ 'http', 'https', 'ftp', 'mailto', 'tel' ],
    allowedAttributes: {
        a: ['href', 'target', 'name']
    }
}

const Comment: React.FC<CommentInterface> = ({
    id, by, time, title, text, rootId, nextCommentId, parentId, children
}) => {
    let nextCommentLink;
    let parentLink;
    let rootLink;

    if (nextCommentId) {
        nextCommentLink = (<li className="border-l-1 border-gray-200">
            <Link to={`#${nextCommentId}`} className="text-xs">[next]</Link>
        </li>)
    }

    if (rootId) {
        rootLink = (<li className="border-l-1 border-gray-200">
            <Link to={`#${rootId}`} className="text-xs">[root]</Link>
        </li>)
    }

    if (parentId) {
        parentLink = (<li className="border-l-1 border-gray-200">
            <Link to={`#${parentId}`} className="text-xs">[parent]</Link>
        </li>)
    }

    return (
        <>
            <ul className="text-sm ml-4 my-2">
                <li className='ml-4 px-2'>
                    <ul className="list-none flex flex-row text-xs">
                        <li className="text-gray-500">
                            {by}
                        </li>
                        <li className="text-gray-500">
                            {moment(time).fromNow()}
                        </li>
                        {rootLink}
                        {parentLink}
                        {nextCommentLink}
                    </ul>
                    <div className="flex">
                        <a className="align-middle" href={`https://news.ycombinator.com/vote?id=${id}&how=up&goto=item%3Fid%3D${id}`}>
                            <img src={upVoteIcon} alt="up-vote" className='h-3 mr-1' />
                        </a>
                        <div className="text-sm text-left" dangerouslySetInnerHTML={{__html: sanitizeHtml(text ? text : '', htmlOptions)}} />
                    </div>
                    {children && children.map(childComment => <Comment {...childComment} />)}
                </li>
            </ul>
        </>
    )
}

export default Comment;