import * as utils from '../helpers/utils';

/**
 * Property model
 * This represents an entry/pojo of nested address object of properties payload of http requests 
 */
export class Address { 
    /**
     * Building Number
     * @type {string} 
     * @public
     */
    buildingNumber:string;
    /**
     * Unit Number
     * @type {string} 
     * @public
     */
    unitNumber:string;
    /**
     * latitude
     * @type {number} 
     * @public
     */
    lat:number;
    /**
     * longitude
     * @type {number} 
     * @public
     */
    lon:number;
    /**
     * Postcode
     * @type {number} 
     * @public
     */
    postcode:number;
    /**
     * State
     * @type {string} 
     * @public
     */
    state:string;
    /**
     * Street
     * @type {string} 
     * @public
     */
    street:string;
    /**
     * suburb
     * @type {string} 
     * @public
     */
    suburb:string;

   /**
   * creates a instance of Address from raw json
   * @param {any} json - raw address entry in the request's properties payload
   */
   constructor(json:any) {
    let jsonUtils = new utils.JSONUtils();    
       this.buildingNumber = jsonUtils.getKeyValue(json, 'buildingNumber', '');
       this.unitNumber = jsonUtils.getKeyValue(json, 'unitNumber', '');
       this.lat = jsonUtils.getKeyValue(json, 'lat', 0);
       this.lon = jsonUtils.getKeyValue(json, 'lon', 0);
       this.state = jsonUtils.getKeyValue(json, 'state', '');
       this.street = jsonUtils.getKeyValue(json, 'street', '');
       this.suburb = jsonUtils.getKeyValue(json, 'suburb', '');
   }

   /**
   * helper method which returns the concated address from the required individual address fields
   */
   concatedAddress() {
      let formattedAddress = ``;
      if(this.unitNumber) formattedAddress += `${this.unitNumber}`;
      if(this.buildingNumber) formattedAddress += ` ${this.buildingNumber}`;
      if(this.street) formattedAddress += ` ${this.street}`;
      if(this.suburb) formattedAddress += ` ${this.suburb}`;
      if(this.state) formattedAddress += ` ${this.state}`;
      if(this.postcode) formattedAddress += ` ${this.postcode}`;
      return formattedAddress.trim();
   }
}