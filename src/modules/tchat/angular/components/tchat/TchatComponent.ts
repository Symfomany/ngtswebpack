
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

        <h1 class="title">Material Design Chat</h1>
            <div class="wrapper">
            <nav id="nav" class="nav">
                <div class="default-nav">
                <div class="main-nav">
                    <div class="toggle"></div>
                    <div class="main-nav-item"><a href="#" class="main-nav-item-link">Blake</a></div>
                    <div class="options"></div>
                </div>
                </div>
            </nav>
            <div id="inner" class="inner">
                <div id="content" class="content"></div>
            </div>
            <div id="bottom" class="bottom">
                <textarea id="input" class="input"></textarea>
                <div id="send" class="send"></div>
            </div>
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
    public messageList: Array<T>;
    public deletedList: Array<T>;
    public me: 1;
    public them: 5;
    public onRecieve: any;
    public onSend: any;
    public onDelete: any;

    /**
     * Creates an instance of TchatController.
     * @memberOf TchatController
     */
    constructor() {

        this.messageList = [];
        this.deletedList = [];

        this.me = 1; // completely arbitrary id
        this.them = 5; // and another one

        this.onRecieve = (message) => console.log('Recieved: ' + message.text);
        this.onSend = (message) => console.log('Sent: ' + message.text);
        this.onDelete = (message) => console.log('Deleted: ' + message.text);
    }

    /**
     * @memberOf TchatController
     */
    public toggle(): void {
        this.hide = !this.hide;
    }

    /**
     * @param {string} [text='']
     * @memberOf TchatController
     */
    public send(text = '') {
        text = this.filter(text);

        if (this.validate(text)) {
            let message = {
                user: this.me,
                text: text,
                time: new Date().getTime()
            };

            this.messageList.push(message);

            this.onSend(message);
        }
    }

    /**
     * @param {string} [text='']
     * @memberOf TchatController
     */
    public recieve(text = '') {
        text = this.filter(text);

        if (this.validate(text)) {
            let message = {
                user: this.them,
                text: text,
                time: new Date().getTime()
            };

            this.messageList.push(message);

            this.onRecieve(message);
        }
    }

    /**
     * @param {any} index
     * @memberOf TchatController
     */
    delete(index) {
        index = index || (this.messageLength - 1);

        let deleted = this.messageLength.pop();

        this.deletedList.push(deleted);
        this.onDelete(deleted);
    }

    /**
     * @param {any} input
     * @returns
     * 
     * @memberOf TchatController
     */
    filter(input) {
        let output = input.replace('bad input', 'good output'); // such amazing filter there right?
        return output;
    }

    /**
     * @param {any} input
     * @returns
     * @memberOf TchatController
     */
    validate(input) {
        return !!input.length; // an amazing example of validation I swear.
    }
}