import { Address } from './address';
import * as utils from '../helpers/utils';
/**
 * Property model
 * This represents an entry/pojo of properties payload of http requests 
 */
export class Property {   
    /**
     * Address is an nested object of property 
     * @type {Address} - nested model
     * @public
     */
    address:Address;
    /**
     * Property type id
     * @type {number} 
     * @public
     */
    propertyTypeId:number;
    /**
     * Ready State
     * @type {string} 
     * @public
     */
    readyState:string;
    /**
     * Reference
     * @type {string} 
     * @public
     */
    reference:string;
    /**
     * Short Id
     * @type {string} 
     * @public
     */
    shortId:string;
    /**
     * status
     * @type {number} 
     * @public
     */
    status:number;
    /**
     * type
     * @type {string} 
     * @public
     */
    type:string;
    /**
     * valfirm
     * @type {any} 
     * @public
     */
    valfirm:any;
    /**
     * workflow
     * @type {string} 
     * @public
     */
    workflow:string;

   /**
   * creates a instance of Property from raw json
   * @param {any} json - raw property entry in the request's payload
   */
   constructor(json:any) {
       let jsonUtils = new utils.JSONUtils();
       this.address = new Address(jsonUtils.getKeyValue(json, 'address', {}));
       this.propertyTypeId = jsonUtils.getKeyValue(json, 'propertyTypeId', 0);
       this.readyState = jsonUtils.getKeyValue(json, 'readyState', '');
       this.reference = jsonUtils.getKeyValue(json, 'reference', '');
       this.shortId = jsonUtils.getKeyValue(json, 'shortId', '');
       this.status = jsonUtils.getKeyValue(json, 'status', 0);
       this.type = jsonUtils.getKeyValue(json, 'type', '');
       this.valfirm = jsonUtils.getKeyValue(json, 'valfirm', '');
       this.workflow = jsonUtils.getKeyValue(json, 'workflow', '');       
   }  

   /**
   * helper method which helps to filter the 'completed' workflow and 'htv' type combinations
   */
   isHtvNCompleted() {
      return (this.workflow === 'completed' && this.type === 'htv');
   }
   
   /**
   * helper method which returns the compact version of property model which is used in http responses
   */
   compactVersion() {
      return {
         concataddress: this.address.concatedAddress(),
         type: this.type,
         workflow: this.workflow
     };
   }
 }