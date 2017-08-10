(function() {
  'use strict';

  angular
    .module('app.cadastros.clientes')
    .controller('ClientesGerenciamentoController', ClientesGerenciamentoController);

  /** @ngInject */
  function ClientesGerenciamentoController($rootScope, $mdToast, api, $interval, $mdSidenav, $scope, $mdDialog, $mdMedia, $document, $timeout, Clientes) {
    var vm = this;


    vm.voltar = function() {
      $rootScope.state.go('app.simple-cadastros-clientes');
    }

  }
})();
