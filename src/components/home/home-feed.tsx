import { tweet, tweet2, tweet3 } from "@/data/tweet"
import { TweetItem } from "../tweet/tweet-item"

export const HomeFeed = () => {
    return (
        <div>
            <TweetItem tweet={tweet} />
            <TweetItem tweet={tweet3} />
            <TweetItem tweet={tweet2} />
        </div>
    )
}