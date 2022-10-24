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
import AcquiredCompany from './AcquiredCompany';
import Acquisition from './Acquisition';
import AcquisitionAcquiredBy from './AcquisitionAcquiredBy';

/**
 * The LinkedinCompanyAcquisitions model module.
 * @module model/LinkedinCompanyAcquisitions
 * @version 1.0.0
 */
class LinkedinCompanyAcquisitions {
    /**
     * Constructs a new <code>LinkedinCompanyAcquisitions</code>.
     * @alias module:model/LinkedinCompanyAcquisitions
     * @implements module:model/Acquisition
     */
    constructor() { 
        Acquisition.initialize(this);
        LinkedinCompanyAcquisitions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LinkedinCompanyAcquisitions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LinkedinCompanyAcquisitions} obj Optional instance to populate.
     * @return {module:model/LinkedinCompanyAcquisitions} The populated <code>LinkedinCompanyAcquisitions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LinkedinCompanyAcquisitions();
            Acquisition.constructFromObject(data, obj);

            if (data.hasOwnProperty('acquired')) {
                obj['acquired'] = ApiClient.convertToType(data['acquired'], [AcquiredCompany]);
            }
            if (data.hasOwnProperty('acquired_by')) {
                obj['acquired_by'] = AcquisitionAcquiredBy.constructFromObject(data['acquired_by']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LinkedinCompanyAcquisitions</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LinkedinCompanyAcquisitions</code>.
     */
    static validateJSON(data) {
        if (data['acquired']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['acquired'])) {
                throw new Error("Expected the field `acquired` to be an array in the JSON data but got " + data['acquired']);
            }
            // validate the optional field `acquired` (array)
            for (const item of data['acquired']) {
                AcquiredCompany.validateJsonObject(item);
            };
        }
        // validate the optional field `acquired_by`
        if (data['acquired_by']) { // data not null
          AcquisitionAcquiredBy.validateJSON(data['acquired_by']);
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/AcquiredCompany>} acquired
 */
LinkedinCompanyAcquisitions.prototype['acquired'] = undefined;

/**
 * @member {module:model/AcquisitionAcquiredBy} acquired_by
 */
LinkedinCompanyAcquisitions.prototype['acquired_by'] = undefined;


// Implement Acquisition interface:
/**
 * @member {Array.<module:model/AcquiredCompany>} acquired
 */
Acquisition.prototype['acquired'] = undefined;
/**
 * @member {module:model/AcquisitionAcquiredBy} acquired_by
 */
Acquisition.prototype['acquired_by'] = undefined;




export default LinkedinCompanyAcquisitions;

