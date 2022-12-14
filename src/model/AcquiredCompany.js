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
import AcquiredCompanyAnnouncedDate from './AcquiredCompanyAnnouncedDate';

/**
 * The AcquiredCompany model module.
 * @module model/AcquiredCompany
 * @version 1.0.0
 */
class AcquiredCompany {
    /**
     * Constructs a new <code>AcquiredCompany</code>.
     * @alias module:model/AcquiredCompany
     */
    constructor() { 
        
        AcquiredCompany.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AcquiredCompany</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AcquiredCompany} obj Optional instance to populate.
     * @return {module:model/AcquiredCompany} The populated <code>AcquiredCompany</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AcquiredCompany();

            if (data.hasOwnProperty('linkedin_profile_url')) {
                obj['linkedin_profile_url'] = ApiClient.convertToType(data['linkedin_profile_url'], 'String');
            }
            if (data.hasOwnProperty('crunchbase_profile_url')) {
                obj['crunchbase_profile_url'] = ApiClient.convertToType(data['crunchbase_profile_url'], 'String');
            }
            if (data.hasOwnProperty('announced_date')) {
                obj['announced_date'] = AcquiredCompanyAnnouncedDate.constructFromObject(data['announced_date']);
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AcquiredCompany</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AcquiredCompany</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['linkedin_profile_url'] && !(typeof data['linkedin_profile_url'] === 'string' || data['linkedin_profile_url'] instanceof String)) {
            throw new Error("Expected the field `linkedin_profile_url` to be a primitive type in the JSON string but got " + data['linkedin_profile_url']);
        }
        // ensure the json data is a string
        if (data['crunchbase_profile_url'] && !(typeof data['crunchbase_profile_url'] === 'string' || data['crunchbase_profile_url'] instanceof String)) {
            throw new Error("Expected the field `crunchbase_profile_url` to be a primitive type in the JSON string but got " + data['crunchbase_profile_url']);
        }
        // validate the optional field `announced_date`
        if (data['announced_date']) { // data not null
          AcquiredCompanyAnnouncedDate.validateJSON(data['announced_date']);
        }

        return true;
    }


}



/**
 * LinkedIn Company Profile URL of company that was involved
 * @member {String} linkedin_profile_url
 */
AcquiredCompany.prototype['linkedin_profile_url'] = undefined;

/**
 * Crunchbase Profile URL of company that was involved
 * @member {String} crunchbase_profile_url
 */
AcquiredCompany.prototype['crunchbase_profile_url'] = undefined;

/**
 * @member {module:model/AcquiredCompanyAnnouncedDate} announced_date
 */
AcquiredCompany.prototype['announced_date'] = undefined;

/**
 * Price of acquisition
 * @member {Number} price
 */
AcquiredCompany.prototype['price'] = undefined;






export default AcquiredCompany;

