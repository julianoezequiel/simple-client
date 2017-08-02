(function ()
{
    'use strict';

    angular
        .module('app.cadastros.usuarios')
        .controller('UsuarioGerenciamentoController', UsuarioGerenciamentoController);

    /** @ngInject */
    function UsuarioGerenciamentoController($rootScope,$mdToast,api, $interval, $mdSidenav,$scope
        ,$mdDialog, $mdMedia,$document, $timeout,Usuario)
    {
        var vm = this ;

        vm.path = ["Cadastros de usuários"];

        vm.usuario = Usuario;

    }
})();