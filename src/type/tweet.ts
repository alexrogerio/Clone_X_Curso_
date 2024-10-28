import { User } from "./user"

export type Tweet = {
    id: number
    user: User
    body: string
    image?: string
    likeCount: number
    commentCount: number
    retweetedCount: number
    liked: boolean
    retweeted: boolean
    datePost: Date
}