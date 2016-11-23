import { Tweet } from "../entities/Tweet";
import { SharedModel } from './SharedModel';

/**
 * Content Model Logic
 * @export
 * @class ContentModel
 */
export class ContentModel {

    public static $inject: Array<string> = ["SharedModel"];
    public tweets: Array<Tweet>;

    /**
     * Creates an instance of ContentModel.
     * @param {SharedModel} sharedModel
     * @memberOf ContentModel
     */
    constructor(sharedModel: SharedModel) {
        this.tweets = sharedModel.tweets;
    }
}
