import { Tweet } from "../entities/Tweet";

/**
 * Export Tweet
 * @export
 * @class TweetService
 */
export class TweetService {

    /**
     * Get All Tweets existing
     * @returns {Array<Tweet>}
     * 
     * @memberOf TweetService
     */
    public getAll(): Array<Tweet> {
        var returnObj: Array<Tweet> = new Array<Tweet>();

        for (var i: number = 0; i < 10; i++) {
            returnObj.push(new Tweet("@Symfomany", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in semper leo, sit amet sodales libero. Phasellus malesuada, ipsum maximus consequat tempus, mi justo congue metus, in consequat nisl lectus eu risus. Proin finibus, velit suscipit aliquam luctus, erat lacus mollis ante, at cursus arcu elit tristique ipsum. In nec tellus efficitur, dapibus dui quis, molestie orci. Donec ullamcorper sollicitudin risus quis pretium. Duis eu ex lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc vehicula ligula turpis, fermentum iaculis dui mollis eget. Integer in efficitur magna, vel laoreet nulla. Ut fringilla lectus nec sem sodales, vel gravida nulla sagittis. Donec scelerisque purus non massa pretium, sed dapibus diam ornare.", false));
        }
        return returnObj;
    }
}