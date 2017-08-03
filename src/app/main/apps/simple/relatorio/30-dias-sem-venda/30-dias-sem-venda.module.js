(function ()
{
    'use strict';

    angular
        .module('app.relatorios.30-dias-sem-venda', [
        ])
        .config(config);

    /** @ngInject */
    function config(msNavigationServiceProvider,$stateProvider,msApiProvider)
    {

        // State
        $stateProvider.state('app.simple-cadastros-usuarios', {
            url      : '/cadastros/usuarios',
            views    : {
               'content@app': {
                    templateUrl: 'app/main/apps/simple/cadastros/usuarios/cadastros-usuarios.template.html',
                    controller : 'UsuariosController as vm'
                }
            },
             resolve: {
                Usuarios: function (msApi)
                {
                    return msApi.resolve('tables.usuarios@get');
                }
            },
            bodyClass: 'cadastros-usuarios'
        });

         // State
        $stateProvider.state('app.simple-cadastros-gerenciamento', {
            url      : '/cadastros/usuarios/gerenciamento/:id',
            views    : {
               'content@app': {
                    templateUrl: 'app/main/apps/simple/cadastros/usuarios/cadastros-usuarios-gerenciamento.template.html',
                    controller : 'UsuarioGerenciamentoController as vm'
                }
            },
             resolve: {
                Usuarios: function (msApi,$stateParams)
                {   
                    console.log("rota");
                    var usuarios =  msApi.resolve('tables.usuarios@get');
                    return usuarios;
                }
            },
            bodyClass: 'cadastros-usuarios'
        });


        msNavigationServiceProvider.saveItem('cadastros.usuarios', {
            title: 'Usuários',
            state: 'app.simple-cadastros-usuarios',
            icon : 'icon-account-circle'
        });

        // Api
        
        msApiProvider.register('tables.usuarios', ['app/data/tables/usuarios.json']);

    }

})();