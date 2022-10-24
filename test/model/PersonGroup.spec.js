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
    instance = new ProxycurlApi.PersonGroup();
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

  describe('PersonGroup', function() {
    it('should create an instance of PersonGroup', function() {
      // uncomment below and update the code to test PersonGroup
      //var instance = new ProxycurlApi.PersonGroup();
      //expect(instance).to.be.a(ProxycurlApi.PersonGroup);
    });

    it('should have the property profilePicUrl (base name: "profile_pic_url")', function() {
      // uncomment below and update the code to test the property profilePicUrl
      //var instance = new ProxycurlApi.PersonGroup();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new ProxycurlApi.PersonGroup();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new ProxycurlApi.PersonGroup();
      //expect(instance).to.be();
    });

  });

}));
