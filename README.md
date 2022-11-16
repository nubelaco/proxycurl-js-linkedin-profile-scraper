# `proxycurl-js-linkedin-profile-scraper` - The official Javascript/NodeJS client for Proxycurl API to scrape and enrich LinkedIn profiles

* [What is Proxycurl?](#what-is-proxycurl)
* [Installation](#installation)
* [Getting Started](#getting-started)
* [Documentation for API Endpoints](#documentation-for-api-endpoints)
* [Documentation for Models](#documentation-for-models)
* [Documentation for Authorization](#documentation-for-authorization)

## What is Proxycurl?

**Proxycurl** is an enrichment API to fetch fresh data on people and businesses. We are a fully-managed API that sits between your application and raw data so that you can focus on building the application; instead of worrying about building a web-scraping team and processing data at scale.

With Proxycurl, you can programatically:

- Enrich profiles on people and companies
- Lookup people and companies
- Lookup contact information on people and companies
- Check if an email address is of a disposable nature
- [And more..](https://nubela.co/proxycurl/docs#explain-it-to-me-like-i-39-m-5)

Visit [Proxycurl's website](https://nubela.co/proxycurl) for more details.

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

Install it via:

```shell
npm install proxycurl-js-linkedin-profile-scraper
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your proxycurl-js-linkedin-profile-scraper from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var ProxycurlApi = require('proxycurl-js-linkedin-profile-scraper');

var defaultClient = ProxycurlApi.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuth
var BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

var api = new ProxycurlApi.CompanyAPIApi()
var opts = {
  'companyLocation': sg, // {String}      The location / region of company.     ISO 3166-1 alpha-2 codes     
  'companyDomain': accenture.com, // {String} Company website or Company domain Requires either `company_domain` or `company_name`
  'companyName': Accenture // {String} Company Name Requires either `company_domain` or `company_name`
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.companyLookupEndpoint(opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://nubela.co/proxycurl*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ProxycurlApi.CompanyAPIApi* | [**companyLookupEndpoint**](docs/CompanyAPIApi.md#companyLookupEndpoint) | **GET** /api/linkedin/company/resolve | Cost: 2 credits / successful request. Resolve Company LinkedIn Profile from company name,     domain name and location.
*ProxycurlApi.CompanyAPIApi* | [**companyProfileEndpoint**](docs/CompanyAPIApi.md#companyProfileEndpoint) | **GET** /api/linkedin/company | Cost: 1 credit / successful request. Get structured data of a Company Profile
*ProxycurlApi.CompanyAPIApi* | [**companyProfilePictureEndpoint**](docs/CompanyAPIApi.md#companyProfilePictureEndpoint) | **GET** /api/linkedin/company/profile-picture | Cost: 0 credit / successful request. Get the profile picture of a company.  Profile pictures are served from cached company profiles found within [LinkDB](https://nubela.co/proxycurl/linkdb). If the profile does not exist within [LinkDB](https://nubela.co/proxycurl/linkdb), then the API will return a &#x60;404&#x60; status code.
*ProxycurlApi.CompanyAPIApi* | [**employeeCountEndpoint**](docs/CompanyAPIApi.md#employeeCountEndpoint) | **GET** /api/linkedin/company/employees/count/ | Cost: 1 credit / successful request. Get a number of total employees of a Company.  Get an employee count of this company from various sources.
*ProxycurlApi.CompanyAPIApi* | [**employeeListingEndpoint**](docs/CompanyAPIApi.md#employeeListingEndpoint) | **GET** /api/linkedin/company/employees/ | Cost: 3 credits / employee returned. Get a list of employees of a Company.  This API endpoint is limited by LinkDB which is populated with profiles in the US, UK, Canada, Israel, Australia, Ireland, New Zealand and Singapore. As such, this endpoint is best used to list employees working in companies based in those locations only.
*ProxycurlApi.CompanyAPIApi* | [**employeeSearchAPIEndpoint**](docs/CompanyAPIApi.md#employeeSearchAPIEndpoint) | **GET** /api/linkedin/company/employee/search/ | Cost: 10 credits / successful request. Search employees of a target by their job title.
*ProxycurlApi.ContactAPIApi* | [**disposableEmailAddressCheckEndpoint**](docs/ContactAPIApi.md#disposableEmailAddressCheckEndpoint) | **GET** /api/disposable-email | Cost: 0 credit / request. Given an email address, checks if the email address belongs to a disposable email service.
*ProxycurlApi.ContactAPIApi* | [**personalContactNumberLookupEndpoint**](docs/ContactAPIApi.md#personalContactNumberLookupEndpoint) | **GET** /api/contact-api/personal-contact | Cost: 1 credit / contact number returned. Given an LinkedIn profile, returns a list of personal contact numbers belonging to this identity.
*ProxycurlApi.ContactAPIApi* | [**personalEmailLookupEndpoint**](docs/ContactAPIApi.md#personalEmailLookupEndpoint) | **GET** /api/contact-api/personal-email | Cost: 1 credit / email returned. Given an LinkedIn profile, returns a list of personal emails belonging to this identity. Emails are verified to be deliverable.
*ProxycurlApi.ContactAPIApi* | [**reverseWorkEmailLookupEndpoint**](docs/ContactAPIApi.md#reverseWorkEmailLookupEndpoint) | **GET** /api/linkedin/profile/resolve/email | Cost: 3 credits / successful request. Resolve LinkedIn Profile from a work email address
*ProxycurlApi.ContactAPIApi* | [**workEmailLookupEndpoint**](docs/ContactAPIApi.md#workEmailLookupEndpoint) | **GET** /api/linkedin/profile/email | Cost: 3 credits / request. Lookup work email address of a LinkedIn Person Profile.  Email addresses returned are verified to not be role-based or catch-all emails. Email addresses returned by our API endpoint come with a 95+% deliverability guarantee  **Endpoint behavior**  *This endpoint* **_may not_** *return results immediately.*  If you provided a webhook in your request parameter, our application will call your webhook with the result once. See &#x60;Webhook request&#x60; below.
*ProxycurlApi.JobsAPIApi* | [**jobProfileEndpoint**](docs/JobsAPIApi.md#jobProfileEndpoint) | **GET** /api/linkedin/job | Cost: 2 credits / successful request. Get structured data of a LinkedIn Job Profile
*ProxycurlApi.JobsAPIApi* | [**jobsListingEndpoint**](docs/JobsAPIApi.md#jobsListingEndpoint) | **GET** /api/v2/linkedin/company/job | Cost: 2 credits / successful request. List jobs posted by a company on LinkedIn
*ProxycurlApi.MetaAPIApi* | [**viewCreditBalanceEndpoint**](docs/MetaAPIApi.md#viewCreditBalanceEndpoint) | **GET** /api/credit-balance | Cost: 0 credit / successful request. Get your current credit(s) balance
*ProxycurlApi.PeopleAPIApi* | [**personLookupEndpoint**](docs/PeopleAPIApi.md#personLookupEndpoint) | **GET** /api/linkedin/profile/resolve | Cost: 2 credits / successful request. Resolve LinkedIn Profile
*ProxycurlApi.PeopleAPIApi* | [**personProfileEndpoint**](docs/PeopleAPIApi.md#personProfileEndpoint) | **GET** /api/v2/linkedin | Cost: 1 credit / successful request. Get structured data of a Personal Profile
*ProxycurlApi.PeopleAPIApi* | [**personProfilePictureEndpoint**](docs/PeopleAPIApi.md#personProfilePictureEndpoint) | **GET** /api/linkedin/person/profile-picture | Cost: 0 credit / successful request. Get the profile picture of a person.  Profile pictures are served from cached people profiles found within [LinkDB](https://nubela.co/proxycurl/linkdb). If the profile does not exist within [LinkDB](https://nubela.co/proxycurl/linkdb), then the API will return a &#x60;404&#x60; status code.
*ProxycurlApi.PeopleAPIApi* | [**roleLookupEndpoint**](docs/PeopleAPIApi.md#roleLookupEndpoint) | **GET** /api/find/company/role | Cost: 3 credits / successful request. Finds the closest (person) profile with a given role in a Company. For example, you can use this endpoint to find the \&quot;CTO\&quot; of \&quot;Apple\&quot;. This API endpoint returns only one result that is the closest match.  There is also a [role search](https://nubela.co/blog/search-employees-with-employee-listing-api/) under the Employee Listing Endpoint if you require:  * precision on the target company * a list of employees that matches a role (instead of one result).
*ProxycurlApi.RevealAPIApi* | [**revealEndpoint**](docs/RevealAPIApi.md#revealEndpoint) | **GET** /api/reveal/company | Cost: 2 credits / successful request. Deanonymize an IPv4 address and associate the Company behind the IPv4 address.
*ProxycurlApi.SchoolAPIApi* | [**schoolProfileEndpoint**](docs/SchoolAPIApi.md#schoolProfileEndpoint) | **GET** /api/linkedin/school | Cost: 1 credit / successful request. Get structured data of a LinkedIn School Profile


## Documentation for Models

 - [ProxycurlApi.AccomplishmentOrg](docs/AccomplishmentOrg.md)
 - [ProxycurlApi.AcquiredCompany](docs/AcquiredCompany.md)
 - [ProxycurlApi.AcquiredCompanyAnnouncedDate](docs/AcquiredCompanyAnnouncedDate.md)
 - [ProxycurlApi.Acquisition](docs/Acquisition.md)
 - [ProxycurlApi.AcquisitionAcquiredBy](docs/AcquisitionAcquiredBy.md)
 - [ProxycurlApi.Acquisitor](docs/Acquisitor.md)
 - [ProxycurlApi.Activity](docs/Activity.md)
 - [ProxycurlApi.Article](docs/Article.md)
 - [ProxycurlApi.Certification](docs/Certification.md)
 - [ProxycurlApi.CompanyDetails](docs/CompanyDetails.md)
 - [ProxycurlApi.CompanyDetailsFoundingDate](docs/CompanyDetailsFoundingDate.md)
 - [ProxycurlApi.CompanyDetailsIpoDate](docs/CompanyDetailsIpoDate.md)
 - [ProxycurlApi.CompanyLocation](docs/CompanyLocation.md)
 - [ProxycurlApi.CompanyReveal](docs/CompanyReveal.md)
 - [ProxycurlApi.CompanyRevealCompany](docs/CompanyRevealCompany.md)
 - [ProxycurlApi.CompanyRevealRoleProfile](docs/CompanyRevealRoleProfile.md)
 - [ProxycurlApi.CompanyUpdate](docs/CompanyUpdate.md)
 - [ProxycurlApi.CompanyUpdatePostedOn](docs/CompanyUpdatePostedOn.md)
 - [ProxycurlApi.Course](docs/Course.md)
 - [ProxycurlApi.CreditBalance](docs/CreditBalance.md)
 - [ProxycurlApi.DisposableEmail](docs/DisposableEmail.md)
 - [ProxycurlApi.Education](docs/Education.md)
 - [ProxycurlApi.Employee](docs/Employee.md)
 - [ProxycurlApi.EmployeeCount](docs/EmployeeCount.md)
 - [ProxycurlApi.EmployeeList](docs/EmployeeList.md)
 - [ProxycurlApi.EmployeeProfile](docs/EmployeeProfile.md)
 - [ProxycurlApi.Exit](docs/Exit.md)
 - [ProxycurlApi.Experience](docs/Experience.md)
 - [ProxycurlApi.ExtractionEmailResult](docs/ExtractionEmailResult.md)
 - [ProxycurlApi.Funding](docs/Funding.md)
 - [ProxycurlApi.FundingAnnouncedDate](docs/FundingAnnouncedDate.md)
 - [ProxycurlApi.HonourAward](docs/HonourAward.md)
 - [ProxycurlApi.HonourAwardIssuedOn](docs/HonourAwardIssuedOn.md)
 - [ProxycurlApi.InferredSalary](docs/InferredSalary.md)
 - [ProxycurlApi.Investor](docs/Investor.md)
 - [ProxycurlApi.Job](docs/Job.md)
 - [ProxycurlApi.JobCompany](docs/JobCompany.md)
 - [ProxycurlApi.JobListPage](docs/JobListPage.md)
 - [ProxycurlApi.JobLocation](docs/JobLocation.md)
 - [ProxycurlApi.LinkedinCompany](docs/LinkedinCompany.md)
 - [ProxycurlApi.LinkedinCompanyAcquisitions](docs/LinkedinCompanyAcquisitions.md)
 - [ProxycurlApi.LinkedinCompanyExtra](docs/LinkedinCompanyExtra.md)
 - [ProxycurlApi.LinkedinCompanyHq](docs/LinkedinCompanyHq.md)
 - [ProxycurlApi.LinkedinJob](docs/LinkedinJob.md)
 - [ProxycurlApi.LinkedinJobCompany](docs/LinkedinJobCompany.md)
 - [ProxycurlApi.LinkedinJobLocation](docs/LinkedinJobLocation.md)
 - [ProxycurlApi.LinkedinSchool](docs/LinkedinSchool.md)
 - [ProxycurlApi.ModelDate](docs/ModelDate.md)
 - [ProxycurlApi.PDLEmailResult](docs/PDLEmailResult.md)
 - [ProxycurlApi.PDLPhoneNumberResult](docs/PDLPhoneNumberResult.md)
 - [ProxycurlApi.Patent](docs/Patent.md)
 - [ProxycurlApi.PatentIssuedOn](docs/PatentIssuedOn.md)
 - [ProxycurlApi.PeopleAlsoViewed](docs/PeopleAlsoViewed.md)
 - [ProxycurlApi.Person](docs/Person.md)
 - [ProxycurlApi.PersonEndpointResponse](docs/PersonEndpointResponse.md)
 - [ProxycurlApi.PersonEndpointResponseBirthDate](docs/PersonEndpointResponseBirthDate.md)
 - [ProxycurlApi.PersonEndpointResponseExtra](docs/PersonEndpointResponseExtra.md)
 - [ProxycurlApi.PersonEndpointResponseInferredSalary](docs/PersonEndpointResponseInferredSalary.md)
 - [ProxycurlApi.PersonExtra](docs/PersonExtra.md)
 - [ProxycurlApi.PersonGroup](docs/PersonGroup.md)
 - [ProxycurlApi.ProfilePicture](docs/ProfilePicture.md)
 - [ProxycurlApi.Project](docs/Project.md)
 - [ProxycurlApi.Publication](docs/Publication.md)
 - [ProxycurlApi.PublicationPublishedOn](docs/PublicationPublishedOn.md)
 - [ProxycurlApi.RoleSearchResult](docs/RoleSearchResult.md)
 - [ProxycurlApi.SimilarCompany](docs/SimilarCompany.md)
 - [ProxycurlApi.SimilarProfile](docs/SimilarProfile.md)
 - [ProxycurlApi.TestScore](docs/TestScore.md)
 - [ProxycurlApi.TestScoreDateOn](docs/TestScoreDateOn.md)
 - [ProxycurlApi.UrlResult](docs/UrlResult.md)
 - [ProxycurlApi.UrlResult1](docs/UrlResult1.md)
 - [ProxycurlApi.UrlResult2](docs/UrlResult2.md)
 - [ProxycurlApi.VolunteeringExperience](docs/VolunteeringExperience.md)


## Documentation for Authorization



### BearerAuth

- **Type**: Bearer authentication

