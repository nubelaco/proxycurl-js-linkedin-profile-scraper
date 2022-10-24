# ProxycurlApi.MetaAPIApi

All URIs are relative to *https://proxycurl-web.127.0.0.1.nip.io:5002/proxycurl-dev*

Method | HTTP request | Description
------------- | ------------- | -------------
[**viewCreditBalanceEndpoint**](MetaAPIApi.md#viewCreditBalanceEndpoint) | **GET** /api/credit-balance | 



## viewCreditBalanceEndpoint

> CreditBalance viewCreditBalanceEndpoint()



Cost: 0 credit / successful request. Get your current credit(s) balance

### Example

```javascript
import ProxycurlApi from 'proxycurl_api';
let defaultClient = ProxycurlApi.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ProxycurlApi.MetaAPIApi();
apiInstance.viewCreditBalanceEndpoint((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**CreditBalance**](CreditBalance.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

