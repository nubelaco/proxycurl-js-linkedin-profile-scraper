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
import FundingAnnouncedDate from './FundingAnnouncedDate';
import Investor from './Investor';

/**
 * The Funding model module.
 * @module model/Funding
 * @version 1.0.0
 */
class Funding {
    /**
     * Constructs a new <code>Funding</code>.
     * @alias module:model/Funding
     */
    constructor() { 
        
        Funding.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Funding</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Funding} obj Optional instance to populate.
     * @return {module:model/Funding} The populated <code>Funding</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Funding();

            if (data.hasOwnProperty('funding_type')) {
                obj['funding_type'] = ApiClient.convertToType(data['funding_type'], 'String');
            }
            if (data.hasOwnProperty('money_raised')) {
                obj['money_raised'] = ApiClient.convertToType(data['money_raised'], 'Number');
            }
            if (data.hasOwnProperty('announced_date')) {
                obj['announced_date'] = FundingAnnouncedDate.constructFromObject(data['announced_date']);
            }
            if (data.hasOwnProperty('number_of_investor')) {
                obj['number_of_investor'] = ApiClient.convertToType(data['number_of_investor'], 'Number');
            }
            if (data.hasOwnProperty('investor_list')) {
                obj['investor_list'] = ApiClient.convertToType(data['investor_list'], [Investor]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Funding</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Funding</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['funding_type'] && !(typeof data['funding_type'] === 'string' || data['funding_type'] instanceof String)) {
            throw new Error("Expected the field `funding_type` to be a primitive type in the JSON string but got " + data['funding_type']);
        }
        // validate the optional field `announced_date`
        if (data['announced_date']) { // data not null
          FundingAnnouncedDate.validateJSON(data['announced_date']);
        }
        if (data['investor_list']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['investor_list'])) {
                throw new Error("Expected the field `investor_list` to be an array in the JSON data but got " + data['investor_list']);
            }
            // validate the optional field `investor_list` (array)
            for (const item of data['investor_list']) {
                Investor.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * Type of funding
 * @member {String} funding_type
 */
Funding.prototype['funding_type'] = undefined;

/**
 * Amount of money raised
 * @member {Number} money_raised
 */
Funding.prototype['money_raised'] = undefined;

/**
 * @member {module:model/FundingAnnouncedDate} announced_date
 */
Funding.prototype['announced_date'] = undefined;

/**
 * Number of investors in this round
 * @member {Number} number_of_investor
 */
Funding.prototype['number_of_investor'] = undefined;

/**
 * @member {Array.<module:model/Investor>} investor_list
 */
Funding.prototype['investor_list'] = undefined;






export default Funding;

