# ProxycurlApi.LinkedinCompany

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**linkedinInternalId** | **String** |          LinkedIn&#39;s Internal and immutable ID of this Company profile.                   | [optional] 
**description** | **String** |  | [optional] 
**website** | **String** |  | [optional] 
**industry** | **String** |  | [optional] 
**companySize** | **[Number]** | Listed range of company head count | [optional] 
**companySizeOnLinkedin** | **Number** |  | [optional] 
**hq** | [**LinkedinCompanyHq**](LinkedinCompanyHq.md) |  | [optional] 
**companyType** | **String** | Possible values:            &#x60;EDUCATIONAL&#x60;: Educational Institution          &#x60;GOVERNMENT_AGENCY&#x60;: Government Agency          &#x60;NON_PROFIT&#x60; : Nonprofit          &#x60;PARTNERSHIP&#x60; : Partnership          &#x60;PRIVATELY_HELD&#x60;: Privately Held          &#x60;PUBLIC_COMPANY&#x60;: Public Company          &#x60;SELF_EMPLOYED&#x60;: Self-Employed          &#x60;SELF_OWNED&#x60;: Sole Proprietorship | [optional] 
**foundedYear** | **Number** |  | [optional] 
**specialities** | **[String]** |  | [optional] 
**locations** | [**[CompanyLocation]**](CompanyLocation.md) |  | [optional] 
**name** | **String** |  | [optional] 
**tagline** | **String** |  | [optional] 
**universalNameId** | **String** |  | [optional] 
**profilePicUrl** | **String** |  | [optional] 
**backgroundCoverImageUrl** | **String** |  | [optional] 
**searchId** | **String** | Useable with [Job listing endpoint](#jobs-api-jobs-listing-endpoint) | [optional] 
**similarCompanies** | [**[SimilarCompany]**](SimilarCompany.md) |  | [optional] 
**updates** | [**[CompanyUpdate]**](CompanyUpdate.md) |  | [optional] 
**followerCount** | **Number** |  | [optional] 
**acquisitions** | [**LinkedinCompanyAcquisitions**](LinkedinCompanyAcquisitions.md) |  | [optional] 
**exitData** | [**[Exit]**](Exit.md) |  | [optional] 
**extra** | [**LinkedinCompanyExtra**](LinkedinCompanyExtra.md) |  | [optional] 
**fundingData** | [**[Funding]**](Funding.md) | Company Funding data when &#x60;funding_data&#x3D;include&#x60; | [optional] 
**categories** | **[String]** | A list of categories&#x60; | [optional] 


