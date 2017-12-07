/**
 * Utils module
 */
module Utils {
    /**
     * JSONUtils class in Utils module which served utility functions against json data
     */
    export class JSONUtils {
        object:any;
        constructor() {            
        }        
        /**
         * Returns the value of a key in the json object, if not returns the specified default value
         * @param {any} json - input json object
         * @param {string} key - expected key in the json object
         * @return {any} defaultValue - default value to be served if key not found
         */
        getKeyValue = (json:any, key:string, defaultValue:any) => {
            if (typeof json[key] !== 'undefined' && json[key] && json.hasOwnProperty(key)) {
               return json[key];
            }
            return defaultValue || null;
         };
    }
}

export = Utils;