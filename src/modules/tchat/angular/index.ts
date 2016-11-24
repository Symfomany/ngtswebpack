import "angular";
import "angular-route";
import { TchatComponent } from "./components/tchat/TchatComponent";
import { config as routesConfig } from "./configs/routes";



/**
 * Configuration Angular with Configuration in app.tchat module app.tchat
 * Each Component has only route
 */
angular.module("app.tchat", ["ngRoute"])
    .component("tchat", new TchatComponent())
    .config(routesConfig);

