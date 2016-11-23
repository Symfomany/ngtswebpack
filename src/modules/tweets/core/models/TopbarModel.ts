import { Tweet } from "../entities/Tweet";
import { SharedModel } from './SharedModel';

/**
 * TopBar Model
 * @export
 * @class TopbarModel
 */
export class TopbarModel {
    public static $inject: Array<string> = ["SharedModel"];
    public tweetContent: string;

    /**
     * Creates an instance of TopbarModel.
     * 
     * @param {SharedModel} sharedModel
     * 
     * @memberOf TopbarModel
     */
    constructor(private sharedModel: SharedModel) {
        this.sharedModel = sharedModel;
    }


    /**
     *  Toggle Topbar
     * @memberOf TopbarModel
     */
    public toggleCollapsed(): void {
        this.sharedModel.toggleTopbar();
    }

    /**
     * Add Tweet
     * @memberOf TopbarModel
     */
    public addTweet(): void {
        this.sharedModel.tweets.push(new Tweet("@brecht", this.tweetContent, false));
        this.tweetContent = "";
    }
}