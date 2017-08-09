(function() {
  'use strict';

  angular
    .module('app.cadastros.fornecedores')
    .controller('FornecedorsGerenciamentoController', FornecedorsGerenciamentoController);

  /** @ngInject */
  function FornecedorsGerenciamentoController($rootScope, $mdToast, api,
    $interval, $mdSidenav, $scope, $mdDialog, $mdMedia, $document, $timeout, Fornecedores) {

    var vm = this;


    vm.fornecedores = Fornecedores;


  }
})();
