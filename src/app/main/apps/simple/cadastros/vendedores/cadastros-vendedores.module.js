(function ()
{
    'use strict';

    angular
        .module('app.cadastros.vendedores', [

        ])
        .config(config);

    /** @ngInject */
    function config(msNavigationServiceProvider,$stateProvider)
    {

       // State
        $stateProvider.state('app.simple-cadastros-vendedores', {
            url      : '/cadastros/clientes',
            views    : {
               'content@app': {
                    templateUrl: 'app/main/apps/simple/cadastros/clientes/cadastros-clientes.template.html',
                    controller : 'ClienteController as vm'
                }
            },
            bodyClass: 'cadastros-clientes'
        });

        msNavigationServiceProvider.saveItem('cadastros.clientes', {
            title: 'Clientes',
            state: 'app.simple-cadastros-clientes',
            icon : 'icon-cart',
        });

    }

})();