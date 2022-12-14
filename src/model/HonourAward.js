/**
 * Proxycurl API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import HonourAwardIssuedOn from './HonourAwardIssuedOn';

/**
 * The HonourAward model module.
 * @module model/HonourAward
 * @version 1.0.0
 */
class HonourAward {
    /**
     * Constructs a new <code>HonourAward</code>.
     * @alias module:model/HonourAward
     */
    constructor() { 
        
        HonourAward.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HonourAward</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HonourAward} obj Optional instance to populate.
     * @return {module:model/HonourAward} The populated <code>HonourAward</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HonourAward();

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('issuer')) {
                obj['issuer'] = ApiClient.convertToType(data['issuer'], 'String');
            }
            if (data.hasOwnProperty('issued_on')) {
                obj['issued_on'] = HonourAwardIssuedOn.constructFromObject(data['issued_on']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>HonourAward</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>HonourAward</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['issuer'] && !(typeof data['issuer'] === 'string' || data['issuer'] instanceof String)) {
            throw new Error("Expected the field `issuer` to be a primitive type in the JSON string but got " + data['issuer']);
        }
        // validate the optional field `issued_on`
        if (data['issued_on']) { // data not null
          HonourAwardIssuedOn.validateJSON(data['issued_on']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }

        return true;
    }


}



/**
 * Title of the honour/award.
 * @member {String} title
 */
HonourAward.prototype['title'] = undefined;

/**
 * The organisation body issuing this honour/award.
 * @member {String} issuer
 */
HonourAward.prototype['issuer'] = undefined;

/**
 * @member {module:model/HonourAwardIssuedOn} issued_on
 */
HonourAward.prototype['issued_on'] = undefined;

/**
 * Description of the honour/award.
 * @member {String} description
 */
HonourAward.prototype['description'] = undefined;






export default HonourAward;

