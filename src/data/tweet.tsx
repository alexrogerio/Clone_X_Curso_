import { Tweet } from "@/type/tweet";
import { user, user2, user3 } from "./user";

export const tweet : Tweet = {
    id: 123,
    user: user,
    body: "Posto meu 123",
    image: 'https://images.wondershare.com/repairit/aticle/2021/08/twitter-header-photo-issues-1.jpg',
    likeCount: 12,
    commentCount: 15,
    retweetedCount: 23,
    liked: true,
    retweeted: false,
    datePost: new Date(2024,10,1,0,0,0)
}

export const tweet2 : Tweet = {
    id: 1234,
    user: user2,
    body: "Show muito marcante",
    image: 'https://assets.papelpop.com/wp-content/uploads/2023/04/pedro-sampaio-lisbo-scaled.jpg',
    likeCount: 13,
    commentCount: 145,
    retweetedCount: 233,
    liked: false,
    retweeted: true,
    datePost: new Date(2024,10,1,11,0,0)
}

export const tweet3 : Tweet = {
    id: 12345,
    user: user3,
    body: "Smartphone da Tesla",
    image: 'https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2022/05/smartphone-da-tesla-comeca-especulacao-sobre-data-de-lancamento-do-model-pi.jpeg',
    likeCount: 13,
    commentCount: 145,
    retweetedCount: 233,
    liked: false,
    retweeted: true,
    datePost: new Date(2024,10,1,11,0,0)
}