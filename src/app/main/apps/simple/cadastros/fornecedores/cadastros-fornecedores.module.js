(function() {
  'use strict';

  angular
    .module('app.cadastros.fornecedores', [

    ])
    .config(config);

  /** @ngInject */
  function config($stateProvider, msApiProvider) {

    // State
    $stateProvider.state('app.simple-cadastros-fornecedores', {
      url: '/cadastros/fornecedores',
      views: {
        'content@app': {
          templateUrl: 'app/main/apps/simple/cadastros/fornecedores/cadastros-fornecedores.template.html',
          controller: 'FornecedorController as vm'
        }
      },
      resolve: {
        Fornecedores: function(msApi) {
          return msApi.resolve('fornecedores@get');
        }
      },
      bodyClass: 'cadastros-fornecedores'
    });

    // State
    $stateProvider.state('app.simple-cadastros-fornecedores-gerenciamento', {
      url: '/cadastros/fornecedores/gerenciamento/:id',
      views: {
        'content@app': {
          templateUrl: 'app/main/apps/simple/cadastros/fornecedores/cadastros-fornecedores-gerenciamento.template.html',
          controller: 'FornecedorsGerenciamentoController as vm'
        }
      },
      resolve: {
        Fornecedores: function(msApi) {
          return msApi.resolve('fornecedores@get');
        }
      },
      bodyClass: 'cadastros-fornecedores'
    });


    // Api        
    msApiProvider.register('fornecedores', ['app/data/simple/fornecedores.json']);



  }

})();
