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
    instance = new ProxycurlApi.CompanyAPIApi();
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

  describe('CompanyAPIApi', function() {
    describe('companyLookupEndpoint', function() {
      it('should call companyLookupEndpoint successfully', function(done) {
        //uncomment below and update the code to test companyLookupEndpoint
        //instance.companyLookupEndpoint(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('companyProfileEndpoint', function() {
      it('should call companyProfileEndpoint successfully', function(done) {
        //uncomment below and update the code to test companyProfileEndpoint
        //instance.companyProfileEndpoint(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('companyProfilePictureEndpoint', function() {
      it('should call companyProfilePictureEndpoint successfully', function(done) {
        //uncomment below and update the code to test companyProfilePictureEndpoint
        //instance.companyProfilePictureEndpoint(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('employeeCountEndpoint', function() {
      it('should call employeeCountEndpoint successfully', function(done) {
        //uncomment below and update the code to test employeeCountEndpoint
        //instance.employeeCountEndpoint(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('employeeListingEndpoint', function() {
      it('should call employeeListingEndpoint successfully', function(done) {
        //uncomment below and update the code to test employeeListingEndpoint
        //instance.employeeListingEndpoint(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('employeeSearchAPIEndpoint', function() {
      it('should call employeeSearchAPIEndpoint successfully', function(done) {
        //uncomment below and update the code to test employeeSearchAPIEndpoint
        //instance.employeeSearchAPIEndpoint(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
