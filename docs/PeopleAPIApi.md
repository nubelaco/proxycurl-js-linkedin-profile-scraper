# ProxycurlApi.PeopleAPIApi

All URIs are relative to *https://nubela.co/proxycurl*

Method | HTTP request | Description
------------- | ------------- | -------------
[**personLookupEndpoint**](PeopleAPIApi.md#personLookupEndpoint) | **GET** /api/linkedin/profile/resolve | Cost: 2 credits / successful request. Resolve LinkedIn Profile
[**personProfileEndpoint**](PeopleAPIApi.md#personProfileEndpoint) | **GET** /api/v2/linkedin | Cost: 1 credit / successful request. Get structured data of a Personal Profile
[**personProfilePictureEndpoint**](PeopleAPIApi.md#personProfilePictureEndpoint) | **GET** /api/linkedin/person/profile-picture | Cost: 0 credit / successful request. Get the profile picture of a person.  Profile pictures are served from cached people profiles found within [LinkDB](https://nubela.co/proxycurl/linkdb). If the profile does not exist within [LinkDB](https://nubela.co/proxycurl/linkdb), then the API will return a &#x60;404&#x60; status code.
[**roleLookupEndpoint**](PeopleAPIApi.md#roleLookupEndpoint) | **GET** /api/find/company/role | Cost: 3 credits / successful request. Finds the closest (person) profile with a given role in a Company. For example, you can use this endpoint to find the \&quot;CTO\&quot; of \&quot;Apple\&quot;. This API endpoint returns only one result that is the closest match.  There is also a [role search](https://nubela.co/blog/search-employees-with-employee-listing-api/) under the Employee Listing Endpoint if you require:  * precision on the target company * a list of employees that matches a role (instead of one result).



## personLookupEndpoint

> UrlResult1 personLookupEndpoint(companyDomain, firstName, opts)

Cost: 2 credits / successful request. Resolve LinkedIn Profile

### Example

```javascript
import ProxycurlApi from 'proxycurl-js';
let defaultClient = ProxycurlApi.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ProxycurlApi.PeopleAPIApi();
let companyDomain = gatesfoundation.org; // String | Company name or domain
let firstName = Bill; // String | First name of the user
let opts = {
  'location': Seattle, // String |      The location of this user.      Name of country, city or state.     
  'title': Co-chair, // String | Title that user is holding at his/her current job
  'lastName': Gates // String | Last name of the user
};
apiInstance.personLookupEndpoint(companyDomain, firstName, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyDomain** | **String**| Company name or domain | 
 **firstName** | **String**| First name of the user | 
 **location** | **String**|      The location of this user.      Name of country, city or state.      | [optional] 
 **title** | **String**| Title that user is holding at his/her current job | [optional] 
 **lastName** | **String**| Last name of the user | [optional] 

### Return type

[**UrlResult1**](UrlResult1.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## personProfileEndpoint

> PersonEndpointResponse personProfileEndpoint(url, fallbackToCache, opts)

Cost: 1 credit / successful request. Get structured data of a Personal Profile

### Example

```javascript
import ProxycurlApi from 'proxycurl-js';
let defaultClient = ProxycurlApi.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ProxycurlApi.PeopleAPIApi();
let url = https://www.linkedin.com/in/johnrmarty/; // String |      URL of the LinkedIn Profile to crawl.      URL should be in the format of `https://www.linkedin.com/in/<public-identifier>`     
let fallbackToCache = on-error; // String |      Tweaks the fallback behavior if an error arises from fetching a fresh profile.          This parameter accepts the following values:     * `on-error` (default value) - Fallback to reading the profile from cache if an error arises.     * `never` - Do not ever read profile from cache.     
let opts = {
  'useCache': if-present, // String | `if-present` The default behavior. Fetches profile from cache regardless of age of profile. If profile is not available in cache, API will attempt to source profile externally.  `if-recent` API will make a best effort to return a fresh profile no older than 29 days.Costs an extra `1` credit on top of the cost of the base endpoint.
  'skills': include, // String |      Include skills data from external sources.      This parameter accepts the following values:     - `exclude` (default value) - Does not provide skills data field.     - `include` - Append skills data to the person profile object. Costs an extra `1` credit on top of the cost of the base endpoint (if data is available).     
  'inferredSalary': include, // String |      Include inferred salary range from external sources.      This parameter accepts the following values:     - `exclude` (default value) - Does not provide inferred salary data field.     - `include` - Append inferred salary range data to the person profile object. Costs an extra `1` credit on top of the cost of the base endpoint (if data is available).     
  'personalEmail': include, // String |      Enriches the Person Profile with personal emails from external sources.      This parameter accepts the following values:     - `exclude` (default value) - Does not provide personal emails data field.     - `include` - Append personal emails data to the person profile object. Costs an extra `1` credit per email returned on top of the cost of the base endpoint (if data is available).     
  'personalContactNumber': include, // String |      Enriches the Person Profile with personal numbers from external sources.      This parameter accepts the following values:     - `exclude` (default value) - Does not provide personal numbers data field.     - `include` - Append personal numbers data to the person profile object. Costs an extra `1` credit per email returned on top of the cost of the base endpoint (if data is available).     
  'twitterProfileId': include, // String |      Enriches the Person Profile with Twitter Id from external sources.      This parameter accepts the following values:     - `exclude` (default value) - Does not provide Twitter Id data field.     - `include` - Append Twitter Id data to the person profile object. Costs an extra `1` credit on top of the cost of the base endpoint (if data is available).     
  'facebookProfileId': include, // String |      Enriches the Person Profile with Facebook Id from external sources.      This parameter accepts the following values:     - `exclude` (default value) - Does not provide Facebook Id data field.     - `include` - Append Facebook Id data to the person profile object. Costs an extra `1` credit on top of the cost of the base endpoint (if data is available).     
  'githubProfileId': include, // String |      Enriches the Person Profile with Github Id from external sources.      This parameter accepts the following values:     - `exclude` (default value) - Does not provide Github Id data field.     - `include` - Append Github Id data to the person profile object. Costs an extra `1` credit on top of the cost of the base endpoint (if data is available).     
  'extra': include // String |      Enriches the Person Profile with extra details from external sources. Extra details include gender, birth date, industry and interests.      This parameter accepts the following values:     - `exclude` (default value) - Does not provide extra data field.     - `include` - Append extra data to the person profile object. Costs an extra `1` credit on top of the cost of the base endpoint (if data is available).     
};
apiInstance.personProfileEndpoint(url, fallbackToCache, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **url** | **String**|      URL of the LinkedIn Profile to crawl.      URL should be in the format of &#x60;https://www.linkedin.com/in/&lt;public-identifier&gt;&#x60;      | 
 **fallbackToCache** | **String**|      Tweaks the fallback behavior if an error arises from fetching a fresh profile.          This parameter accepts the following values:     * &#x60;on-error&#x60; (default value) - Fallback to reading the profile from cache if an error arises.     * &#x60;never&#x60; - Do not ever read profile from cache.      | 
 **useCache** | **String**| &#x60;if-present&#x60; The default behavior. Fetches profile from cache regardless of age of profile. If profile is not available in cache, API will attempt to source profile externally.  &#x60;if-recent&#x60; API will make a best effort to return a fresh profile no older than 29 days.Costs an extra &#x60;1&#x60; credit on top of the cost of the base endpoint. | [optional] 
 **skills** | **String**|      Include skills data from external sources.      This parameter accepts the following values:     - &#x60;exclude&#x60; (default value) - Does not provide skills data field.     - &#x60;include&#x60; - Append skills data to the person profile object. Costs an extra &#x60;1&#x60; credit on top of the cost of the base endpoint (if data is available).      | [optional] 
 **inferredSalary** | **String**|      Include inferred salary range from external sources.      This parameter accepts the following values:     - &#x60;exclude&#x60; (default value) - Does not provide inferred salary data field.     - &#x60;include&#x60; - Append inferred salary range data to the person profile object. Costs an extra &#x60;1&#x60; credit on top of the cost of the base endpoint (if data is available).      | [optional] 
 **personalEmail** | **String**|      Enriches the Person Profile with personal emails from external sources.      This parameter accepts the following values:     - &#x60;exclude&#x60; (default value) - Does not provide personal emails data field.     - &#x60;include&#x60; - Append personal emails data to the person profile object. Costs an extra &#x60;1&#x60; credit per email returned on top of the cost of the base endpoint (if data is available).      | [optional] 
 **personalContactNumber** | **String**|      Enriches the Person Profile with personal numbers from external sources.      This parameter accepts the following values:     - &#x60;exclude&#x60; (default value) - Does not provide personal numbers data field.     - &#x60;include&#x60; - Append personal numbers data to the person profile object. Costs an extra &#x60;1&#x60; credit per email returned on top of the cost of the base endpoint (if data is available).      | [optional] 
 **twitterProfileId** | **String**|      Enriches the Person Profile with Twitter Id from external sources.      This parameter accepts the following values:     - &#x60;exclude&#x60; (default value) - Does not provide Twitter Id data field.     - &#x60;include&#x60; - Append Twitter Id data to the person profile object. Costs an extra &#x60;1&#x60; credit on top of the cost of the base endpoint (if data is available).      | [optional] 
 **facebookProfileId** | **String**|      Enriches the Person Profile with Facebook Id from external sources.      This parameter accepts the following values:     - &#x60;exclude&#x60; (default value) - Does not provide Facebook Id data field.     - &#x60;include&#x60; - Append Facebook Id data to the person profile object. Costs an extra &#x60;1&#x60; credit on top of the cost of the base endpoint (if data is available).      | [optional] 
 **githubProfileId** | **String**|      Enriches the Person Profile with Github Id from external sources.      This parameter accepts the following values:     - &#x60;exclude&#x60; (default value) - Does not provide Github Id data field.     - &#x60;include&#x60; - Append Github Id data to the person profile object. Costs an extra &#x60;1&#x60; credit on top of the cost of the base endpoint (if data is available).      | [optional] 
 **extra** | **String**|      Enriches the Person Profile with extra details from external sources. Extra details include gender, birth date, industry and interests.      This parameter accepts the following values:     - &#x60;exclude&#x60; (default value) - Does not provide extra data field.     - &#x60;include&#x60; - Append extra data to the person profile object. Costs an extra &#x60;1&#x60; credit on top of the cost of the base endpoint (if data is available).      | [optional] 

### Return type

[**PersonEndpointResponse**](PersonEndpointResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## personProfilePictureEndpoint

> ProfilePicture personProfilePictureEndpoint(linkedinPersonProfileUrl)

Cost: 0 credit / successful request. Get the profile picture of a person.  Profile pictures are served from cached people profiles found within [LinkDB](https://nubela.co/proxycurl/linkdb). If the profile does not exist within [LinkDB](https://nubela.co/proxycurl/linkdb), then the API will return a &#x60;404&#x60; status code.

### Example

```javascript
import ProxycurlApi from 'proxycurl-js';
let defaultClient = ProxycurlApi.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ProxycurlApi.PeopleAPIApi();
let linkedinPersonProfileUrl = https://www.linkedin.com/in/williamhgates/; // String |      LinkedIn Profile URL of the person that you are trying to get the profile picture of.     
apiInstance.personProfilePictureEndpoint(linkedinPersonProfileUrl, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **linkedinPersonProfileUrl** | **String**|      LinkedIn Profile URL of the person that you are trying to get the profile picture of.      | 

### Return type

[**ProfilePicture**](ProfilePicture.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## roleLookupEndpoint

> RoleSearchResult roleLookupEndpoint(role, companyName)

Cost: 3 credits / successful request. Finds the closest (person) profile with a given role in a Company. For example, you can use this endpoint to find the \&quot;CTO\&quot; of \&quot;Apple\&quot;. This API endpoint returns only one result that is the closest match.  There is also a [role search](https://nubela.co/blog/search-employees-with-employee-listing-api/) under the Employee Listing Endpoint if you require:  * precision on the target company * a list of employees that matches a role (instead of one result).

### Example

```javascript
import ProxycurlApi from 'proxycurl-js';
let defaultClient = ProxycurlApi.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ProxycurlApi.PeopleAPIApi();
let role = ceo; // String | Role of the profile that you are lookin up
let companyName = nubela; // String | Name of the company that you are searching for
apiInstance.roleLookupEndpoint(role, companyName, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **role** | **String**| Role of the profile that you are lookin up | 
 **companyName** | **String**| Name of the company that you are searching for | 

### Return type

[**RoleSearchResult**](RoleSearchResult.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

