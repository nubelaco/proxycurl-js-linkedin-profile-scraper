# ProxycurlApi.EmployeeCount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalEmployee** | **Number** |  | [optional] 
**linkedinEmployeeCount** | **Number** | The scraped value of employee count of this company from it&#39;s LinkedIn profile. This value does not respect &#x60;employement_status&#x60; parameter. It will always return the curent employee count of this company from LinkedIn. | [optional] 
**linkdbEmployeeCount** | **Number** | The total number of employees found in LinkDB for this company. This value is limited by pre-crawled LinkedIn profiles stored in [LinkDB](https://nubela.co/proxycurl/linkdb) | [optional] 
**regressionNotice** | **String** |  | [optional] [default to &#39;Hello developer, we have renamed &#x60;total_employee&#x60; key to &#x60;linkdb_employee_count&#x60; to fix the bad grammar. We have kept &#x60;total_employee&#x60; for backwards compatibility, so please do not use it as we will remove it down the road. To see which keys are officially supported, refer to our API docs at https://nubela.co/proxycurl/docs#company-api-employee-count-endpoint&#39;]


