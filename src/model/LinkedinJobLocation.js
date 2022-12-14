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
import JobLocation from './JobLocation';

/**
 * The LinkedinJobLocation model module.
 * @module model/LinkedinJobLocation
 * @version 1.0.0
 */
class LinkedinJobLocation {
    /**
     * Constructs a new <code>LinkedinJobLocation</code>.
     * @alias module:model/LinkedinJobLocation
     * @implements module:model/JobLocation
     */
    constructor() { 
        JobLocation.initialize(this);
        LinkedinJobLocation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LinkedinJobLocation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LinkedinJobLocation} obj Optional instance to populate.
     * @return {module:model/LinkedinJobLocation} The populated <code>LinkedinJobLocation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LinkedinJobLocation();
            JobLocation.constructFromObject(data, obj);

            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('postal_code')) {
                obj['postal_code'] = ApiClient.convertToType(data['postal_code'], 'String');
            }
            if (data.hasOwnProperty('latitude')) {
                obj['latitude'] = ApiClient.convertToType(data['latitude'], 'Number');
            }
            if (data.hasOwnProperty('longitude')) {
                obj['longitude'] = ApiClient.convertToType(data['longitude'], 'Number');
            }
            if (data.hasOwnProperty('street')) {
                obj['street'] = ApiClient.convertToType(data['street'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LinkedinJobLocation</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LinkedinJobLocation</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['country'] && !(typeof data['country'] === 'string' || data['country'] instanceof String)) {
            throw new Error("Expected the field `country` to be a primitive type in the JSON string but got " + data['country']);
        }
        // ensure the json data is a string
        if (data['region'] && !(typeof data['region'] === 'string' || data['region'] instanceof String)) {
            throw new Error("Expected the field `region` to be a primitive type in the JSON string but got " + data['region']);
        }
        // ensure the json data is a string
        if (data['city'] && !(typeof data['city'] === 'string' || data['city'] instanceof String)) {
            throw new Error("Expected the field `city` to be a primitive type in the JSON string but got " + data['city']);
        }
        // ensure the json data is a string
        if (data['postal_code'] && !(typeof data['postal_code'] === 'string' || data['postal_code'] instanceof String)) {
            throw new Error("Expected the field `postal_code` to be a primitive type in the JSON string but got " + data['postal_code']);
        }
        // ensure the json data is a string
        if (data['street'] && !(typeof data['street'] === 'string' || data['street'] instanceof String)) {
            throw new Error("Expected the field `street` to be a primitive type in the JSON string but got " + data['street']);
        }

        return true;
    }


}



/**
 * @member {String} country
 */
LinkedinJobLocation.prototype['country'] = undefined;

/**
 * @member {String} region
 */
LinkedinJobLocation.prototype['region'] = undefined;

/**
 * @member {String} city
 */
LinkedinJobLocation.prototype['city'] = undefined;

/**
 * @member {String} postal_code
 */
LinkedinJobLocation.prototype['postal_code'] = undefined;

/**
 * @member {Number} latitude
 */
LinkedinJobLocation.prototype['latitude'] = undefined;

/**
 * @member {Number} longitude
 */
LinkedinJobLocation.prototype['longitude'] = undefined;

/**
 * @member {String} street
 */
LinkedinJobLocation.prototype['street'] = undefined;


// Implement JobLocation interface:
/**
 * @member {String} country
 */
JobLocation.prototype['country'] = undefined;
/**
 * @member {String} region
 */
JobLocation.prototype['region'] = undefined;
/**
 * @member {String} city
 */
JobLocation.prototype['city'] = undefined;
/**
 * @member {String} postal_code
 */
JobLocation.prototype['postal_code'] = undefined;
/**
 * @member {Number} latitude
 */
JobLocation.prototype['latitude'] = undefined;
/**
 * @member {Number} longitude
 */
JobLocation.prototype['longitude'] = undefined;
/**
 * @member {String} street
 */
JobLocation.prototype['street'] = undefined;




export default LinkedinJobLocation;

