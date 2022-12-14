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
import TestScoreDateOn from './TestScoreDateOn';

/**
 * The TestScore model module.
 * @module model/TestScore
 * @version 1.0.0
 */
class TestScore {
    /**
     * Constructs a new <code>TestScore</code>.
     * @alias module:model/TestScore
     */
    constructor() { 
        
        TestScore.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TestScore</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestScore} obj Optional instance to populate.
     * @return {module:model/TestScore} The populated <code>TestScore</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TestScore();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('score')) {
                obj['score'] = ApiClient.convertToType(data['score'], 'String');
            }
            if (data.hasOwnProperty('date_on')) {
                obj['date_on'] = TestScoreDateOn.constructFromObject(data['date_on']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TestScore</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestScore</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['score'] && !(typeof data['score'] === 'string' || data['score'] instanceof String)) {
            throw new Error("Expected the field `score` to be a primitive type in the JSON string but got " + data['score']);
        }
        // validate the optional field `date_on`
        if (data['date_on']) { // data not null
          TestScoreDateOn.validateJSON(data['date_on']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }

        return true;
    }


}



/**
 * Title of the course for which test score was derived from.
 * @member {String} name
 */
TestScore.prototype['name'] = undefined;

/**
 * Test score
 * @member {String} score
 */
TestScore.prototype['score'] = undefined;

/**
 * @member {module:model/TestScoreDateOn} date_on
 */
TestScore.prototype['date_on'] = undefined;

/**
 * Description of the test score.
 * @member {String} description
 */
TestScore.prototype['description'] = undefined;






export default TestScore;

