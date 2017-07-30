(function ()
{
    'use strict';

    angular
        .module('app.pages.auth.login')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController($rootScope,loginService,$mdToast,api)
    {
        var vm = this;
        // Data

        // Methods
        vm.login = function(){
            console.log("Login");

            // if(vm.form.email !== 'julianoezequiel@gmail.com' && vm.form.password !== 'admin'){
            //     erroLogin()
            // }else{
                $rootScope.state.go("app.simple_painel-controle");

            // }
            var user = new Object();
            user.email = vm.form.email;
            user.senha = vm.form.password;
            $rootScope.user =user;

            // loginService.Auth.save(user,function(response){
            //      var authToken = response.token;
            //         $rootScope.authToken = authToken;
            //         $rootScope.$sessionStorage.authToken = authToken;
            //         //recebe o usuario autenticado
            //         loginService.User.get(function (user) {
            //             $rootScope.user = user;
            //             $rootScope.autenticado = true;
            //             $rootScope.state.go("app.dashboards_project");
            //         });

                    
            // }, function (error) {
            //         if(error.status == 401){
            //             if(error.data && error.data.message){
            //                 erroLogin(error.data.message); 
            //             }
            //         }else  if (error.status == 303) {
            //             $rootScope.username = vm.username;
            //             $rootScope.$state.go('AlterarSenha', {id: error.data.entidade.idOperador});
            //         }
            // });            

            //redireciona para a dash
            // $rootScope.state.go("app.dashboards_project");
        }

        var erroLogin = function(message){
           
            console.log('erro login');

            $mdToast.show(
                $mdToast.simple()
                        .content(message)
                        .hideDelay(3000)
                        .position('bottom right')
                        .theme("error-toast")
            // {
                // template : '<md-toast id="language-message" layout="column" layout-align="center start"><div class="md-toast-content md-warn">' + message + '</div></md-toast>',
                // hideDelay: 7000,
                // position : 'top ',
                // parent   : '#content'
            // }
            );
        }

        //////////
    }
})();