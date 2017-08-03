 (function ()
{
    'use strict';

    angular
        .module('app.simple.cadastros-basicos', [
            'app.cadastros-basicos.cargo',
            'app.cadastros-basicos.CFOP-Natureza-da-operacao',
            'app.cadastros-basicos.cores',
            'app.cadastros-basicos.departamentos',
            'app.cadastros-basicos.forma-de-pagamento',     
            'app.cadastros-basicos.grupos',
            'app.cadastros-basicos.marcas',
            'app.cadastros-basicos.NCM',
            'app.cadastros-basicos.sub-grupos',
            'app.cadastros-basicos.tipo-de-servico'
            'app.cadastros-basicos.tributos',
            'app.cadastros-basicos.unidade-de-medida'    
        ])
        .config(config);

    /** @ngInject */
    function config(msNavigationServiceProvider)
    {

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