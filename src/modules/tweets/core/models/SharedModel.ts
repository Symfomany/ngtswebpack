import { Tweet } from "../entities/Tweet";
import { TweetService } from '../services/TweetService';

/**
 * SharedModel 
 * @export
 * @class SharedModel
 */
export class SharedModel {
    public static $inject: Array<string> = ["TweetService"];
    public tweets: Array<Tweet>;
    public topbarCollapsed: Boolean = false;
    public sidebarCollapsed: Boolean = false;

    /**
     * Creates an instance of SharedModel.
     * 
     * @param {TweetService} tweetService
     * 
     * @memberOf SharedModel
     */
    constructor(tweetService: TweetService) {
        this.tweets = tweetService.getAll();
    }

    /**
     * Toobar topbar 
     * @memberOf SharedModel
     */
    public toggleTopbar(): void {
        this.topbarCollapsed = !this.topbarCollapsed;
    }

    /**
     * toggle Sidebar
     * @memberOf SharedModel
     */
    public toggleSidebar(): void {
        this.sidebarCollapsed = !this.sidebarCollapsed;
    }

}

