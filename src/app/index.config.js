(function ()
{
    'use strict';

    angular
        .module('fuse')
        .config(config);

    /** @ngInject */
    function config( $mdThemingProvider)
    {
        // Put your custom configurations here
        $mdThemingProvider.theme("success-toast");
        $mdThemingProvider.theme("error-toast");
    }

})();