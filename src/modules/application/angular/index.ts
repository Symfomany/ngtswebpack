import "angular";

import { StarComponent } from "./components/star/StarComponent";
import { TwitterApplicationComponent } from "./components/twitterApplication/TwitterApplicationComponent";

/**
 * Register Components behind app.application module
 */
angular.module("app.application", [])
    .component("twitterApplication", new TwitterApplicationComponent())
    .component("star", new StarComponent());