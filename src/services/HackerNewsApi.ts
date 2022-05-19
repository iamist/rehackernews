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
            })
        }

        return [error, stories];
    }

    public async getStory(
        id: number,
        storyInfo: StoryInterface,
        comemntIds?: Array<number>,
        maxParentCommentCount?: number | 30,
        maxChildComemntCount?: number | 10
    ) {

        const _this = this;
        let [error, data] = await this.getItemInfo(id);
        let comments;
        if (error) return [error, storyInfo];

        if (data && data.kids) {
            storyInfo = data;
            if (!storyInfo.children) {
                storyInfo.children = [];
            }

            const allKidsResponse = await Promise.allSettled(
                data.kids.slice(0, 10).map((kid: number) => {
                    async function getKids() {
                        let [error, kidInfo] = await _this.getItemInfo(kid);
                        if (!error && kidInfo.kids) {
                            [error, kidInfo] = await _this.getStory(kid, kidInfo);
                            if (!error && storyInfo.children) {
                                let children: {[k: string]: StoryInterface[]} = {};
                                storyInfo.children.push(children[kid] = kidInfo);
                            }
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
                })
            }
        }

        return [error, storyInfo, comments];
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