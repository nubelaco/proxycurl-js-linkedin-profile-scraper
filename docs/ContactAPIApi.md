# ProxycurlApi.ContactAPIApi

All URIs are relative to *https://nubela.co/proxycurl*

Method | HTTP request | Description
------------- | ------------- | -------------
[**disposableEmailAddressCheckEndpoint**](ContactAPIApi.md#disposableEmailAddressCheckEndpoint) | **GET** /api/disposable-email | Cost: 0 credit / request. Given an email address, checks if the email address belongs to a disposable email service.
[**personalContactNumberLookupEndpoint**](ContactAPIApi.md#personalContactNumberLookupEndpoint) | **GET** /api/contact-api/personal-contact | Cost: 1 credit / contact number returned. Given an LinkedIn profile, returns a list of personal contact numbers belonging to this identity.
[**personalEmailLookupEndpoint**](ContactAPIApi.md#personalEmailLookupEndpoint) | **GET** /api/contact-api/personal-email | Cost: 1 credit / email returned. Given an LinkedIn profile, returns a list of personal emails belonging to this identity. Emails are verified to be deliverable.
[**reverseWorkEmailLookupEndpoint**](ContactAPIApi.md#reverseWorkEmailLookupEndpoint) | **GET** /api/linkedin/profile/resolve/email | Cost: 3 credits / successful request. Resolve LinkedIn Profile from a work email address
[**workEmailLookupEndpoint**](ContactAPIApi.md#workEmailLookupEndpoint) | **GET** /api/linkedin/profile/email | Cost: 3 credits / request. Lookup work email address of a LinkedIn Person Profile.  Email addresses returned are verified to not be role-based or catch-all emails. Email addresses returned by our API endpoint come with a 95+% deliverability guarantee  **Endpoint behavior**  *This endpoint* **_may not_** *return results immediately.*  If you provided a webhook in your request parameter, our application will call your webhook with the result once. See &#x60;Webhook request&#x60; below.



## disposableEmailAddressCheckEndpoint

> DisposableEmail disposableEmailAddressCheckEndpoint(email)

Cost: 0 credit / request. Given an email address, checks if the email address belongs to a disposable email service.

### Example

```javascript
import ProxycurlApi from 'proxycurl-js';
let defaultClient = ProxycurlApi.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ProxycurlApi.ContactAPIApi();
let email = steven@nubela.co; // String | Email address to check
apiInstance.disposableEmailAddressCheckEndpoint(email, (error, data, response) => {
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
 **email** | **String**| Email address to check | 

### Return type

[**DisposableEmail**](DisposableEmail.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## personalContactNumberLookupEndpoint

> PDLPhoneNumberResult personalContactNumberLookupEndpoint(linkedinProfileUrl)

Cost: 1 credit / contact number returned. Given an LinkedIn profile, returns a list of personal contact numbers belonging to this identity.

### Example

```javascript
import ProxycurlApi from 'proxycurl-js';
let defaultClient = ProxycurlApi.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ProxycurlApi.ContactAPIApi();
let linkedinProfileUrl = https://linkedin.com/in/test-phone-number; // String |      LinkedIn Profile URL of the person you want to extract personal contact numbers from.     
apiInstance.personalContactNumberLookupEndpoint(linkedinProfileUrl, (error, data, response) => {
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
 **linkedinProfileUrl** | **String**|      LinkedIn Profile URL of the person you want to extract personal contact numbers from.      | 

### Return type

[**PDLPhoneNumberResult**](PDLPhoneNumberResult.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## personalEmailLookupEndpoint

> PDLEmailResult personalEmailLookupEndpoint(linkedinProfileUrl, opts)

Cost: 1 credit / email returned. Given an LinkedIn profile, returns a list of personal emails belonging to this identity. Emails are verified to be deliverable.

### Example

```javascript
import ProxycurlApi from 'proxycurl-js';
let defaultClient = ProxycurlApi.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ProxycurlApi.ContactAPIApi();
let linkedinProfileUrl = https://linkedin.com/in/steven-goh-6738131b; // String |      LinkedIn Profile URL of the person you want to extract personal email addresses from.     
let opts = {
  'emailValidation': include // String |      Perform deliverability validation on each email. (Costs 1 extra credit per email found).          Takes the following values:      * include - Perform email validation.      * exclude (default) - Do not perform email validation.     
};
apiInstance.personalEmailLookupEndpoint(linkedinProfileUrl, opts, (error, data, response) => {
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
 **linkedinProfileUrl** | **String**|      LinkedIn Profile URL of the person you want to extract personal email addresses from.      | 
 **emailValidation** | **String**|      Perform deliverability validation on each email. (Costs 1 extra credit per email found).          Takes the following values:      * include - Perform email validation.      * exclude (default) - Do not perform email validation.      | [optional] 

### Return type

[**PDLEmailResult**](PDLEmailResult.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## reverseWorkEmailLookupEndpoint

> UrlResult reverseWorkEmailLookupEndpoint(workEmail)

Cost: 3 credits / successful request. Resolve LinkedIn Profile from a work email address

### Example

```javascript
import ProxycurlApi from 'proxycurl-js';
let defaultClient = ProxycurlApi.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ProxycurlApi.ContactAPIApi();
let workEmail = danial@nubela.co; // String | Work email address of the user
apiInstance.reverseWorkEmailLookupEndpoint(workEmail, (error, data, response) => {
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
 **workEmail** | **String**| Work email address of the user | 

### Return type

[**UrlResult**](UrlResult.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## workEmailLookupEndpoint

> ExtractionEmailResult workEmailLookupEndpoint(linkedinProfileUrl, opts)

Cost: 3 credits / request. Lookup work email address of a LinkedIn Person Profile.  Email addresses returned are verified to not be role-based or catch-all emails. Email addresses returned by our API endpoint come with a 95+% deliverability guarantee  **Endpoint behavior**  *This endpoint* **_may not_** *return results immediately.*  If you provided a webhook in your request parameter, our application will call your webhook with the result once. See &#x60;Webhook request&#x60; below.

### Example

```javascript
import ProxycurlApi from 'proxycurl-js';
let defaultClient = ProxycurlApi.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ProxycurlApi.ContactAPIApi();
let linkedinProfileUrl = https://sg.linkedin.com/in/williamhgates; // String |      Linkedin Profile URL of the person you want to     extract work email address from.     
let opts = {
  'callbackUrl': https://webhook.site/29e12f17-d5a2-400a-9d08-42ee9d83600a // String |      Webhook to notify your application when     the request has finished processing.     
};
apiInstance.workEmailLookupEndpoint(linkedinProfileUrl, opts, (error, data, response) => {
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
 **linkedinProfileUrl** | **String**|      Linkedin Profile URL of the person you want to     extract work email address from.      | 
 **callbackUrl** | **String**|      Webhook to notify your application when     the request has finished processing.      | [optional] 

### Return type

[**ExtractionEmailResult**](ExtractionEmailResult.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

