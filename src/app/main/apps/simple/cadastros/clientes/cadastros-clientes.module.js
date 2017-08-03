(function ()
{
    'use strict';

    angular
        .module('app.cadastros.clientes', [

        ])
        .config(config);

    /** @ngInject */
    function config(msNavigationServiceProvider,$stateProvider,msApiProvider)
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
                    return msApi.resolve('tables.clientes@get');
                }
            },
            bodyClass: 'cadastros-clientes'
        });   


        // Api        
        msApiProvider.register('tables.clientes', ['app/data/tables/clientes.json']);    

    }

})();