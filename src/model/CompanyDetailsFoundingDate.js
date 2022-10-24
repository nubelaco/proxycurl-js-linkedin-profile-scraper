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
import ModelDate from './ModelDate';

/**
 * The CompanyDetailsFoundingDate model module.
 * @module model/CompanyDetailsFoundingDate
 * @version 1.0.0
 */
class CompanyDetailsFoundingDate {
    /**
     * Constructs a new <code>CompanyDetailsFoundingDate</code>.
     * Date of founding
     * @alias module:model/CompanyDetailsFoundingDate
     * @implements module:model/ModelDate
     */
    constructor() { 
        ModelDate.initialize(this);
        CompanyDetailsFoundingDate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CompanyDetailsFoundingDate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompanyDetailsFoundingDate} obj Optional instance to populate.
     * @return {module:model/CompanyDetailsFoundingDate} The populated <code>CompanyDetailsFoundingDate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CompanyDetailsFoundingDate();
            ModelDate.constructFromObject(data, obj);

            if (data.hasOwnProperty('day')) {
                obj['day'] = ApiClient.convertToType(data['day'], 'Number');
            }
            if (data.hasOwnProperty('month')) {
                obj['month'] = ApiClient.convertToType(data['month'], 'Number');
            }
            if (data.hasOwnProperty('year')) {
                obj['year'] = ApiClient.convertToType(data['year'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CompanyDetailsFoundingDate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CompanyDetailsFoundingDate</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Number} day
 */
CompanyDetailsFoundingDate.prototype['day'] = undefined;

/**
 * @member {Number} month
 */
CompanyDetailsFoundingDate.prototype['month'] = undefined;

/**
 * @member {Number} year
 */
CompanyDetailsFoundingDate.prototype['year'] = undefined;


// Implement ModelDate interface:
/**
 * @member {Number} day
 */
ModelDate.prototype['day'] = undefined;
/**
 * @member {Number} month
 */
ModelDate.prototype['month'] = undefined;
/**
 * @member {Number} year
 */
ModelDate.prototype['year'] = undefined;




export default CompanyDetailsFoundingDate;

