(function ()
{
    'use strict';

    angular
        .module('app.cadastros.usuarios')
        .controller('UsuariosController', usuariosController);

    /** @ngInject */
    function usuariosController($rootScope,$mdToast,api, $interval, $mdSidenav,$scope
        ,$mdDialog, $mdMedia,$document, $timeout,Usuarios,msNavigationService)
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

        //menu de navegação
        msNavigationServiceProvider.saveItem('cadastros.usuarios', {
            title: 'Usuários',
            state: 'app.simple-cadastros-usuarios',
            icon : 'icon-account-circle',
            hidden: function ()
            {
                return true; 
            }
        });
             

    }
})();