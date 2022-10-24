# ProxycurlApi.EmployeeProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**publicIdentifier** | **String** |                  The vanity identifier of the public LinkedIn profile.                 The vanity identifier comes after the &#x60;/in/&#x60; part of the LinkedIn Profile URL                 in the following format: &#x60;https://www.linkedin.com/in/&lt;public_identifier&gt;&#x60;              | [optional] 
**profilePicUrl** | **String** |                  A temporary link to the user&#39;s profile picture that is valid for 30 minutes.                  The temporal nature of the link is by design to prevent having Proxycurl be the mirror for the images.                 The developer is expected to handle these images by downloading the image and re-hosting the image.                 See [this post](https://nubela.co/blog/why-is-the-api-returning-s3-links-for-profile-pictures-scraped-from-linkedin-profiles/) for context.                 Some profile pictures might be of the standard LinkedIn&#39;s profile picture placeholder. It is so because. See [this post](https://nubela.co/blog/why-do-most-linkedin-profiles-fetched-via-the-person-profile-endpoint-return-a-placeholder-profile-picture/) for context.              | [optional] 
**backgroundCoverImageUrl** | **String** |                  A temporary link to the user&#39;s background cover picture                 that is valid for 30 minutes.                 The temporal nature of the link is by design to prevent                 having Proxycurl be the mirror for the images.                 The developer is expected to handle these images                  by downloading the image and re-hosting the image.                  See [this post](https://nubela.co/blog/why-is-the-api-returning-s3-links-for-profile-pictures-scraped-from-linkedin-profiles/) for context.              | [optional] 
**firstName** | **String** | First name of the user. | [optional] 
**lastName** | **String** | Last name of the user. | [optional] 
**fullName** | **String** |                  Full name of the user (&#x60;first_name&#x60; + &#x60;last_name&#x60;)              | [optional] 
**occupation** | **String** |                  The title and company name of the user&#39;s current employment.              | [optional] 
**headline** | **String** |                  The tagline written by the user for his profile.              | [optional] 
**summary** | **String** |                  A blurb (longer than the tagline) written by the user for his profile.              | [optional] 
**country** | **String** |                  The user&#39;s country of residence depicted by                 a 2-letter country code (ISO 3166-1 alpha-2).              | [optional] 
**countryFullName** | **String** | The user&#39;s country of residence, in English words. | [optional] 
**city** | **String** | The city that the user is living at. | [optional] 
**state** | **String** | The state that the user is living at. | [optional] 
**experiences** | **Array** | The user&#39;s list of historic work experiences. | [optional] 
**education** | **Array** | The user&#39;s list of education background. | [optional] 
**languages** | **Array** |                  A list of languages that the user claims to be familiar with,                 and has added to his/her profile.                 Do note that we do not have the proficiency level as                 that data point is not available on a public LinkedIn profile.              | [optional] 
**accomplishmentOrganisations** | **Array** |                  List of noteworthy organizations that this user is part of.              | [optional] 
**accomplishmentPublications** | **Array** |                  List of noteworthy publications that this user has partook in.              | [optional] 
**accomplishmentHonorsAwards** | **Array** |                  List of noteworthy honours and awards that this user has won.              | [optional] 
**accomplishmentPatents** | **Array** | List of noteworthy patents won by this user. | [optional] 
**accomplishmentCourses** | **Array** | List of noteworthy courses partook by this user. | [optional] 
**accomplishmentProjects** | **Array** |                  List of noteworthy projects undertaken by this user.              | [optional] 
**accomplishmentTestScores** | **Array** |                  List of noteworthy test scores accomplished by this user.              | [optional] 
**volunteerWork** | **Array** | List of historic volunteer work experiences. | [optional] 
**certifications** | **Array** |                  List of noteworthy certifications accomplished by this user.              | [optional] 
**connections** | **Number** | Total *count* of LinkedIn connections. | [optional] 
**peopleAlsoViewed** | **Array** |                  A list of other LinkedIn profiles closely related to this user.              | [optional] 
**recommendations** | **Array** |                  List of recommendations made by other users about this profile.              | [optional] 
**activities** | **Array** | A list of LinkedIn status activities. | [optional] 
**similarlyNamedProfiles** | **Array** |                  A list of other LinkedIn profiles with similar names.              | [optional] 
**articles** | **Array** |                  A list of content-based articles posted by this user.              | [optional] 
**groups** | **Array** |                  A list of LinkedIn groups that this user is a part of.\&quot;,              | [optional] 


