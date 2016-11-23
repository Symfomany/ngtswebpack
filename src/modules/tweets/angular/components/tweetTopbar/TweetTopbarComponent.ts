import { TopbarModel } from '../../../core/models/TopbarModel';
import { SharedModel } from '../../../core/models/SharedModel';
export class TweetTopbarComponent implements ng.IComponentOptions {
    public controller: Function = TweetTopbarController;
    public template: string = `
        <div>
            <div class="collapsed-content" ng-if="!$ctrl.sharedModel.topbarCollapsed">
                <h1><i class="fa fa-twitter"></i>&nbsp;Créer un nouveau tweet</h1>
                <textarea class="form-control" ng-model="$ctrl.model.tweetContent"></textarea><br/>
                <button ng-disabled="$ctrl.model.tweetContent === ''"
                    ng-click="$ctrl.post()"
                    class="btn btn-primary btn-lg">
                        <i class="fa fa-pencil"></i>&nbsp;Ecrire
                </button>
            </div>
            <i ng-click="$ctrl.toggleCollapsed()"
                class="fa fa-chevron-up dp-collapse dp-collapse-center"
                ng-class="{'fa-chevron-up': !$ctrl.sharedModel.topbarCollapsed, 'fa-chevron-down': $ctrl.sharedModel.topbarCollapsed}"></i>
        </div>
    `;
}

/**
 * Tweet Topbar Controller
 * 
 * @export
 * @class TweetTopbarController
 */
export class TweetTopbarController {
    public static $inject: Array<string> = ["SharedModel", "TopbarModel"];

    /**
     * Creates an instance of TweetTopbarController.
     * 
     * @param {SharedModel} sharedModel
     * @param {TopbarModel} model
     * 
     * @memberOf TweetTopbarController
     */
    constructor(public sharedModel: SharedModel, public model: TopbarModel) {
    }

    /**
     * Toggle Collase
     * @memberOf TweetTopbarController
     */
    public toggleCollapsed(): void {
        this.model.toggleCollapsed();
    }

    /**
     * Add a Tweet Action
     * @memberOf TweetTopbarController
     */
    public post(): void {
        this.model.addTweet();
    }
}