(function ()
{
    'use strict';

    angular
        .module('app.cadastros.clientes', [
        ])
        .config(config);

    /** @ngInject */
    function config($stateProvider,msApiProvider)
    {

       // State
        $stateProvider.state('app.simple-cadastros-clientes', {
            url      : '/cadastros/clientes',
            views    : {
               'content@app': {
                    templateUrl: 'app/main/apps/simple/cadastros/clientes/cadastros-clientes.template.html',
                    controller : 'ClienteController as vm'
                }
            },
            resolve: {
                Clientes: function (msApi)
                {
                    return msApi.resolve('clientes@get');
                }
            },
            bodyClass: 'cadastros-clientes'
        });   

         // State
        $stateProvider.state('app.simple-cadastros-clientes-gerenciamento', {
            url      : '/cadastros/clientes/gerenciamento/:id',
            views    : {
               'content@app': {
                    templateUrl: 'app/main/apps/simple/cadastros/clientes/cadastros-clientes-gerenciamento.template.html',
                    controller : 'ClientesGerenciamentoController as vm'
                }
            },
             resolve: {
                Clientes: function (msApi)
                {
                    return msApi.resolve('clientes@get');
                }
            },
            bodyClass: 'cadastros-clientes'
        });


        // Api        
        msApiProvider.register('clientes', ['app/data/simple/clientes.json']);    

    }

})();