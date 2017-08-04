(function ()
{
    'use strict';

    angular
        // .module('app.simple.cadastros', [
        //    'app.cadastros.clientes',
        //    'app.cadastros.empresas',
        //    'app.cadastros.produtos',
        //    'app.cadastros.usuarios',
        //    'app.cadastros.vendedores'
        // ])
        .module('app.simple.cadastros', [         
           'app.cadastros.usuarios',
           'app.cadastros.clientes'
        ])
        .config(config);

    /** @ngInject */
    function config(msNavigationServiceProvider)
    {

        msNavigationServiceProvider.saveItem('cadastros', {
            title : 'Cadastros',
            icon  : 'icon-pencil',
            weight: 1,
             hidden: function ()
            {
                console.log('adicionando menu principal');
                
                return false;
            }
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