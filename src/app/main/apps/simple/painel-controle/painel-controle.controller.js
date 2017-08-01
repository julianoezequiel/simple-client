(function ()
{
    'use strict';

    angular
        .module('app.simple.painel-controle')
        .controller('PainelController', PainelController);

    /** @ngInject */
    function PainelController($rootScope,loginService,$mdToast,api, $interval, $mdSidenav, DashboardData,$scope)
    {
        var vm = this ;

        vm.path = ["Painel de Controle"];

        vm.atalhos = [{
            "descricao":"Usuários",
            "icone":"account-circle",
            "state": 'app.simple-cadastros-clientes',
        },{
            "descricao":"Clientes",
            "icone":"cart",
            "state": 'app.simple-cadastros-clientes',
        },{
            "descricao":"Fornecedores",
            "icone":"truck",
            "state": 'app.simple-cadastros-clientes',
        },{
            "descricao":"Vendedores",
            "icone":"wallet-travel",
            "state": 'app.simple-cadastros-clientes',
        }]

        vm.redirecionar = function(state){
            console.log('redirecionar ' + state);
            if(state){
               $rootScope.state.go(state);
            }
        }
        vm.dashboardData = DashboardData;
        
        vm.weatherWidget = vm.dashboardData.weatherWidget;

         // Now widget
        vm.nowWidget = {
            now   : {
                second: '',
                minute: '',
                hour  : '',
                day   : '',
                month : '',
                year  : ''
            },
            ticker: function ()
            {
                var now = moment();
                vm.nowWidget.now = {
                    second : now.format('ss'),
                    minute : now.format('mm'),
                    hour   : now.format('HH'),
                    day    : now.format('D'),
                    weekDay: now.format('dddd'),
                    month  : now.format('MMMM'),
                    year   : now.format('YYYY')
                };
            }
        };

         // Now widget ticker
        vm.nowWidget.ticker();

        var nowWidgetTicker = $interval(vm.nowWidget.ticker, 1000);

        $scope.$on('$destroy', function ()
        {
            $interval.cancel(nowWidgetTicker);
        });


    }
})();