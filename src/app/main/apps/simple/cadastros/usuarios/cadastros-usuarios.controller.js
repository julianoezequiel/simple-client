(function ()
{
    'use strict';

    angular
        .module('app.cadastros.usuarios')
        .controller('UsuariosController', usuariosController);

    /** @ngInject */
    function usuariosController($rootScope,$mdToast,api, $interval, $mdSidenav,$scope
        ,$mdDialog, $mdMedia,$document, $timeout,Usuarios)
    {
        var vm = this ;

        vm.path = ["Cadastros de usuários"];

      
         // Data
        vm.usuarios = Usuarios.data;

        vm.activeMailPaneIndex = 0;

        vm.editar = function(id){
            $rootScope.state.go('app.simple-cadastros-gerenciamento',{'id':id});
        }

        vm.novo = function(){
            $rootScope.state.go('app.simple-cadastros-gerenciamento');
        }

        vm.dtOptions = {
            dom       : '<"top"f>rt<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>>',
            pagingType: 'simple',
            autoWidth : false,
            responsive: true
        };
             

    }
})();