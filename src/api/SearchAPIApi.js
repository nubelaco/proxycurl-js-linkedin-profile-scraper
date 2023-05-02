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


import ApiClient from "../ApiClient";
import CompanySearch from "../model/CompanySearch";
import PersonSearch from "../model/PersonSearch";

/**
* SchoolAPI service.
* @module api/SearchAPIApi
* @version 1.0.0
*/
export default class SearchAPIApi {

  /**
  * Constructs a new SearchAPIApi.
  * @alias module:api/SearchAPIApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }


  /**
   * Callback function to receive the result of the personSearchEndpoint operation.
   * @callback module:api/SearchAPIApi~personSearchEndpointCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PersonSearch} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Cost: 35 credit / successful request base charge + 10 credits / result returned.
   * (Extra charges might be incurred if premium optional parameters are used. Please read the description of the parameters that you intend to use).
   * Base charge does not apply when using a `next_page` URL.
   * @param {Object} opts Optional parameters
   * @param {String} opts.firstName Filter people whose first names match the provided regular expression. 
   * 
   * The default value of this parameter is `null`. 
   * 
   * The accepted value for this parameter is a regular expression which is **case sensitive** by default and accepts an `(?i)` flag.
   * @param {String} opts.lastName Filter people whose last names match the provided regular expression. 
   * 
   * The default value of this parameter is `null`. 
   * 
   * The accepted value for this parameter is a regular expression which is **case sensitive** by default and accepts an `(?i)` flag.
   * @param {String} opts.educationFieldOfStudy Filter people with a field of study matching the provided regular expression, based on education history. 
   * 
   * The default value of this parameter is `null`. 
   * 
   * The accepted value for this parameter is a regular expression which is **case sensitive** by default and accepts an `(?i)` flag.
   * @param {String} opts.educationDegreeName Filter people who earned a degree matching the provided regular expression, based on education history. 
   * 
   * The default value of this parameter is `null`. 
   * 
   * The accepted value for this parameter is a regular expression which is **case sensitive** by default and accepts an `(?i)` flag.
   * @param {String} opts.educationSchoolName Filter people who have attended a school whose name matches the provided regular expression, based on education history. 
   * 
   * The default value of this parameter is `null`. 
   * 
   * The accepted value for this parameter is a regular expression which is **case sensitive** by default and accepts an `(?i)` flag.
   * @param {String} opts.educationSchoolLinkedinProfileUrl Filter people who have attended a school with a specific LinkedIn profile URL, based on education history. 
   * 
   * The default value of this parameter is `null`.
   * @param {String} opts.currentRoleTitle Filter people who are **currently** working as a role whose title matches the provided regular expression. 
   * 
   * The default value of this parameter is `null`. 
   * 
   * The accepted value for this parameter is a regular expression which is **case sensitive** by default and accepts an `(?i)` flag.
   * @param {String} opts.pastRoleTitle Filter people who have **in the past** worked as a role whose title matches the provided regular expression. 
   * 
   * The default value of this parameter is `null`. 
   * 
   * The accepted value for this parameter is a regular expression which is **case sensitive** by default and accepts an `(?i)` flag.
   * @param {String} opts.currentRoleAfter Filter people who started their current role **after** this date. 
   * 
   * This parameter takes a ISO8601 date. Default value of this parameter is `null`.
   * @param {String} opts.currentRoleBefore Filter people who started their current role **before** this date. 
   * 
   * This parameter takes a ISO8601 date. Default value of this parameter is `null`.
   * @param {String} opts.currentCompanyLinkedinProfileUrl Filter people who are **currently** working at the company represented by this LinkedIn Company Profile URL. 
   * 
   * The default value of this parameter is `null`.
   * @param {String} opts.pastCompanyLinkedinProfileUrl Filter people who have **in the past** worked at the company represented by this LinkedIn Company Profile URL. 
   * 
   * The default value of this parameter is `null`.
   * @param {String} opts.currentJobDescription Filter people with **current** job descriptions matching the provided regular expression. 
   * 
   * The default value of this parameter is `null`. 
   * 
   * The accepted value for this parameter is a regular expression which is **case sensitive** by default and accepts an `(?i)` flag.
   * @param {String} opts.pastJobDescription Filter people with **past** job descriptions matching the provided regular expression. 
   * 
   * The default value of this parameter is `null`. 
   * 
   * The accepted value for this parameter is a regular expression which is **case sensitive** by default and accepts an `(?i)` flag.
   * @param {String} opts.currentCompanyName Filter people who are **currently** working at a company whose name matches the provided regular expression. 
   * 
   * The default value of this parameter is `null`. 
   * 
   * The accepted value for this parameter is a regular expression which is **case sensitive** by default and accepts an `(?i)` flag.
   * @param {String} opts.pastCompanyName Filter people who have **in the past** worked at a company whose name matches the provided regular expression. 
   * 
   * The default value of this parameter is `null`. 
   * 
   * The accepted value for this parameter is a regular expression which is **case sensitive** by default and accepts an `(?i)` flag.
   * @param {String} opts.linkedinGroups Filter people who are members of LinkedIn groups whose names match the provided regular expression. 
   * 
   * The default value of this parameter is `null`. 
   * 
   * The accepted value for this parameter is a regular expression which is **case sensitive** by default and accepts an `(?i)` flag.
   * @param {String} opts.languages Filter people who list a language matching the provided regular expression. 
   * 
   * The default value of this parameter is `null`. 
   * 
   * The accepted value for this parameter is a regular expression which is **case sensitive** by default and accepts an `(?i)` flag.
   * @param {String} opts.country Filter people located in this country. 
   * 
   * The default value of this parameter is `null`. 
   * 
   * This parameter accepts a case-insensitive [Alpha-2 ISO3166 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). 
   * 
   * If you want to search for profiles worldwide then do not fill any values for this parameter.
   * @param {String} opts.region Filter people located in a region matching the provided regular expression. 
   * 
   * The default value of this parameter is `null`. 
   * 
   * The accepted value for this parameter is a regular expression which is **case sensitive** by default and accepts an `(?i)` flag.
   * @param {String} opts.city Filter people located in a city matching the provided regular expression. 
   * 
   * The default value of this parameter is `null`. 
   * 
   * The accepted value for this parameter is a regular expression which is **case sensitive** by default and accepts an `(?i)` flag.
   * @param {String} opts.headline Filter people whose LinkedIn headline fields match the provided regular expression. 
   * 
   * The default value of this parameter is `null`. 
   * 
   * The accepted value for this parameter is a regular expression which is **case sensitive** by default and accepts an `(?i)` flag.
   * @param {String} opts.summary Filter people whose LinkedIn summary fields match the provided regular expression. 
   * 
   * The default value of this parameter is `null`. 
   * 
   * The accepted value for this parameter is a regular expression which is **case sensitive** by default and accepts an `(?i)` flag.
   * @param {String} opts.pageSize Tune the maximum results returned per API call. 
   * 
   * The default value of this parameter is `100`. 
   * 
   * Accepted values for this parameter is an integer ranging from `1` to `100`.
   * @param {String} opts.enrichProfiles Get the person's complete profile data rather than just the URLs to their LinkedIn profiles. 
   * 
   * Each request respond with a streaming response of profiles. 
   * 
   * The valid values are: 
   * * `skip` (default): lists person's profile url only 
   * * `enrich`: include person's profile data in the list 
   * 
   * Calling this API endpoint with this parameter would add `1` credit per result returned.
   * @param {module:api/SearchAPIApi~personSearchEndpointCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PersonSearch}
   */
  personSearchEndpoint(opts, callback) {
    opts = opts || {};
    let postBody = null;

    let pathParams = {
    };
    let queryParams = {
      first_name: opts['firstName'],
      last_name: opts['lastName'],
      education_field_of_study: opts['educationFieldOfStudy'],
      education_degree_name: opts['educationDegreeName'],
      education_school_name: opts['educationSchoolName'],
      education_school_linkedin_profile_url: opts['educationSchoolLinkedinProfileUrl'],
      current_role_title: opts['currentRoleTitle'],
      past_role_title: opts['pastRoleTitle'],
      current_role_after: opts['currentRoleAfter'],
      current_role_before: opts['currentRoleBefore'],
      current_company_linkedin_profile_url: opts['currentCompanyLinkedinProfileUrl'],
      past_company_linkedin_profile_url: opts['pastCompanyLinkedinProfileUrl'],
      current_job_description: opts['currentJobDescription'],
      past_job_description: opts['pastJobDescription'],
      current_company_name: opts['currentCompanyName'],
      past_company_name: opts['pastCompanyName'],
      linkedin_groups: opts['linkedinGroups'],
      languages: opts['languages'],
      country: opts['country'],
      region: opts['region'],
      city: opts['city'],
      headline: opts['headline'],
      summary: opts['summary'],
      page_size: opts['pageSize'] || 100,
      enrich_profiles: opts['enrichProfiles'] || 'skip',
    };
    let headerParams = {
    };
    let formParams = {
    };

    let authNames = ['BearerAuth'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = PersonSearch;
    return this.apiClient.callApi(
      '/api/search/person', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null, callback
    );
  }

  /**
   * Callback function to receive the result of the companySearchEndpoint operation.
   * @callback module:api/SearchAPIApi~companySearchEndpointCallback
   * @param {String} error Error message, if any.
   * @param {module:model/CompanySearch} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Cost: 35 credit / successful request base charge + 10 credits / result returned.
   * (Extra charges might be incurred if premium optional parameters are used. Please read the description of the parameters that you intend to use).
   * Base charge does not apply when using a `next_page` URL.
   * @param {Object} opts Optional parameters
   * @param {String} opts.country Filter companies with an office based in this country.

    This parameter accepts a case-insensitive [Alpha-2 ISO3166 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
   * @param {String} opts.region Filter companies based in regions matching the provided regular expression.

    The accepted value for this parameter is a regular expression which is **case sensitive** by default and accepts an `(?i)` flag.
    The default value of this parameter is null.
   * @param {String} opts.city Filter companies based in cities matching the provided regular expression.

    The accepted value for this parameter is a regular expression which is **case sensitive** by default and accepts an `(?i)` flag.
    The default value of this parameter is null.
   * @param {String} opts.type Filter companies of the provided LinkedIn type.

    Possible values:

   * * `EDUCATIONAL`: Educational Institution
   * * `GOVERNMENT_AGENCY`: Government Agency
   * * `NON_PROFIT` : Nonprofit
   * * `PARTNERSHIP` : Partnership
   * * `PRIVATELY_HELD` : Privately Held
   * * `PUBLIC_COMPANY` : Public Company
   * * `SELF_EMPLOYED` : Self-Employed
   * * `SELF_OWNED` : Sole Proprietorship
   * @param {String} opts.followerCountMin Filter companies with a LinkedIn follower count **more than** this value.
   * @param {String} opts.followerCountMax Filter companies with a LinkedIn follower count **less than** this value.
   * @param {String} opts.name Filter companies with a name matching the provided regular expression.

    The accepted value for this parameter is a regular expression which is **case sensitive** by default and accepts an `(?i)` flag.
    The default value of this parameter is null.
   * @param {String} opts.industry Use this parameter to filter companies belonging to an `industry` that matches the provided regular expression. The `industry` attribute, found in a LinkedIn Company profile, describes the industry in which the company operates. The value of this attribute is an enumerator. [This CSV file provides an exhaustive list of possible values for this attribute](https://drive.google.com/file/d/12yvYLuru7CRv3wKOIkHs5Ldocz31gJSS/view?usp=share_link).

    The accepted value for this parameter is a regular expression which is **case sensitive** by default and accepts an `(?i)` flag. The default value of this parameter is `null`.
   * @param {String} opts.employeeCountMax Filter companies with **at most** this many employees.
   * @param {String} opts.employeeCountMin Filter companies with **at least** this many employees.
   * @param {String} opts.description Filter companies with a description matching the provided regular expression.

    The accepted value for this parameter is a regular expression which is **case sensitive** by default and accepts an `(?i)` flag.
    The default value of this parameter is null.
   * @param {String} opts.foundedAfterYear Filter companies that were founded **after** this year.
   * @param {String} opts.foundedBeforeYear Filter companies that were founded **before** this year.
   * @param {String} opts.pageSize Tune the maximum results returned per API call. 
   * 
   * The default value of this parameter is `100`. 
   * 
   * Accepted values for this parameter is an integer ranging from `1` to `100`.
   * @param {String} opts.enrichProfiles Get the person's complete profile data rather than just the URLs to their LinkedIn profiles. 
   * 
   * Each request respond with a streaming response of profiles. 
   * 
   * The valid values are: 
   * * `skip` (default): lists person's profile url only 
   * * `enrich`: include person's profile data in the list 
   * 
   * Calling this API endpoint with this parameter would add `1` credit per result returned.
   * @param {module:api/SearchAPIApi~companySearchEndpointCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/CompanySearch}
   */
  companySearchEndpoint(opts, callback) {
    opts = opts || {};
    let postBody = null;

    let pathParams = {
    };
    let queryParams = {
      country: opts['country'],
      region: opts['region'],
      city: opts['city'],
      type: opts['type'],
      follower_count_min: opts['followerCountMin'],
      follower_count_max: opts['followerCountMax'],
      name: opts['name'],
      industry: opts['industry'],
      employee_count_max: opts['employeeCountMax'],
      employee_count_min: opts['employeeCountMin'],
      description: opts['description'],
      founded_after_year: opts['foundedAfterYear'],
      founded_before_year: opts['foundedBeforeYear'],
      page_size: opts['pageSize'] || 100,
      enrich_profiles: opts['enrichProfiles'] || 'skip',
    };
    let headerParams = {
    };
    let formParams = {
    };

    let authNames = ['BearerAuth'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = CompanySearch;
    return this.apiClient.callApi(
      '/api/search/company', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null, callback
    );
  }
}