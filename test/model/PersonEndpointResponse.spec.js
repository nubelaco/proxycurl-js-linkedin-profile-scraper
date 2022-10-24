/**
 * Proxycurl API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ProxycurlApi);
  }
}(this, function(expect, ProxycurlApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ProxycurlApi.PersonEndpointResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PersonEndpointResponse', function() {
    it('should create an instance of PersonEndpointResponse', function() {
      // uncomment below and update the code to test PersonEndpointResponse
      //var instance = new ProxycurlApi.PersonEndpointResponse();
      //expect(instance).to.be.a(ProxycurlApi.PersonEndpointResponse);
    });

    it('should have the property publicIdentifier (base name: "public_identifier")', function() {
      // uncomment below and update the code to test the property publicIdentifier
      //var instance = new ProxycurlApi.PersonEndpointResponse();
      //expect(instance).to.be();
    });

    it('should have the property profilePicUrl (base name: "profile_pic_url")', function() {
      // uncomment below and update the code to test the property profilePicUrl
      //var instance = new ProxycurlApi.PersonEndpointResponse();
      //expect(instance).to.be();
    });

    it('should have the property backgroundCoverImageUrl (base name: "background_cover_image_url")', function() {
      // uncomment below and update the code to test the property backgroundCoverImageUrl
      //var instance = new ProxycurlApi.PersonEndpointResponse();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "first_name")', function() {
      // uncomment below and update the code to test the property firstName
      //var instance = new ProxycurlApi.PersonEndpointResponse();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "last_name")', function() {
      // uncomment below and update the code to test the property lastName
      //var instance = new ProxycurlApi.PersonEndpointResponse();
      //expect(instance).to.be();
    });

    it('should have the property fullName (base name: "full_name")', function() {
      // uncomment below and update the code to test the property fullName
      //var instance = new ProxycurlApi.PersonEndpointResponse();
      //expect(instance).to.be();
    });

    it('should have the property occupation (base name: "occupation")', function() {
      // uncomment below and update the code to test the property occupation
      //var instance = new ProxycurlApi.PersonEndpointResponse();
      //expect(instance).to.be();
    });

    it('should have the property headline (base name: "headline")', function() {
      // uncomment below and update the code to test the property headline
      //var instance = new ProxycurlApi.PersonEndpointResponse();
      //expect(instance).to.be();
    });

    it('should have the property summary (base name: "summary")', function() {
      // uncomment below and update the code to test the property summary
      //var instance = new ProxycurlApi.PersonEndpointResponse();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instance = new ProxycurlApi.PersonEndpointResponse();
      //expect(instance).to.be();
    });

    it('should have the property countryFullName (base name: "country_full_name")', function() {
      // uncomment below and update the code to test the property countryFullName
      //var instance = new ProxycurlApi.PersonEndpointResponse();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instance = new ProxycurlApi.PersonEndpointResponse();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new ProxycurlApi.PersonEndpointResponse();
      //expect(instance).to.be();
    });

    it('should have the property experiences (base name: "experiences")', function() {
      // uncomment below and update the code to test the property experiences
      //var instance = new ProxycurlApi.PersonEndpointResponse();
      //expect(instance).to.be();
    });

    it('should have the property education (base name: "education")', function() {
      // uncomment below and update the code to test the property education
      //var instance = new ProxycurlApi.PersonEndpointResponse();
      //expect(instance).to.be();
    });

    it('should have the property languages (base name: "languages")', function() {
      // uncomment below and update the code to test the property languages
      //var instance = new ProxycurlApi.PersonEndpointResponse();
      //expect(instance).to.be();
    });

    it('should have the property accomplishmentOrganisations (base name: "accomplishment_organisations")', function() {
      // uncomment below and update the code to test the property accomplishmentOrganisations
      //var instance = new ProxycurlApi.PersonEndpointResponse();
      //expect(instance).to.be();
    });

    it('should have the property accomplishmentPublications (base name: "accomplishment_publications")', function() {
      // uncomment below and update the code to test the property accomplishmentPublications
      //var instance = new ProxycurlApi.PersonEndpointResponse();
      //expect(instance).to.be();
    });

    it('should have the property accomplishmentHonorsAwards (base name: "accomplishment_honors_awards")', function() {
      // uncomment below and update the code to test the property accomplishmentHonorsAwards
      //var instance = new ProxycurlApi.PersonEndpointResponse();
      //expect(instance).to.be();
    });

    it('should have the property accomplishmentPatents (base name: "accomplishment_patents")', function() {
      // uncomment below and update the code to test the property accomplishmentPatents
      //var instance = new ProxycurlApi.PersonEndpointResponse();
      //expect(instance).to.be();
    });

    it('should have the property accomplishmentCourses (base name: "accomplishment_courses")', function() {
      // uncomment below and update the code to test the property accomplishmentCourses
      //var instance = new ProxycurlApi.PersonEndpointResponse();
      //expect(instance).to.be();
    });

    it('should have the property accomplishmentProjects (base name: "accomplishment_projects")', function() {
      // uncomment below and update the code to test the property accomplishmentProjects
      //var instance = new ProxycurlApi.PersonEndpointResponse();
      //expect(instance).to.be();
    });

    it('should have the property accomplishmentTestScores (base name: "accomplishment_test_scores")', function() {
      // uncomment below and update the code to test the property accomplishmentTestScores
      //var instance = new ProxycurlApi.PersonEndpointResponse();
      //expect(instance).to.be();
    });

    it('should have the property volunteerWork (base name: "volunteer_work")', function() {
      // uncomment below and update the code to test the property volunteerWork
      //var instance = new ProxycurlApi.PersonEndpointResponse();
      //expect(instance).to.be();
    });

    it('should have the property certifications (base name: "certifications")', function() {
      // uncomment below and update the code to test the property certifications
      //var instance = new ProxycurlApi.PersonEndpointResponse();
      //expect(instance).to.be();
    });

    it('should have the property connections (base name: "connections")', function() {
      // uncomment below and update the code to test the property connections
      //var instance = new ProxycurlApi.PersonEndpointResponse();
      //expect(instance).to.be();
    });

    it('should have the property peopleAlsoViewed (base name: "people_also_viewed")', function() {
      // uncomment below and update the code to test the property peopleAlsoViewed
      //var instance = new ProxycurlApi.PersonEndpointResponse();
      //expect(instance).to.be();
    });

    it('should have the property recommendations (base name: "recommendations")', function() {
      // uncomment below and update the code to test the property recommendations
      //var instance = new ProxycurlApi.PersonEndpointResponse();
      //expect(instance).to.be();
    });

    it('should have the property activities (base name: "activities")', function() {
      // uncomment below and update the code to test the property activities
      //var instance = new ProxycurlApi.PersonEndpointResponse();
      //expect(instance).to.be();
    });

    it('should have the property similarlyNamedProfiles (base name: "similarly_named_profiles")', function() {
      // uncomment below and update the code to test the property similarlyNamedProfiles
      //var instance = new ProxycurlApi.PersonEndpointResponse();
      //expect(instance).to.be();
    });

    it('should have the property articles (base name: "articles")', function() {
      // uncomment below and update the code to test the property articles
      //var instance = new ProxycurlApi.PersonEndpointResponse();
      //expect(instance).to.be();
    });

    it('should have the property groups (base name: "groups")', function() {
      // uncomment below and update the code to test the property groups
      //var instance = new ProxycurlApi.PersonEndpointResponse();
      //expect(instance).to.be();
    });

    it('should have the property skills (base name: "skills")', function() {
      // uncomment below and update the code to test the property skills
      //var instance = new ProxycurlApi.PersonEndpointResponse();
      //expect(instance).to.be();
    });

    it('should have the property inferredSalary (base name: "inferred_salary")', function() {
      // uncomment below and update the code to test the property inferredSalary
      //var instance = new ProxycurlApi.PersonEndpointResponse();
      //expect(instance).to.be();
    });

    it('should have the property gender (base name: "gender")', function() {
      // uncomment below and update the code to test the property gender
      //var instance = new ProxycurlApi.PersonEndpointResponse();
      //expect(instance).to.be();
    });

    it('should have the property birthDate (base name: "birth_date")', function() {
      // uncomment below and update the code to test the property birthDate
      //var instance = new ProxycurlApi.PersonEndpointResponse();
      //expect(instance).to.be();
    });

    it('should have the property industry (base name: "industry")', function() {
      // uncomment below and update the code to test the property industry
      //var instance = new ProxycurlApi.PersonEndpointResponse();
      //expect(instance).to.be();
    });

    it('should have the property interests (base name: "interests")', function() {
      // uncomment below and update the code to test the property interests
      //var instance = new ProxycurlApi.PersonEndpointResponse();
      //expect(instance).to.be();
    });

    it('should have the property extra (base name: "extra")', function() {
      // uncomment below and update the code to test the property extra
      //var instance = new ProxycurlApi.PersonEndpointResponse();
      //expect(instance).to.be();
    });

    it('should have the property personalEmails (base name: "personal_emails")', function() {
      // uncomment below and update the code to test the property personalEmails
      //var instance = new ProxycurlApi.PersonEndpointResponse();
      //expect(instance).to.be();
    });

    it('should have the property personalNumbers (base name: "personal_numbers")', function() {
      // uncomment below and update the code to test the property personalNumbers
      //var instance = new ProxycurlApi.PersonEndpointResponse();
      //expect(instance).to.be();
    });

  });

}));
