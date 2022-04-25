export interface StoryInterface {
    id: number
    type: string
    title: string
    descendants: Array<number>
    score: number
    by: string
    url: string
    time: number
}