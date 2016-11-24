
/**
 * Tchat Component
 * 
 * @export
 * @class TchatComponent
 * @implements {ng.IComponentOptions}
 */
export class TchatComponent implements ng.IComponentOptions {
    public controller: Function = TchatController;
    public template: string = `
    <div class="container-fluid">
        <h3><i class="fa fa-comments"></i>&nbsp;Tchat</h3>
        <a ng-click="$ctrl.toggle()">Cachez-moi</a>
        <div  ng-show="$ctrl.hide" class="alert alert-info">
            <p><i>Pas de grossiereté, de propos homophobe, raciste etc...</i></p>
        </div>
    </div>`;
}


/**
 * Tchat Controller
 * @export
 * @class TchatController
 */
export class TchatController {
    public hide: Boolean = true;
    public toggle(): void {
        this.hide = !this.hide;

    }
}