(function() {
  'use strict';

  angular
    .module('app.cadastros.usuarios', [])
    .config(config);

  /** @ngInject */
  function config(msNavigationServiceProvider, $stateProvider, msApiProvider) {

    // State
    $stateProvider.state('app.simple-cadastros-usuarios', {
      url: '/cadastros/usuarios',
      views: {
        'content@app': {
          templateUrl: 'app/main/apps/simple/cadastros/usuarios/cadastros-usuarios.template.html',
          controller: 'UsuariosController as vm'
        }
      },
      resolve: {
        Usuarios: function(msApi) {
          return msApi.resolve('usuarios@get');
        }
      },
      bodyClass: 'cadastros-usuarios'
    });

    // State
    $stateProvider.state('app.simple-cadastros-usuarios-gerenciamento', {
      url: '/cadastros/usuarios/gerenciamento/:id',
      views: {
        'content@app': {
          templateUrl: 'app/main/apps/simple/cadastros/usuarios/cadastros-usuarios-gerenciamento.template.html',
          controller: 'UsuarioGerenciamentoController as vm'
        }
      },
      resolve: {
        Usuarios: function(msApi, $stateParams) {
          return msApi.resolve('usuarios@get');
        },
        Permissoes: function(msApi, $stateParams) {
          return msApi.resolve('permissoes@get');
        },
        CadastrosDiversos: function(msApi, $stateParams) {
          return msApi.resolve('CadastrosDiversos@get');
        }
      },
      bodyClass: 'cadastros-usuarios'
    });

    // Api        
    msApiProvider.register('usuarios', ['app/data/simple/usuarios.json']);
    msApiProvider.register('permissoes', ['app/data/simple/permissoes.json']);
    msApiProvider.register('CadastrosDiversos', ['app/data/simple/CadastrosDiversos.json']);


  }

})();
