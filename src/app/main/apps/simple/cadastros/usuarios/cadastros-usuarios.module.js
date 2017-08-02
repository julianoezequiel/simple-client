(function ()
{
    'use strict';

    angular
        .module('app.cadastros.usuarios', [
        ])
        .config(config);

    /** @ngInject */
    function config(msNavigationServiceProvider,$stateProvider,msApiProvider)
    {

        // State
        $stateProvider.state('app.simple-cadastros-usuarios', {
            url      : '/cadastros/usuarios',
            views    : {
               'content@app': {
                    templateUrl: 'app/main/apps/simple/cadastros/usuarios/cadastros-usuarios.template.html',
                    controller : 'UsuariosController as vm'
                }
            },
             resolve: {
                Employees: function (msApi)
                {
                    return msApi.resolve('tables.employees100@get');
                }
            },
            bodyClass: 'cadastros-usuarios'
        });

        msNavigationServiceProvider.saveItem('cadastros.usuarios', {
            title: 'Usuários',
            state: 'app.simple-cadastros-usuarios',
             icon : 'icon-account-circle'
        });

        // Api
        
        msApiProvider.register('tables.employees100', ['app/data/tables/employees100.json']);

    }

})();