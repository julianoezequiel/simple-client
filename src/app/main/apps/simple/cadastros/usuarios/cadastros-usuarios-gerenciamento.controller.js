(function ()
{
    'use strict';

    angular
        .module('app.cadastros.usuarios')
        .controller('UsuarioGerenciamentoController', UsuarioGerenciamentoController);

    /** @ngInject */
    function UsuarioGerenciamentoController($rootScope,$mdToast,api, $interval, $mdSidenav,$scope
        ,$mdDialog, $mdMedia,$document, $timeout,Usuarios,$stateParams,$mdBottomSheet)
    {
        var vm = this ;

       
        vm.isOpen = true;
        vm.selectedMode = 'md-scale';
        vm.selectedDirection = 'left';

        vm.usuario = Usuarios.data.filter(function(usuario){
            return usuario.id == $stateParams.id;
        })[0];

        console.log('modulo UsuarioGerenciamentoController');
        console.log(vm.usuario);

      vm.isOpen = false;
      vm.demo = {
        isOpen: false,
        count: 0,
        selectedDirection: 'right'
      };

    
}

})();