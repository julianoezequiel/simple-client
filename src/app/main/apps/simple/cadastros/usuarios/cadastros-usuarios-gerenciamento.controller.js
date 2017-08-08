(function() {
  'use strict';

  angular
    .module('app.cadastros.usuarios')
    .controller('UsuarioGerenciamentoController', UsuarioGerenciamentoController);

  /** @ngInject */
  function UsuarioGerenciamentoController($rootScope, $mdToast, api, $interval,
    $mdSidenav, $scope, $mdDialog, $mdMedia, $document, $timeout,
    Usuarios, $stateParams, $mdBottomSheet, Permissoes,CadastrosDiversos) {

    var vm = this;


    vm.isOpen = true;
    vm.selectedMode = 'md-scale';
    vm.selectedDirection = 'right';

    vm.usuario = Usuarios.data.filter(function(usuario) {
      return usuario.id == $stateParams.id;
    })[0];

    console.log('modulo UsuarioGerenciamentoController');
    console.log(vm.usuario);

    vm.voltar = function() {
      $rootScope.state.go('app.simple-cadastros-usuarios');
    }

    vm.activeMailPaneIndex = 0;
    vm.dynamicHeight = false;

    vm.situacoes = CadastrosDiversos.situacoes;

    vm.usuario = new Object();
    vm.usuario.senha = '';

    vm.permissoes = Permissoes;

    vm.items = [1, 2, 3, 4, 5];
    vm.selected = [];

    vm.toggle = function(item, list) {
      console.log(item);
    };

  }

})();
