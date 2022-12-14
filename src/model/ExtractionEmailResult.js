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

/**
 * The ExtractionEmailResult model module.
 * @module model/ExtractionEmailResult
 * @version 1.0.0
 */
class ExtractionEmailResult {
    /**
     * Constructs a new <code>ExtractionEmailResult</code>.
     * @alias module:model/ExtractionEmailResult
     */
    constructor() { 
        
        ExtractionEmailResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExtractionEmailResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExtractionEmailResult} obj Optional instance to populate.
     * @return {module:model/ExtractionEmailResult} The populated <code>ExtractionEmailResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExtractionEmailResult();

            if (data.hasOwnProperty('email_queue_count')) {
                obj['email_queue_count'] = ApiClient.convertToType(data['email_queue_count'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExtractionEmailResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExtractionEmailResult</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Total queue in the email extraction process
 * @member {Number} email_queue_count
 */
ExtractionEmailResult.prototype['email_queue_count'] = undefined;






export default ExtractionEmailResult;

