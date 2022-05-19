import { StoryInterface } from './StoryInterface';

export interface CommentInterface extends StoryInterface {
    nextCommentId?: number
    parentId?: number
    rootId?: number
    text?: string
}