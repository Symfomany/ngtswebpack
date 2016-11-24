config.$inject = ["$routeProvider"];

/**
 * Register a route by Component
 * 
 * @export
 * @param {ng.route.IRouteProvider} $routeProvider
 */
export function config($routeProvider: ng.route.IRouteProvider): void {
    $routeProvider.when("/about", {
        template: "<page-about></page-about>"
    });
}