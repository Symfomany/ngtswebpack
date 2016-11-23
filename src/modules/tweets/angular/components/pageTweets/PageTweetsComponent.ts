import { SharedModel } from '../../../core/models/SharedModel';

/**
 * Page Controller: Template + Controller
 * 
 * @export
 * @class PageTweetsComponent
 * @implements {ng.IComponentOptions}
 */
export class PageTweetsComponent implements ng.IComponentOptions {
    public controller: Function = PageTweetsController;
    public template: string = `
        <tweet-sidebar ng-class="{'sidebar-collapsed': $ctrl.sharedModel.sidebarCollapsed}"></tweet-sidebar>
        <tweet-main></tweet-main>
    `
}

/**
 * Page Tweets Controller
 * 
 * @export
 * @class PageTweetsController
 */
export class PageTweetsController {
    public static $inject: Array<string> = ["SharedModel"];

    /**
     * Creates an instance of PageTweetsController.
     * 
     * @param {SharedModel} sharedModel
     * 
     * @memberOf PageTweetsController
     */
    constructor(public sharedModel: SharedModel) {
    }
}