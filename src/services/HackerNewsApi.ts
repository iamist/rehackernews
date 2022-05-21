import Api from './Api';
import { StoryInterface } from './types/StoryInterface';
class HackerNewsApi extends Api {
    constructor() {
        super({ baseURL: 'https://hacker-news.firebaseio.com/v0' });
    }

    /**
     * Get list of stories base on type
     * @param type {string}
     * @returns
     */
    public async fetchStories(type: string) {
        const [error, storyIds] = await this.fetch(`${type}.json`);
        let stories;
        if (storyIds && storyIds instanceof Array) {
            const response = await Promise.allSettled(
                storyIds.slice(0, 30).map( id => {
                    return this.getItemInfo(id)
                        .then(([error, data]) => {
                            return data;
                        })
                })
            );

            stories = response.map(data => {
                if (data.status === 'fulfilled') {
                    return data.value;
                }

                return false;
            })
        }

        return [error, stories];
    }

    public async getStory(
        id: number,
        storyInfo?: StoryInterface,
        comemntIds?: Array<number>,
        maxParentCommentCount?: number | 30,
        maxChildComemntCount?: number | 10
    ) {

        const _this = this;
        let comments;
        let [error, data] = (storyInfo && id !== storyInfo.id) ? await this.getItemInfo(id) : [false, storyInfo];
        if (error) return [error, storyInfo];

        if (data && data.kids) {
            if (!data.children) {
                data.children = [];
            }

            const allKidsResponse = await Promise.allSettled(
                data.kids.map((kid: number) => {
                    async function getKids() {
                        let [error, kidInfo] = await _this.getStory(kid, data);
                        if (!error) {
                            let children: {[k: string]: StoryInterface[]} = {};
                            data.children.push(children[kid] = kidInfo);
                        }

                        return kidInfo;
                    }

                    return getKids();
                })
            );

            if (allKidsResponse instanceof Array) {
                comments = allKidsResponse.map(data => {
                    if (data.status === 'fulfilled') {
                        return data.value;
                    }

                    return false;
                })
            }
        }

        return [error, data, comments];
    }

    /**
     * Get specific item through its ID, item can be of type story, comment or poll
     * @param id {number}
     * @returns {object}
     */
    public async getItemInfo(id: number) {
        const [error, data] = await this.fetch(`/item/${id}.json`);

        return [error, data];
    }
}

export default HackerNewsApi;