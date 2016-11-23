import { ContentModel } from '../../../core/models/ContentModel';
export class TweetContentComponent implements ng.IComponentOptions {
    public controller: Function = TweetContentController;
    public template: string = `
        <div>
            <h2>Tweets</h2>
            <p>(les plus anciens...)</p>
            <div class="dp-tweets">
                <div class="row dp-tweet" ng-repeat="tweet in $ctrl.model.tweets">
                    <div class="col-sm-8">
                        <h4>{{::tweet.user}} a tweeté</h4>
                        <hr />
                        <p><i>{{::tweet.content}}</i></p>
                        <i class="fa fa-reply dp-tweet-icon"></i>
                        <i class="fa fa-retweet dp-tweet-icon"></i>
                        <i class="fa fa-star dp-tweet-icon"></i>
                        <i class="fa fa-ellipsis-h dp-tweet-icon"></i>
                    </div>
                    <div class="col-sm-4">
                        <star starred="tweet.starred" class="pull-right"></star>
                    </div>
                </div>
            </div>
        </div>
    `;
}

/**
 * Tweet Content Controller
 * 
 * @export
 * @class TweetContentController
 */
export class TweetContentController {
    public static $inject: Array<string> = ["ContentModel"];

    /**
     * Creates an instance of TweetContentController.
     * 
     * @param {ContentModel} model
     * 
     * @memberOf TweetContentController
     */
    constructor(public model: ContentModel) {
    }
}