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
        .factory("tokenInterceptor", function ($q, $rootScope,constantesConfig) {
    return {
        'request': function ($config) {
            console.log('Interceptor login');
             var isRestCall = $config.url.indexOf('restrict') > -1;
                if (isRestCall && angular.isDefined($rootScope.authToken)) {
                    var authToken = $rootScope.authToken;
                   // if (TopPontoWebApp.useAuthTokenHeader) {
                        $config.headers['Authorization'] = authToken;
                        if($config.url.indexOf(constantesConfig.baseUrl)<0){
                            $config.url =  constantesConfig.baseUrl + $config.url;
                        }
                    //} else {
                    //    $config.url = constantesConfig.baseUrl + $config.url + "?token=" + authToken;
                    //}
                }
                return $config || $q.when($config);
        }
    };
});
