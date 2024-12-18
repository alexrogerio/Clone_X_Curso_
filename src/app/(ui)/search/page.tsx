import { TweetItem } from "@/components/tweet/tweet-item"
import { GeneralHeader } from "@/components/ui/general-header"
import { SearchInput } from "@/components/ui/search-input"
import { tweet, tweet2, tweet3 } from "@/data/tweet"

type Props = {
    searchParams: {
        q: string | undefined
    }
}
export default function Page({searchParams} : Props) {
    return (
        <div>
            <GeneralHeader backHref="/">
                <SearchInput  defaultValue={searchParams.q}/>
            </GeneralHeader>
            <div className="border-t-2 border-gray-900">
                <TweetItem tweet={tweet} />
                <TweetItem tweet={tweet2} />
                <TweetItem tweet={tweet3} />
            </div>
        </div>
    )
}