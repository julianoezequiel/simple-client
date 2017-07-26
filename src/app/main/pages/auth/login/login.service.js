(function ()
{
    'use strict';

    angular
        .module('app.pages.auth.login')
        .factory('loginService', loginService);

    /** @ngInject */
    function loginService($rootScope,api,$resource)
    {
        // Methods
        console.log('URL Base ' + api.baseUrl);
        
        var _auth = api.login.Auth;

        return {
            Auth: _auth,
        }

        //////////
    }
})();