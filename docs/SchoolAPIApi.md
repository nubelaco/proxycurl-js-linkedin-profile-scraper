# ProxycurlApi.SchoolAPIApi

All URIs are relative to *https://nubela.co/proxycurl*

Method | HTTP request | Description
------------- | ------------- | -------------
[**schoolProfileEndpoint**](SchoolAPIApi.md#schoolProfileEndpoint) | **GET** /api/linkedin/school | School Profile Endpoint



## schoolProfileEndpoint

> LinkedinSchool schoolProfileEndpoint(url, opts)

School Profile Endpoint

Cost: 1 credit / successful request. Get structured data of a LinkedIn School Profile

### Example

```javascript
import ProxycurlApi from 'proxycurl_api';
let defaultClient = ProxycurlApi.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ProxycurlApi.SchoolAPIApi();
let url = https://www.linkedin.com/school/national-university-of-singapore; // String |      URL of the LinkedIn School Profile to crawl.      URL should be in the format of `https://www.linkedin.com/school/<public_identifier>`     
let opts = {
  'useCache': if-present // String | `if-present` The default behavior. Fetches profile from cache regardless of age of profile. If profile is not available in cache, API will attempt to source profile externally.  `if-recent` API will make a best effort to return a fresh profile no older than 29 days.Costs an extra `1` credit on top of the cost of the base endpoint.
};
apiInstance.schoolProfileEndpoint(url, opts, (error, data, response) => {
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
 **url** | **String**|      URL of the LinkedIn School Profile to crawl.      URL should be in the format of &#x60;https://www.linkedin.com/school/&lt;public_identifier&gt;&#x60;      | 
 **useCache** | **String**| &#x60;if-present&#x60; The default behavior. Fetches profile from cache regardless of age of profile. If profile is not available in cache, API will attempt to source profile externally.  &#x60;if-recent&#x60; API will make a best effort to return a fresh profile no older than 29 days.Costs an extra &#x60;1&#x60; credit on top of the cost of the base endpoint. | [optional] 

### Return type

[**LinkedinSchool**](LinkedinSchool.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

