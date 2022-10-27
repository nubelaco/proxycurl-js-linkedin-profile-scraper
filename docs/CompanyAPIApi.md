# ProxycurlApi.CompanyAPIApi

All URIs are relative to *https://nubela.co/proxycurl*

Method | HTTP request | Description
------------- | ------------- | -------------
[**companyLookupEndpoint**](CompanyAPIApi.md#companyLookupEndpoint) | **GET** /api/linkedin/company/resolve | 
[**companyProfileEndpoint**](CompanyAPIApi.md#companyProfileEndpoint) | **GET** /api/linkedin/company | 
[**companyProfilePictureEndpoint**](CompanyAPIApi.md#companyProfilePictureEndpoint) | **GET** /api/linkedin/company/profile-picture | 
[**employeeCountEndpoint**](CompanyAPIApi.md#employeeCountEndpoint) | **GET** /api/linkedin/company/employees/count/ | 
[**employeeListingEndpoint**](CompanyAPIApi.md#employeeListingEndpoint) | **GET** /api/linkedin/company/employees/ | 
[**employeeSearchAPIEndpoint**](CompanyAPIApi.md#employeeSearchAPIEndpoint) | **GET** /api/linkedin/company/employee/search/ | 



## companyLookupEndpoint

> UrlResult2 companyLookupEndpoint(opts)



Cost: 2 credits / successful request. Resolve Company LinkedIn Profile from company name,     domain name and location.

### Example

```javascript
import ProxycurlApi from 'proxycurl_api';
let defaultClient = ProxycurlApi.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ProxycurlApi.CompanyAPIApi();
let opts = {
  'companyLocation': sg, // String |      The location / region of company.     ISO 3166-1 alpha-2 codes     
  'companyDomain': accenture.com, // String | Company website or Company domain Requires either `company_domain` or `company_name`
  'companyName': Accenture // String | Company Name Requires either `company_domain` or `company_name`
};
apiInstance.companyLookupEndpoint(opts, (error, data, response) => {
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
 **companyLocation** | **String**|      The location / region of company.     ISO 3166-1 alpha-2 codes      | [optional] 
 **companyDomain** | **String**| Company website or Company domain Requires either &#x60;company_domain&#x60; or &#x60;company_name&#x60; | [optional] 
 **companyName** | **String**| Company Name Requires either &#x60;company_domain&#x60; or &#x60;company_name&#x60; | [optional] 

### Return type

[**UrlResult2**](UrlResult2.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companyProfileEndpoint

> LinkedinCompany companyProfileEndpoint(url, opts)



Cost: 1 credit / successful request. Get structured data of a Company Profile

### Example

```javascript
import ProxycurlApi from 'proxycurl_api';
let defaultClient = ProxycurlApi.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ProxycurlApi.CompanyAPIApi();
let url = https://www.linkedin.com/company/apple/; // String |      URL of the LinkedIn Company Profile to crawl.      URL should be in the format of `https://www.linkedin.com/company/<public_identifier>`     
let opts = {
  'resolveNumericId': true, // String |      Enable support for Company Profile URLs with numerical IDs that you most frequently fetch from Sales Navigator.      We achieve this by resolving numerical IDs into vanity IDs with cached company profiles from [LinkDB](https://nubela.co/proxycurl/linkdb).      For example, we will turn `https://www.linkedin.com/company/1234567890` to `https://www.linkedin.com/company/acme-corp` -- for which the API endpoint only supports the latter.          This parameter accepts the following values:     - `false` (default value) - Will not resolve numerical IDs.     - `true` - Enable support for Company Profile URLs with numerical IDs.      Costs an extra `2` credit on top of the base cost of the endpoint.     
  'categories': include, // String |      Appends categories data of this company.      Default value is `\"exclude\"`.     The other acceptable value is `\"include\"`, which will include these categories (if available) for `1` extra credit.     
  'fundingData': include, // String |      Returns a list of funding rounds that this company has received.      Default value is `\"exclude\"`.     The other acceptable value is `\"include\"`, which will include these categories (if available) for `1` extra credit.     
  'extra': include, // String |      Enriches the Company Profile with extra details from external sources. Details include Crunchbase ranking, contact email, phone number, Facebook account, Twitter account, funding rounds and amount, IPO status, investor information, etc.          Default value is `\"exclude\"`.     The other acceptable value is `\"include\"`, which will include these extra details (if available) for `1` extra credit.     
  'exitData': include, // String |      Returns a list of investment portfolio exits.      Default value is `\"exclude\"`.     The other acceptable value is `\"include\"`, which will include these categories (if available) for `1` extra credit.     
  'acquisitions': include, // String |      Provides further enriched data on acquisitions made by this company from external sources.      Default value is `\"exclude\"`.     The other acceptable value is `\"include\"`, which will include these acquisition data (if available) for `1` extra credit.     
  'useCache': if-present // String | `if-present` The default behavior. Fetches profile from cache regardless of age of profile. If profile is not available in cache, API will attempt to source profile externally.  `if-recent` API will make a best effort to return a fresh profile no older than 29 days.Costs an extra `1` credit on top of the cost of the base endpoint.
};
apiInstance.companyProfileEndpoint(url, opts, (error, data, response) => {
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
 **url** | **String**|      URL of the LinkedIn Company Profile to crawl.      URL should be in the format of &#x60;https://www.linkedin.com/company/&lt;public_identifier&gt;&#x60;      | 
 **resolveNumericId** | **String**|      Enable support for Company Profile URLs with numerical IDs that you most frequently fetch from Sales Navigator.      We achieve this by resolving numerical IDs into vanity IDs with cached company profiles from [LinkDB](https://nubela.co/proxycurl/linkdb).      For example, we will turn &#x60;https://www.linkedin.com/company/1234567890&#x60; to &#x60;https://www.linkedin.com/company/acme-corp&#x60; -- for which the API endpoint only supports the latter.          This parameter accepts the following values:     - &#x60;false&#x60; (default value) - Will not resolve numerical IDs.     - &#x60;true&#x60; - Enable support for Company Profile URLs with numerical IDs.      Costs an extra &#x60;2&#x60; credit on top of the base cost of the endpoint.      | [optional] 
 **categories** | **String**|      Appends categories data of this company.      Default value is &#x60;\&quot;exclude\&quot;&#x60;.     The other acceptable value is &#x60;\&quot;include\&quot;&#x60;, which will include these categories (if available) for &#x60;1&#x60; extra credit.      | [optional] 
 **fundingData** | **String**|      Returns a list of funding rounds that this company has received.      Default value is &#x60;\&quot;exclude\&quot;&#x60;.     The other acceptable value is &#x60;\&quot;include\&quot;&#x60;, which will include these categories (if available) for &#x60;1&#x60; extra credit.      | [optional] 
 **extra** | **String**|      Enriches the Company Profile with extra details from external sources. Details include Crunchbase ranking, contact email, phone number, Facebook account, Twitter account, funding rounds and amount, IPO status, investor information, etc.          Default value is &#x60;\&quot;exclude\&quot;&#x60;.     The other acceptable value is &#x60;\&quot;include\&quot;&#x60;, which will include these extra details (if available) for &#x60;1&#x60; extra credit.      | [optional] 
 **exitData** | **String**|      Returns a list of investment portfolio exits.      Default value is &#x60;\&quot;exclude\&quot;&#x60;.     The other acceptable value is &#x60;\&quot;include\&quot;&#x60;, which will include these categories (if available) for &#x60;1&#x60; extra credit.      | [optional] 
 **acquisitions** | **String**|      Provides further enriched data on acquisitions made by this company from external sources.      Default value is &#x60;\&quot;exclude\&quot;&#x60;.     The other acceptable value is &#x60;\&quot;include\&quot;&#x60;, which will include these acquisition data (if available) for &#x60;1&#x60; extra credit.      | [optional] 
 **useCache** | **String**| &#x60;if-present&#x60; The default behavior. Fetches profile from cache regardless of age of profile. If profile is not available in cache, API will attempt to source profile externally.  &#x60;if-recent&#x60; API will make a best effort to return a fresh profile no older than 29 days.Costs an extra &#x60;1&#x60; credit on top of the cost of the base endpoint. | [optional] 

### Return type

[**LinkedinCompany**](LinkedinCompany.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companyProfilePictureEndpoint

> ProfilePicture companyProfilePictureEndpoint(linkedinCompanyProfileUrl)



Cost: 0 credit / successful request. Get the profile picture of a company.  Profile pictures are served from cached company profiles found within [LinkDB](https://nubela.co/proxycurl/linkdb). If the profile does not exist within [LinkDB](https://nubela.co/proxycurl/linkdb), then the API will return a &#x60;404&#x60; status code.

### Example

```javascript
import ProxycurlApi from 'proxycurl_api';
let defaultClient = ProxycurlApi.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ProxycurlApi.CompanyAPIApi();
let linkedinCompanyProfileUrl = https://www.linkedin.com/company/apple/; // String |      LinkedIn Profile URL of the company that you are trying to get the profile picture of.     
apiInstance.companyProfilePictureEndpoint(linkedinCompanyProfileUrl, (error, data, response) => {
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
 **linkedinCompanyProfileUrl** | **String**|      LinkedIn Profile URL of the company that you are trying to get the profile picture of.      | 

### Return type

[**ProfilePicture**](ProfilePicture.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## employeeCountEndpoint

> EmployeeCount employeeCountEndpoint(url, opts)



Cost: 1 credit / successful request. Get a number of total employees of a Company.  Get an employee count of this company from various sources.

### Example

```javascript
import ProxycurlApi from 'proxycurl_api';
let defaultClient = ProxycurlApi.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ProxycurlApi.CompanyAPIApi();
let url = https://www.linkedin.com/company/apple/; // String |      URL of the LinkedIn Company Profile to target.      URL should be in the format of `https://www.linkedin.com/company/<public_identifier>`     
let opts = {
  'linkedinEmployeeCount': include, // String |      Option to include a scraped employee count value from the target company's LinkedIn profile.      Valid values are `include` and `exclude`:      * `exclude` (default) : To exclude the scraped employee count.     * `include` : To include the scraped employee count.      Costs an extra `1` credit on top of the base cost of the endpoint.     
  'employmentStatus': current // String |      Parameter to tell the API to filter past or current employees.      Valid values are `current`, `past`, and `all`:      * `current` (default) : count current employees     * `past` : count past employees     * `all` : count current & past employees     
};
apiInstance.employeeCountEndpoint(url, opts, (error, data, response) => {
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
 **url** | **String**|      URL of the LinkedIn Company Profile to target.      URL should be in the format of &#x60;https://www.linkedin.com/company/&lt;public_identifier&gt;&#x60;      | 
 **linkedinEmployeeCount** | **String**|      Option to include a scraped employee count value from the target company&#39;s LinkedIn profile.      Valid values are &#x60;include&#x60; and &#x60;exclude&#x60;:      * &#x60;exclude&#x60; (default) : To exclude the scraped employee count.     * &#x60;include&#x60; : To include the scraped employee count.      Costs an extra &#x60;1&#x60; credit on top of the base cost of the endpoint.      | [optional] 
 **employmentStatus** | **String**|      Parameter to tell the API to filter past or current employees.      Valid values are &#x60;current&#x60;, &#x60;past&#x60;, and &#x60;all&#x60;:      * &#x60;current&#x60; (default) : count current employees     * &#x60;past&#x60; : count past employees     * &#x60;all&#x60; : count current &amp; past employees      | [optional] 

### Return type

[**EmployeeCount**](EmployeeCount.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## employeeListingEndpoint

> EmployeeList employeeListingEndpoint(url, opts)



Cost: 3 credits / employee returned. Get a list of employees of a Company.  This API endpoint is limited by LinkDB which is populated with profiles in the US, UK, Canada, Israel, Australia, Ireland, New Zealand and Singapore. As such, this endpoint is best used to list employees working in companies based in those locations only.

### Example

```javascript
import ProxycurlApi from 'proxycurl_api';
let defaultClient = ProxycurlApi.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ProxycurlApi.CompanyAPIApi();
let url = https://www.linkedin.com/company/microsoft; // String |      URL of the LinkedIn Company Profile to target.      URL should be in the format of `https://www.linkedin.com/company/<public_identifier>`     
let opts = {
  'enrichProfiles': enrich, // String |      Get the full profile of employees instead of only their profile urls.      Each request respond with a streaming response of profiles.      The valid values are:          * `skip` (default): lists employee's profile url     * `enrich`: lists full profile of employees      Calling this API endpoint with this parameter would add `1` credit per employee returned.     
  'roleSearch': [Ff][Oo][Uu][Nn][Dd][Ee][Rr], // String |      Filter employees by their title by matching the employee's title against a *regular expression*.      The default value of this parameter is `null`.      The accepted value is a *regular expression* (regex).      (The base cost of calling this API endpoint with this parameter would be `10` credits.     Each employee matched and returned would cost `6` credits per employee returned.)     
  'pageSize': 100, // String |      Tune the maximum results returned per API call.      The default value of this parameter is `200000`.      Accepted values for this parameter is an integer ranging from `1` to `200000`.      When `enrich_profiles=enrich`, this parameter accepts value ranging from `1` to `100`.     
  'employmentStatus': current, // String |      Parameter to tell the API to return past or current employees.      Valid values are `current`, `past`, and `all`:      * `current` (default) : lists current employees     * `past` : lists past employees     * `all` : lists current & past employees     
  'resolveNumericId': false // String |      Enable support for Company Profile URLs with numerical IDs that you most frequently fetch from Sales Navigator.      We achieve this by resolving numerical IDs into vanity IDs with cached company profiles from [LinkDB](https://nubela.co/proxycurl/linkdb).      For example, we will turn `https://www.linkedin.com/company/1234567890` to `https://www.linkedin.com/company/acme-corp` -- for which the API endpoint only supports the latter.          This parameter accepts the following values:     - `false` (default value) - Will not resolve numerical IDs.     - `true` - Enable support for Company Profile URLs with numerical IDs.      Costs an extra `2` credit on top of the base cost of the endpoint.     
};
apiInstance.employeeListingEndpoint(url, opts, (error, data, response) => {
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
 **url** | **String**|      URL of the LinkedIn Company Profile to target.      URL should be in the format of &#x60;https://www.linkedin.com/company/&lt;public_identifier&gt;&#x60;      | 
 **enrichProfiles** | **String**|      Get the full profile of employees instead of only their profile urls.      Each request respond with a streaming response of profiles.      The valid values are:          * &#x60;skip&#x60; (default): lists employee&#39;s profile url     * &#x60;enrich&#x60;: lists full profile of employees      Calling this API endpoint with this parameter would add &#x60;1&#x60; credit per employee returned.      | [optional] 
 **roleSearch** | **String**|      Filter employees by their title by matching the employee&#39;s title against a *regular expression*.      The default value of this parameter is &#x60;null&#x60;.      The accepted value is a *regular expression* (regex).      (The base cost of calling this API endpoint with this parameter would be &#x60;10&#x60; credits.     Each employee matched and returned would cost &#x60;6&#x60; credits per employee returned.)      | [optional] 
 **pageSize** | **String**|      Tune the maximum results returned per API call.      The default value of this parameter is &#x60;200000&#x60;.      Accepted values for this parameter is an integer ranging from &#x60;1&#x60; to &#x60;200000&#x60;.      When &#x60;enrich_profiles&#x3D;enrich&#x60;, this parameter accepts value ranging from &#x60;1&#x60; to &#x60;100&#x60;.      | [optional] 
 **employmentStatus** | **String**|      Parameter to tell the API to return past or current employees.      Valid values are &#x60;current&#x60;, &#x60;past&#x60;, and &#x60;all&#x60;:      * &#x60;current&#x60; (default) : lists current employees     * &#x60;past&#x60; : lists past employees     * &#x60;all&#x60; : lists current &amp; past employees      | [optional] 
 **resolveNumericId** | **String**|      Enable support for Company Profile URLs with numerical IDs that you most frequently fetch from Sales Navigator.      We achieve this by resolving numerical IDs into vanity IDs with cached company profiles from [LinkDB](https://nubela.co/proxycurl/linkdb).      For example, we will turn &#x60;https://www.linkedin.com/company/1234567890&#x60; to &#x60;https://www.linkedin.com/company/acme-corp&#x60; -- for which the API endpoint only supports the latter.          This parameter accepts the following values:     - &#x60;false&#x60; (default value) - Will not resolve numerical IDs.     - &#x60;true&#x60; - Enable support for Company Profile URLs with numerical IDs.      Costs an extra &#x60;2&#x60; credit on top of the base cost of the endpoint.      | [optional] 

### Return type

[**EmployeeList**](EmployeeList.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## employeeSearchAPIEndpoint

> EmployeeList employeeSearchAPIEndpoint(linkedinCompanyProfileUrl, keywordRegex, opts)



Cost: 10 credits / successful request. Search employees of a target by their job title.

### Example

```javascript
import ProxycurlApi from 'proxycurl_api';
let defaultClient = ProxycurlApi.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ProxycurlApi.CompanyAPIApi();
let linkedinCompanyProfileUrl = https://www.linkedin.com/company/microsoft/; // String |      LinkedIn Profile URL of the target company.     
let keywordRegex = [Cc][Ee][Oo]; // String |      Job title keyword to search for in regular expression format.     
let opts = {
  'pageSize': 1000 // String |      Tune the maximum results returned per API call.     The default value of this parameter is `200000`.     Accepted values for this parameter is an integer ranging from `1` to `200000`.     
};
apiInstance.employeeSearchAPIEndpoint(linkedinCompanyProfileUrl, keywordRegex, opts, (error, data, response) => {
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
 **linkedinCompanyProfileUrl** | **String**|      LinkedIn Profile URL of the target company.      | 
 **keywordRegex** | **String**|      Job title keyword to search for in regular expression format.      | 
 **pageSize** | **String**|      Tune the maximum results returned per API call.     The default value of this parameter is &#x60;200000&#x60;.     Accepted values for this parameter is an integer ranging from &#x60;1&#x60; to &#x60;200000&#x60;.      | [optional] 

### Return type

[**EmployeeList**](EmployeeList.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

