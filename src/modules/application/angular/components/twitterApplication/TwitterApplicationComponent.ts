
/**
 * Twiiter App Component
 * 
 * @export
 * @class TwitterApplicationComponent
 * @implements {ng.IComponentOptions}
 */
export class TwitterApplicationComponent implements ng.IComponentOptions {

    /**
     * All Menu Links
     * @type {string}
     * @memberOf TwitterApplicationComponent
     */
    public template: string = `
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Naviguation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#/">Demo App</a>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <li><a href="#/" title="Tweets">Les Tweets</a></li>
                        <li><a href="#/about" title="About">A propos</a></li>
                        <li><a href="#/tchat" title="tchat">Tchat</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div ng-view></div>`;
}