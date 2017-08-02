(function ()
{
    'use strict';

    angular
        .module('app.cadastros.usuarios')
        .controller('UsuariosController', usuariosController);

    /** @ngInject */
    function usuariosController($rootScope,$mdToast,api, $interval, $mdSidenav,$scope
        ,$mdDialog, $mdMedia,$document, $timeout,Employees)
    {
        var vm = this ;

        vm.path = ["Cadastros de usuários"];

      
         // Data
        vm.employees = Employees.data;

        vm.activeMailPaneIndex = 0;

        vm.dtOptions = {
            dom       : '<"top"f>rt<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>>',
            pagingType: 'simple',
            autoWidth : false,
            responsive: true
        };
             

    }
})();