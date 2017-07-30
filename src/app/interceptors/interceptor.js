(function ()
{
    'use strict';

    angular
        .module('fuse')
        .factory("loginInterceptor",function($q, $rootScope){
        	return {
		        responseError: function(rejection) {
		        	console.log('loginInterceptor');
		            if (rejection.config.url.indexOf('/user') > -1 ||
		                rejection.config.url.indexOf('/confirmacao') > -1) {
		                if (rejection.status == 500 || rejection.status == 0 || rejection.status == 404) {
		                    // $rootScope.errorLogin = 'Não foi possível iniciar a sessão!'
		                    // mensagemService.msgAtencao('Não foi possível iniciar a sessão!');
		                    // mensagemService.msgAtencao($rootScope.error);
		                } else {
		                    // $rootScope.errorLogin = rejection.data.body;
		                    if (rejection.status == 303) {
		                        $rootScope.$state.go('AlterarSenha');
		                    } else {
		                        // mensagemService.msgToaster(rejection.data);
		                    }
		                    // mensagemService.msgAtencao($rootScope.error);
		                }
		            }
		            return $q.reject(rejection);
		        }
		    };
        });

})();        