config.$inject = ["$routeProvider"];


/**
 * Register a route by Component
 * 
 * @export
 * @param {ng.route.IRouteProvider} $routeProvider
 */
export function config($routeProvider: ng.route.IRouteProvider): void {

    $routeProvider.when("/tchat", {
        template: "<tchat></tchat>" //use component tchat
    });
}