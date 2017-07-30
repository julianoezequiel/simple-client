/**
 * Realiza a interceptação das requisições e adiciona o token de acesso
 *
 * @author juliano.ezequiel
 */
(function ()
{
    'use strict';

    angular
        .module('fuse')
        .factory("tokenInterceptor", function ($q, $rootScope) {
    return {
        'request': function ($config) {
            
             var isRestCall = $config.url.indexOf('restrict') > -1;
                if (isRestCall && angular.isDefined($rootScope.authToken)) {

                    var authToken = $rootScope.authToken;
                   // if (TopPontoWebApp.useAuthTokenHeader) {
                        $config.headers['Authorization'] = authToken;
                        console.log('URL FILTRO '+ $config.url);
                        console.log('headers' + $config.headers)
                         // $config.url =  $rootScope.baseUrl + $config.url;
                        
                    //} else {
                    //    $config.url = constantesConfig.baseUrl + $config.url + "?token=" + authToken;
                    //}
                }
                return $config || $q.when($config);
        }
    };
});

})();        
