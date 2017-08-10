(function() {
  'use strict';

  angular
    .module('fuse')
    .controller('IndexController', IndexController);

  /** @ngInject */
  function IndexController(fuseTheming, msNavigationService, msApi) {
    var vm = this;

    // Data
    vm.themes = fuseTheming.themes;

    //menu de navegação
    msNavigationService.saveItem('cadastros.usuarios', {
      title: 'Usuários',
      state: 'app.simple-cadastros-usuarios',
      icon: 'icon-account-circle',
      hidden: function() {
        // console.log('adicionando menu');
        // var data  = msApi.resolve('permissao@get',function(data){
        //     var v = data.permissao.filter(function(val){
        //         return val.tipo == 'usuarios'
        //     })[0];
        //     return v.acesso; 
        // });

        return false;

      }
    });

    msNavigationService.saveItem('cadastros.clientes', {
      title: 'Clientes',
      state: 'app.simple-cadastros-clientes',
      icon: 'icon-cart',
      hidden: function() {
        // console.log('adicionando menu');
        // var data  = msApi.resolve('permissao@get',function(data){
        //     var v = data.permissao.filter(function(val){
        //         return val.tipo == 'clientes'
        //     })[0];
        //     return v.acesso; 
        // });

        return false;
      }
    });

    msNavigationService.saveItem('cadastros.fornecedores', {
      title: 'Fornecedores',
      state: 'app.simple-cadastros-fornecedores',
      icon: 'icon-truck',
      hidden: function() {
        // console.log('adicionando menu');
        // var data  = msApi.resolve('permissao@get',function(data){
        //     var v = data.permissao.filter(function(val){
        //         return val.tipo == 'clientes'
        //     })[0];
        //     return v.acesso; 
        // });

        return false;
      }
    });

    msApi.register('permissao', ['app/data/permissao.json']);

  }
})();
