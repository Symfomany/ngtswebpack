import { SharedModel } from '../../../core/models/SharedModel';


/**
 * @export
 * @class TweetMainComponent
 * @implements {ng.IComponentOptions}
 */
export class TweetMainComponent implements ng.IComponentOptions {
    public controller: Function = TweetMainController;
    public template: string = `
        <tweet-topbar ng-class="{'topbar-collapsed': $ctrl.sharedModel.topbarCollapsed}"></tweet-topbar>
        <tweet-content></tweet-content>
    `;
}

/**
 * Tweet Main Controller
 * 
 * @export
 * @class TweetMainController
 */
export class TweetMainController {
    public static $inject: Array<string> = ["SharedModel"];

    /**
     * Creates an instance of TweetMainController.
     * @param {SharedModel} sharedModel
     * @memberOf TweetMainController
     */
    constructor(public sharedModel: SharedModel) {
    }
}
