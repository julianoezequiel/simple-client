(function() {
  'use strict';

  angular.module('app.simple.utils', []);

  angular
    .module('app.simple.utils')
    .factory('menssagemService', menssagemService);

  function menssagemService($mdToast) {

    var vm = this;

    vm.options = new Object();
    vm.options.content = 'simple app';
    vm.options.hideDelay = 3000;
    vm.options.position = 'bottom right';
    vm.options.theme = 'success-toast';

    function config(options) {
      options.content = options.content ? vm.options.content;
      options.hideDelay = options.hideDelay ? vm.options.hideDelay;
      options.position = options.position ? vm.options.position;
      return options;
    };

    var _sucesso = function(options) {
      options = config(options);
      options.theme = 'success-toast';
      showToaster(options);
    }

    var _atencao = function(options) {
      options = config(options);
      options.theme = 'error-toast';
      showToaster(options);
    }


    function showToaster(options) {

      $mdToast.show($mdToast.simple()
        .content(options.content)
        .hideDelay(options.hideDelay)
        .position(options.position)
        .theme(options.theme)
      }


      return {
        Sucesso: _sucesso,
        Atecao: _atencao
      }
      
    }
  }

})();
