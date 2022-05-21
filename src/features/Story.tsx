import React, {useEffect, useState} from 'react';
import { HackerNewsApi } from '../services';
import { StoryInterface } from '../services/types/StoryInterface';
import { useParams } from 'react-router-dom';
import upVoteIcon from '../img/grayarrow2x.gif';
import StoryMeta from '../components/StoryMeta';
import Comment from '../components/Comment';
import Loading from '../components/Loading';
import { CommentInterface } from '../services/types/CommentInterface';

const Story : React.FC = () => {
    const [story, setStory] = useState<StoryInterface>({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [comments, setComment] = useState<CommentInterface[]>([]);
    const params = useParams();
    const itemId = params.itemId || '';

    useEffect(() => {
        setLoading(true);

        async function activate() {
            const service = new HackerNewsApi();
            const [error, storyInfo, allKidsResponse] = await service.getStory(parseInt(itemId), {});

            setLoading(false);
            setError(error);
            setStory(storyInfo);
            setComment(allKidsResponse);
        }

        activate();
    }, [itemId]);

    if (error) return null;

    if (loading) return <Loading />

    return (
        <>
            <div className="flex flex-direction-row justify-items-center">
                <a className="flex items-center justify-center" href={`https://news.ycombinator.com/vote?id=${itemId}&how=up&goto=item%3Fid%3D${itemId}`}>
                    <img src={upVoteIcon} alt="up-vote" className='h-3 mr-1' />
                </a>
                <h2 className="text-sm text-black">{story.title}</h2>
            </div>
            <StoryMeta {...story} />
            {comments && comments.map( comment => <Comment {...comment} />)}
        </>
    );
}

export default Story;