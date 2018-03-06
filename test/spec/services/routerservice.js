'use strict';

describe('Service: routerservice', function () {

  // load the service's module
  beforeEach(module('new1App'));

  // instantiate service
  var routerservice;
  beforeEach(inject(function (_routerservice_) {
    routerservice = _routerservice_;
  }));

  it('should do something', function () {
    expect(!!routerservice).toBe(true);
  });

});
