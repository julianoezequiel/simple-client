(function ()
{
    'use strict';

    angular
        .module('app.cadastros.usuarios', [

        ])
        .config(config);

    /** @ngInject */
    function config(msNavigationServiceProvider)
    {

        // msNavigationServiceProvider.saveItem('simple', {
        //     title : 'Painel de Controle',
        //     icon  : 'icon-tile-four',
        //     weight: 1
        // });

        msNavigationServiceProvider.saveItem('cadastros.usuarios', {
            title: 'Usuários',
            state: 'app.dashboards_project'
        });

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