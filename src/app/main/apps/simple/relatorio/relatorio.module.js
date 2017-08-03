(function ()
{
    'use strict';

    angular
        .module('app.simple.relatorio', [
            'app.relatorios.30-dias-sem-venda',
            'app.relatorios.ajustes',
            'app.relatorios.comandas',
            'app.relatorios.comissoes',
            'app.relatorios.conta-correntes-cliente',
            'app.relatorios.entrada-produtos',
            'app.relatorios.estoque',
            'app.relatorios.estoque-minimo',
            'app.relatorios.estoque-valorizado',
            'app.relatorios.gerenciar_nf',
            'app.relatorios.ofertas',
            'app.relatorios.produtos-cadastrados',
            'app.relatorios.validades'
        ])
        .config(config);

    /** @ngInject */
    function config(msNavigationServiceProvider)
    {

        
        msNavigationServiceProvider.saveItem('relatorio', {
            title : 'Relatórios',
            icon  : 'icon-tile-four',
            weight: 1
        });

        msNavigationServiceProvider.saveItem('relatorio.estoque', {
            title: 'Estoque',
            state: '',
            icon  : 'icon-tile-four',
        });

        msNavigationServiceProvider.saveItem('relatorio.oferta', {
            title: 'Ofertas',
            state: '',
            icon  : 'icon-tile-four',
        });

        msNavigationServiceProvider.saveItem('relatorio.est_val', {
            title: 'Est. Valorizado',
            state: '',
            icon  : 'icon-tile-four',
        });

         msNavigationServiceProvider.saveItem('relatorio.30_dias_sem_venda', {
            title: '30 dias sem venda',
            state: '',
            icon  : 'icon-tile-four',
        });

        msNavigationServiceProvider.saveItem('relatorio.produtos_cadastrados', {
            title: 'Produtos',
            state: '',
            icon  : 'icon-tile-four',
        });

        msNavigationServiceProvider.saveItem('relatorio.conta_correntes_cliente', {
            title: 'C.C clientes',
            state: '',
            icon  : 'icon-tile-four',
        });

         msNavigationServiceProvider.saveItem('relatorio.ent_produtos', {
            title: 'Entrada produtos',
            state: '',
            icon  : 'icon-tile-four',
        });

        msNavigationServiceProvider.saveItem('relatorio.comandas', {
            title: 'Comandas',
            state: '',
            icon  : 'icon-tile-four',
        });

         msNavigationServiceProvider.saveItem('relatorio.validades', {
            title: 'Validades',
            state: '',
            icon  : 'icon-tile-four',
        });

        msNavigationServiceProvider.saveItem('relatorio.comissoes', {
            title: 'Comissões',
            state: '',
            icon  : 'icon-tile-four',
        });

         msNavigationServiceProvider.saveItem('relatorio.gerenciar_nf', {
            title: 'Gerenciar NF',
            state: '',
            icon  : 'icon-tile-four',
        });

        msNavigationServiceProvider.saveItem('relatorio.estoque_minimo', {
            title: 'Estoque Mínimo',
            state: '',
            icon  : 'icon-tile-four',
        });

         msNavigationServiceProvider.saveItem('relatorio.ajustes', {
            title: 'Ajustes',
            state: '',
            icon  : 'icon-tile-four',
        });

        
    }

})();