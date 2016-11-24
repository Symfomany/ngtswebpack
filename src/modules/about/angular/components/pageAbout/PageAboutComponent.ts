/**
 * Page Component
 * 
 * @export
 * @class PageAboutComponent
 * @implements {ng.IComponentOptions}
 */
export class PageAboutComponent implements ng.IComponentOptions {
    public template: string = `
    <div class="container-fluid">
        <h1><i class="fa fa-info-circle"></i>&nbsp;About</h1>
        Architecture proposé par  <a href="https://github.com/Symfomany">Symfomany</a>
        <ul>
            <li>Typescript</li>
            <li>Webpack</li>
            <li>SASS/Bower/Gulp</li>
            <li>Angular 1.5.6 & Components</li>
        </ul>
    </div>`;
}