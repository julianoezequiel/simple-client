 (function ()
{
    'use strict';

    angular
        .module('app.simple-cliente.painel-controle', [   
        ])
        .config(config);

    /** @ngInject */
    function config(msNavigationServiceProvider,$stateProvider,msApiProvider)
    {


// State
        $stateProvider.state('app.simple_painel-controle', {
            url      : '/painel-controle',
            views    : {
               'content@app': {
                    templateUrl: 'app/main/apps/simple/painel-controle/painel-controle.template.html',
                    controller : 'PainelController as vm'
                }
            },
            resolve  : {
                DashboardData: function (msApi)
                {
                    return msApi.resolve('dashboard.project@get');
                }
            },
            bodyClass: 'painel-controle'
        });

         msNavigationServiceProvider.saveItem('painel-controle', {
            title : 'Painel de Controle',
            icon  : 'icon-tile-four',
            weight: 1,
            state : 'app.simple_painel-controle'
        });

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