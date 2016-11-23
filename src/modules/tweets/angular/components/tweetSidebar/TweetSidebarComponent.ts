import { SidebarModel } from '../../../core/models/SidebarModel';
import { SharedModel } from '../../../core/models/SharedModel';

/**
 * Composants TweetsSideBar with Controller
 * 
 * @export
 * @class TweetSidebarComponent
 * @implements {ng.IComponentOptions}
 */
export class TweetSidebarComponent implements ng.IComponentOptions {
    public template: string = `
        <div ng-class="{'sidebar-collapsed': $ctrl.sharedModel.sidebarCollapsed}">
            <div>
                <i ng-click="$ctrl.toggleCollapsed()" class="fa dp-collapse dp-collapse-right"
                ng-class="{'fa-chevron-left': !$ctrl.sharedModel.sidebarCollapsed, 'fa-chevron-right': $ctrl.sharedModel.sidebarCollapsed}"></i>
                <div class="collapsed-content">
                    <h2>Les Tweets Stars</h2>
                    <div ng-repeat="tweet in $ctrl.model.tweets" ng-if="tweet.starred">
                        {{::tweet.user}} has tweeted {{::tweet.content}}
                    </div>
                </div>
            </div>
        </div>
    `;
    public controller: Function = TweetSidebarController;
}

/**
 * SideBar Controller
 * @export
 * @class TweetSidebarController
 */
export class TweetSidebarController {
    public static $inject: Array<string> = ["SidebarModel", "SharedModel"];

    /**
     * Creates an instance of TweetSidebarController.
     * 
     * @param {SidebarModel} model
     * @param {SharedModel} sharedModel
     * 
     * @memberOf TweetSidebarController
     */
    constructor(public model: SidebarModel, public sharedModel: SharedModel) {
    }

    /**
     * Change toggle collapse by Model
     * @memberOf TweetSidebarController
     */
    public toggleCollapsed(): void {
        this.model.toggleCollapsed();
    }
}
