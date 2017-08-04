(function ()
{
    'use strict';

    angular
        .module('app.cadastros.clientes')
        .controller('ClienteController', ClienteController);

    /** @ngInject */
    function ClienteController($rootScope,$mdToast,api, $interval, $mdSidenav,$scope
        ,$mdDialog, $mdMedia,$document, $timeout,Clientes)
    {
        var vm = this ;

         // Data
        vm.clientes = Clientes.data;

        vm.topDirections = ['left', 'up'];
        vm.bottomDirections = ['down', 'right'];
        vm.isOpen = false;
        vm.availableModes = ['md-fling', 'md-scale']; 
        vm.selectedMode = 'md-scale';
        vm.availableDirections = ['up', 'down', 'left', 'right'];
        vm.selectedDirection = 'right';

        vm.activeMailPaneIndex = 0;

        vm.editar = function(id){
            $rootScope.state.go('app.simple-cadastros-clientes-gerenciamento',{'id':id});
        }

        vm.novo = function(){
            $rootScope.state.go('app.simple-cadastros-clientes-gerenciamento');
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