import { Tweet } from "@/type/tweet";
import { user, user2, user3 } from "./user";

export const tweet : Tweet = {
    id: 123,
    user: user,
    body: "As Estrelas",
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Starsinthesky.jpg',
    likeCount: 12,
    commentCount: 15,
    retweetedCount: 23,
    liked: true,
    retweeted: false,
    datePost: new Date(2024,9,1,11,0,0)
}

export const tweet2 : Tweet = {
    id: 1234,
    user: user2,
    body: "Mercado Livre",
    image: 'https://i.ytimg.com/vi/_9N6R5hy5zg/maxresdefault.jpg',
    likeCount: 13,
    commentCount: 145,
    retweetedCount: 233,
    liked: false,
    retweeted: true,
    datePost: new Date(2024,9,1,11,0,0)
}

export const tweet3 : Tweet = {
    id: 12345,
    user: user3,
    body: "AliExpress",
    image: 'https://clubedoassinante.clicrbs.com.br/_next/image?url=https%3A%2F%2Fassets.alloyal.com.br%2Fuploads%2Fpromotion%2Fpicture%2F52085%2Flarge_7ca7dbc8-0475-4703-809a-d2e09291314a.png&w=3840&q=75',
    likeCount: 13,
    commentCount: 145,
    retweetedCount: 233,
    liked: false,
    retweeted: true,
    datePost: new Date(2024,10,0,10,0,0)
}