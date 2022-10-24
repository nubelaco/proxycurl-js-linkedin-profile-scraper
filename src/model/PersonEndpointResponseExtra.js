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
import PersonExtra from './PersonExtra';

/**
 * The PersonEndpointResponseExtra model module.
 * @module model/PersonEndpointResponseExtra
 * @version 1.0.0
 */
class PersonEndpointResponseExtra {
    /**
     * Constructs a new <code>PersonEndpointResponseExtra</code>.
     * A bundle of extra data on this user.
     * @alias module:model/PersonEndpointResponseExtra
     * @implements module:model/PersonExtra
     */
    constructor() { 
        PersonExtra.initialize(this);
        PersonEndpointResponseExtra.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PersonEndpointResponseExtra</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PersonEndpointResponseExtra} obj Optional instance to populate.
     * @return {module:model/PersonEndpointResponseExtra} The populated <code>PersonEndpointResponseExtra</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PersonEndpointResponseExtra();
            PersonExtra.constructFromObject(data, obj);

            if (data.hasOwnProperty('github_profile_id')) {
                obj['github_profile_id'] = ApiClient.convertToType(data['github_profile_id'], 'String');
            }
            if (data.hasOwnProperty('facebook_profile_id')) {
                obj['facebook_profile_id'] = ApiClient.convertToType(data['facebook_profile_id'], 'String');
            }
            if (data.hasOwnProperty('twitter_profile_id')) {
                obj['twitter_profile_id'] = ApiClient.convertToType(data['twitter_profile_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PersonEndpointResponseExtra</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PersonEndpointResponseExtra</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['github_profile_id'] && !(typeof data['github_profile_id'] === 'string' || data['github_profile_id'] instanceof String)) {
            throw new Error("Expected the field `github_profile_id` to be a primitive type in the JSON string but got " + data['github_profile_id']);
        }
        // ensure the json data is a string
        if (data['facebook_profile_id'] && !(typeof data['facebook_profile_id'] === 'string' || data['facebook_profile_id'] instanceof String)) {
            throw new Error("Expected the field `facebook_profile_id` to be a primitive type in the JSON string but got " + data['facebook_profile_id']);
        }
        // ensure the json data is a string
        if (data['twitter_profile_id'] && !(typeof data['twitter_profile_id'] === 'string' || data['twitter_profile_id'] instanceof String)) {
            throw new Error("Expected the field `twitter_profile_id` to be a primitive type in the JSON string but got " + data['twitter_profile_id']);
        }

        return true;
    }


}



/**
 * This profile's Github account.
 * @member {String} github_profile_id
 */
PersonEndpointResponseExtra.prototype['github_profile_id'] = undefined;

/**
 * This profile's Facebook account.
 * @member {String} facebook_profile_id
 */
PersonEndpointResponseExtra.prototype['facebook_profile_id'] = undefined;

/**
 * This profile's twitter account.
 * @member {String} twitter_profile_id
 */
PersonEndpointResponseExtra.prototype['twitter_profile_id'] = undefined;


// Implement PersonExtra interface:
/**
 * This profile's Github account.
 * @member {String} github_profile_id
 */
PersonExtra.prototype['github_profile_id'] = undefined;
/**
 * This profile's Facebook account.
 * @member {String} facebook_profile_id
 */
PersonExtra.prototype['facebook_profile_id'] = undefined;
/**
 * This profile's twitter account.
 * @member {String} twitter_profile_id
 */
PersonExtra.prototype['twitter_profile_id'] = undefined;




export default PersonEndpointResponseExtra;

