import { Tweet } from "../entities/Tweet";
import { SharedModel } from './SharedModel';

/**
 * Sidebar Model
 * @export
 * @class SidebarModel
 */
export class SidebarModel {
    public static $inject: Array<string> = ["SharedModel"];
    public tweets: Array<Tweet>;

    /**
     * Creates an instance of SidebarModel.
     * 
     * @param {SharedModel} sharedModel
     * 
     * @memberOf SidebarModel
     */
    constructor(private sharedModel: SharedModel) {
        this.tweets = sharedModel.tweets;
    }

    /**
     * 
     * @memberOf SidebarModel
     */
    public toggleCollapsed(): void {
        this.sharedModel.toggleSidebar();
    }
}
