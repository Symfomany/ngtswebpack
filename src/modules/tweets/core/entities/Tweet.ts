/**
 * Tweet Model
 * @export
 * @class Tweet
 */
export class Tweet {

    /**
     * Creates an instance of Tweet.
     * 
     * @param {string} user
     * @param {string} content
     * @param {Boolean} starred
     * 
     * @memberOf Tweet
     */
    constructor(public user: string, public content: string, public starred: Boolean) {
    }
}