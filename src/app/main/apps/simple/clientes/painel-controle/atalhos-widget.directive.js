(function ()
{
    'use strict';

    angular
        .module('app.simple-cliente.painel-controle')
        .directive('atalhoWidget', atalhoWidget);

        function atalhoWidget(){
        	return{
        		scope:{
        			valor :'=?'
        		},
        		templateUrl:'app/main/apps/simple/painel-controle/atalhos-widget.template.html',
        		 link       : function ($scope, element, attrs, ngModel)
	            {

	            }
        	}
        }

})();        

