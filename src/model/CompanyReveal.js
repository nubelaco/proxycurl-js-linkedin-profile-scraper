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
import CompanyRevealCompany from './CompanyRevealCompany';
import CompanyRevealRoleProfile from './CompanyRevealRoleProfile';

/**
 * The CompanyReveal model module.
 * @module model/CompanyReveal
 * @version 1.0.0
 */
class CompanyReveal {
    /**
     * Constructs a new <code>CompanyReveal</code>.
     * @alias module:model/CompanyReveal
     */
    constructor() { 
        
        CompanyReveal.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CompanyReveal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompanyReveal} obj Optional instance to populate.
     * @return {module:model/CompanyReveal} The populated <code>CompanyReveal</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CompanyReveal();

            if (data.hasOwnProperty('company')) {
                obj['company'] = CompanyRevealCompany.constructFromObject(data['company']);
            }
            if (data.hasOwnProperty('company_linkedin_profile_url')) {
                obj['company_linkedin_profile_url'] = ApiClient.convertToType(data['company_linkedin_profile_url'], 'String');
            }
            if (data.hasOwnProperty('role_contact_number')) {
                obj['role_contact_number'] = ApiClient.convertToType(data['role_contact_number'], ['String']);
            }
            if (data.hasOwnProperty('role_personal_email')) {
                obj['role_personal_email'] = ApiClient.convertToType(data['role_personal_email'], ['String']);
            }
            if (data.hasOwnProperty('role_profile')) {
                obj['role_profile'] = CompanyRevealRoleProfile.constructFromObject(data['role_profile']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CompanyReveal</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CompanyReveal</code>.
     */
    static validateJSON(data) {
        // validate the optional field `company`
        if (data['company']) { // data not null
          CompanyRevealCompany.validateJSON(data['company']);
        }
        // ensure the json data is a string
        if (data['company_linkedin_profile_url'] && !(typeof data['company_linkedin_profile_url'] === 'string' || data['company_linkedin_profile_url'] instanceof String)) {
            throw new Error("Expected the field `company_linkedin_profile_url` to be a primitive type in the JSON string but got " + data['company_linkedin_profile_url']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['role_contact_number'])) {
            throw new Error("Expected the field `role_contact_number` to be an array in the JSON data but got " + data['role_contact_number']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['role_personal_email'])) {
            throw new Error("Expected the field `role_personal_email` to be an array in the JSON data but got " + data['role_personal_email']);
        }
        // validate the optional field `role_profile`
        if (data['role_profile']) { // data not null
          CompanyRevealRoleProfile.validateJSON(data['role_profile']);
        }

        return true;
    }


}



/**
 * @member {module:model/CompanyRevealCompany} company
 */
CompanyReveal.prototype['company'] = undefined;

/**
 * LinkedIn Profile URL of the Company returned.
 * @member {String} company_linkedin_profile_url
 */
CompanyReveal.prototype['company_linkedin_profile_url'] = undefined;

/**
 * A list of personal contact numbers.
 * @member {Array.<String>} role_contact_number
 */
CompanyReveal.prototype['role_contact_number'] = undefined;

/**
 * A list of personal email addresses.
 * @member {Array.<String>} role_personal_email
 */
CompanyReveal.prototype['role_personal_email'] = undefined;

/**
 * @member {module:model/CompanyRevealRoleProfile} role_profile
 */
CompanyReveal.prototype['role_profile'] = undefined;






export default CompanyReveal;

