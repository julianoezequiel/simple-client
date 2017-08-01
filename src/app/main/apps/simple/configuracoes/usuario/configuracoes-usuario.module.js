 (function ()
{
    'use strict';

    angular
        .module('app.configuracoes.usuario', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider,msNavigationServiceProvider){   
        
        // State
        $stateProvider.state('app.configuracoes.usuario', {
            url      : '/configuracoes/usuario',
            views    : {
                'content@app.configuracoes.usuario': {
                    templateUrl: 'app/main/simple/configuracoes/usuario/configuracoes-usuario.template.html',
                    controller : 'ConfiguracoesController as vm'
                }
            },
            bodyClass: 'configuracoes-usuario'
        });


        // msNavigationServiceProvider.saveItem('simple.empresas', {
        //     title : 'Painel de Controle',
        //     icon  : 'icon-tile-four',
        //     weight: 1
        // });

        // msNavigationServiceProvider.saveItem('apps.dashboards.project', {
        //     title: 'Project',
        //     state: 'app.dashboards_project'
        // });

        // msNavigationServiceProvider.saveItem('apps.dashboards.server', {
        //     title: 'Server',
        //     state: 'app.dashboards_server'
        // });

        // msNavigationServiceProvider.saveItem('apps.dashboards.analytics', {
        //     title: 'Analytics',
        //     state: 'app.dashboards_analytics'
        // });
    }

})();