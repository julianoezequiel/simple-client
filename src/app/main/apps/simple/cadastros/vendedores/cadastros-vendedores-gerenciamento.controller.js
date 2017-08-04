(function ()
{
    'use strict';

    angular
        .module('app.cadastros.vendedores')
        .controller('UsuarioGerenciamentoController', UsuarioGerenciamentoController);

    /** @ngInject */
    function UsuarioGerenciamentoController($rootScope,$mdToast,api, $interval, $mdSidenav,$scope
        ,$mdDialog, $mdMedia,$document, $timeout,Usuarios)
    {
        var vm = this ;

        vm.path = ["Cadastros de usuários"];

        vm.usuario = Usuarios;

      console.log('modulo UsuarioGerenciamentoController');
      console.log(Usuarios);

    }
})();