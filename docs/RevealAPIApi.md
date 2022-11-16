# ProxycurlApi.RevealAPIApi

All URIs are relative to *https://nubela.co/proxycurl*

Method | HTTP request | Description
------------- | ------------- | -------------
[**revealEndpoint**](RevealAPIApi.md#revealEndpoint) | **GET** /api/reveal/company | Cost: 2 credits / successful request. Deanonymize an IPv4 address and associate the Company behind the IPv4 address.



## revealEndpoint

> CompanyReveal revealEndpoint(ip, opts)

Cost: 2 credits / successful request. Deanonymize an IPv4 address and associate the Company behind the IPv4 address.

### Example

```javascript
import ProxycurlApi from 'proxycurl-js';
let defaultClient = ProxycurlApi.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ProxycurlApi.RevealAPIApi();
let ip = 8.8.8.8; // String |      The target IPv4 address.     
let opts = {
  'roleContactNumber': include, // String |      Append personal contact numbers to the response if the system finds a relevant person profile.     
  'rolePersonalEmail': include, // String |      Append personal email addresses to the response if the system finds a relevant person profile.     
  'role': ceo // String |      Lookup and append an employee of a certain role of the company.     Within the same API call, You can choose to lookup a person with a given role within this organisation that you might want to reach out to.     
};
apiInstance.revealEndpoint(ip, opts, (error, data, response) => {
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
 **ip** | **String**|      The target IPv4 address.      | 
 **roleContactNumber** | **String**|      Append personal contact numbers to the response if the system finds a relevant person profile.      | [optional] 
 **rolePersonalEmail** | **String**|      Append personal email addresses to the response if the system finds a relevant person profile.      | [optional] 
 **role** | **String**|      Lookup and append an employee of a certain role of the company.     Within the same API call, You can choose to lookup a person with a given role within this organisation that you might want to reach out to.      | [optional] 

### Return type

[**CompanyReveal**](CompanyReveal.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

