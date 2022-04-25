import Api from './Api';

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
                storyIds.slice(0, 10).map( id => this.getStory(id))
            );

            stories = response.map(data => {
                if (data.status === 'fulfilled') {
                    return data.value;
                }
            })
        }

        return [error, stories];
    }

    /**
     * Get specific story through its ID
     * @param id {number}
     * @returns {object}
     */
    public async getStory(id: number) {
        const [error, data] = await this.fetch(`/item/${id}.json`);
        if (error) return {};

        return data;
    }
}

export default HackerNewsApi;