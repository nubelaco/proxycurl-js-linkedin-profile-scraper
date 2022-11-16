# ProxycurlApi.JobsAPIApi

All URIs are relative to *https://nubela.co/proxycurl*

Method | HTTP request | Description
------------- | ------------- | -------------
[**jobProfileEndpoint**](JobsAPIApi.md#jobProfileEndpoint) | **GET** /api/linkedin/job | Cost: 2 credits / successful request. Get structured data of a LinkedIn Job Profile
[**jobsListingEndpoint**](JobsAPIApi.md#jobsListingEndpoint) | **GET** /api/v2/linkedin/company/job | Cost: 2 credits / successful request. List jobs posted by a company on LinkedIn



## jobProfileEndpoint

> LinkedinJob jobProfileEndpoint(url)

Cost: 2 credits / successful request. Get structured data of a LinkedIn Job Profile

### Example

```javascript
import ProxycurlApi from 'proxycurl-js';
let defaultClient = ProxycurlApi.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ProxycurlApi.JobsAPIApi();
let url = https://www.linkedin.com/jobs/view/3046202003/; // String |      URL of the LinkedIn Job Profile to target.      URL should be in the format of     `https://www.linkedin.com/jobs/view/<job_id>`.     [Jobs Listing Endpoint](#jobs-api-jobs-listing-endpoint)     can be used to retrieve a job URL.     
apiInstance.jobProfileEndpoint(url, (error, data, response) => {
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
 **url** | **String**|      URL of the LinkedIn Job Profile to target.      URL should be in the format of     &#x60;https://www.linkedin.com/jobs/view/&lt;job_id&gt;&#x60;.     [Jobs Listing Endpoint](#jobs-api-jobs-listing-endpoint)     can be used to retrieve a job URL.      | 

### Return type

[**LinkedinJob**](LinkedinJob.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## jobsListingEndpoint

> JobListPage jobsListingEndpoint(searchId)

Cost: 2 credits / successful request. List jobs posted by a company on LinkedIn

### Example

```javascript
import ProxycurlApi from 'proxycurl-js';
let defaultClient = ProxycurlApi.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ProxycurlApi.JobsAPIApi();
let searchId = 1035; // String |      The `search_id` of the company on LinkedIn.     You can get the `search_id` of a LinkedIn company via     [Company Profile API](#company-api-company-profile-endpoint).     
apiInstance.jobsListingEndpoint(searchId, (error, data, response) => {
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
 **searchId** | **String**|      The &#x60;search_id&#x60; of the company on LinkedIn.     You can get the &#x60;search_id&#x60; of a LinkedIn company via     [Company Profile API](#company-api-company-profile-endpoint).      | 

### Return type

[**JobListPage**](JobListPage.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

