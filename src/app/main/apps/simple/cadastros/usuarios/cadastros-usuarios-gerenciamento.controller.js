(function ()
{
    'use strict';

    angular
        .module('app.cadastros.usuarios')
        .controller('UsuarioGerenciamentoController', UsuarioGerenciamentoController);

    /** @ngInject */
    function UsuarioGerenciamentoController($rootScope,$mdToast,api, $interval, $mdSidenav,$scope
        ,$mdDialog, $mdMedia,$document, $timeout,Usuarios,$stateParams)
    {
        var vm = this ;

        vm.path = ["Cadastros de usuários"];

        vm.usuario = Usuarios.filter(function(usuario){
            return usuario.id == $stateParams.id;
        })[0];

        console.log('modulo UsuarioGerenciamentoController');
        console.log(vm.usuario);

    }
})();