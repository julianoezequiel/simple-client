(function ()
{
    'use strict';

    angular
        .module('app.cadastros.empresas')
        .controller('UsuariosController', usuariosController);

    /** @ngInject */
    function usuariosController($rootScope,$mdToast,api, $interval, $mdSidenav,$scope
        ,$mdDialog, $mdMedia,$document, $timeout,Usuarios)
    {
        var vm = this ;

        vm.path = ["Cadastros de usuários"];

      
         // Data
        vm.usuarios = Usuarios.data;

        vm.topDirections = ['left', 'up'];
        vm.bottomDirections = ['down', 'right'];
        vm.isOpen = false;
        vm.availableModes = ['md-fling', 'md-scale']; 
        vm.selectedMode = 'md-scale';
        vm.availableDirections = ['up', 'down', 'left', 'right'];
        vm.selectedDirection = 'right';

        vm.activeMailPaneIndex = 0;

        vm.editar = function(id){
            $rootScope.state.go('app.simple-cadastros-gerenciamento',{'id':id});
        }

        vm.novo = function(){
            $rootScope.state.go('app.simple-cadastros-gerenciamento');
        }

        vm.dtOptions = {
            'dom'       : '<"top"f>rt<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>>',
            'pagingType': 'simple',
            'autoWidth' : false,
            'responsive': true,
            'columnDefs': [
                { 'width': '20%', 'targets': 2 }
              ]
        };
             

    }
})();