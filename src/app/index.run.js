(function ()
{
    'use strict';

    angular
        .module('fuse')
        .run(runBlock);

    /** @ngInject */
    function runBlock($rootScope, $timeout, $state,$sessionStorage,$localStorage,$location,loginService)
    {
        // Activate loading indicator
        var stateChangeStartEvent = $rootScope.$on('$stateChangeStart', function ()
        {
            $rootScope.loadingProgress = true;
        });

        // De-activate loading indicator
        var stateChangeSuccessEvent = $rootScope.$on('$stateChangeSuccess', function ()
        {
            $timeout(function ()
            {
                $rootScope.loadingProgress = false;
            });
        });

        // Store state in the root scope for easy access
        $rootScope.state = $state;

        // Cleanup
        $rootScope.$on('$destroy', function ()
        {
            stateChangeStartEvent();
            stateChangeSuccessEvent();
        });

        //para trabalhar com o armazenamento do navegador
        $rootScope.$sessionStorage = $sessionStorage;
        $rootScope.$localStorage = $localStorage;

        // var authToken = $rootScope.$sessionStorage.authToken; 
        // if (authToken != "" && authToken != undefined) {
        //     $rootScope.authToken = authToken;
        //     loginService.User.get(
        //         function (user) {
        //             $rootScope.user = user;
        //             $rootScope.autenticado = true;
        //         }, function (error) {
        //             $location.path("/login");
        //             $rootScope.autenticado = false;
        //             delete $rootScope.user;
        //             delete $rootScope.authToken;
        //             $rootScope.$sessionStorage.$reset();
        //     });
        // }else{
        //     $location.path("/login");
        //     $rootScope.autenticado = false;
        //     delete $rootScope.user;
        //     delete $rootScope.authToken;
        //     $rootScope.$sessionStorage.$reset();
        // }
    }
})();