(function() {
  'use strict';

  angular
    .module('app.pages.auth.login')
    .factory('loginService', loginService);

  /** @ngInject */
  function loginService($rootScope, api, $resource) {
    // Methods
    console.log('URL Base ' + api.baseUrl);

    var _auth = api.login.Auth;
    var _user = api.login.User;

    return {
      Auth: _auth,
      User: _user
    }

    //////////
  }
})();
