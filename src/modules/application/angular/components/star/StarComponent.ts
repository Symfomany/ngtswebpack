
/**
 * Star Component
 * 
 * @export
 * @class StarComponent
 * @implements {ng.IComponentOptions}
 */
export class StarComponent implements ng.IComponentOptions {
    public bindings: any = {
        starred: "="
    };
    public controller: Function = StarController;
    public template: string =
    `<i class="fa fa-star fa-2x"
            ng-class="{'starred': $ctrl.starred}"
            ng-click="$ctrl.toggle()"></i>`;
}

/**
 * Star Controller
 * @export
 * @class StarController
 */
export class StarController {
    public starred: boolean;

    public toggle(): void {
        this.starred = !this.starred;
    }
}