(function ()
{
    'use strict';

    angular
        .module('app.simple.administrativo', [
             'app.simple.financeiro',
             'app.simple.controle-de-estoque'

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