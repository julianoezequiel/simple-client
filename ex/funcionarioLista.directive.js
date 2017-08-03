
/* 
 * @Author: tharle.camargo
 * @Date:   05-07-2017
 * @Project: TopPontoWeb
 */
(function () {
    'use strict';

    angular
            .module('toppontoweb.funcionario')
            .directive('funcionarioLista', FuncionarioLista);

    FuncionarioLista.$inject = [
        '$rootScope',
        'funcionarioService',
        '$stateParams',
        'mensagemService',
        'formatDate',
        'EntityHandler',
        'constantesConfig',
        '$timeout',
        'permissoesService',
        'formatPis',
        '$sce'
    ];

    function FuncionarioLista($rootScope, funcionarioService, $stateParams, mensagemService,
                                    formatDate, EntityHandler, constantesConfig, $timeout, permissoesService, formatPis, $sce) {
        return {
            templateUrl: 'app/cadastros/funcionario/funcionario/templates/funcionario.template.html',
            link: function (scope, element, attr) {

                // ---------------------------------
                // INIT DADOS 
                // ---------------------------------
                scope.erroLista = [];
                scope.idFuncionario = $stateParams.id;

                scope.permissaoExcluir = permissoesService.isPermitido("FuncionarioExcluir");

                var className =  "datatable-lista-item-text datatable-lista-item-text-120";

                //Opções da datatable
                scope.opcoes = {
                    // fixedHeader: {
                    //     header: true,
                    // },
                    // responsive: true,
                    scrollY:        '50vh',
                    scrollX:        '100%',
                    // scrollCollapse: true,
                    // processing: true,
                    serverSide: true,
                    // deferRender:    false,
                    // scrollY:        300,
                    columnDefs: [
                        {
                            width: "20%",
                            title: 'Funcionário',
                            targets: [1],
                        },
                        {
                            width: "20%",
                            title: 'Empresa',
                            
                            targets: [2],
                        },{
                            width: "10%",
                            title: 'Departamento',
                            
                            targets: [3]
                        },{
                            width: "13%",
                            title: 'Cargo',
                            
                            targets: [4]
                        },{
                            width: "12%",
                            title: 'Pis',
                            targets: [5],
                        },{
                            width: "10%",
                            title: 'Admissão',
                            targets: [6],
                            "sType": "ordernardata"
                        },{
                            width: "10%",
                            title: 'Ativo',
                            targets: [7],
                        }],
                    order: [
                        [1, "asc"]
                    ],
                    columns: [
                        {
                            data: "nome",
                            name: "funcionario.nome",
                            className: className,
                            render: function (a, e, data) {
                                return  '<div class="editar-item datatable-lista-item-text-large " data-id-item="' + data.id + '" >' +
                                        data.nome +
                                        '</div>';
                            }
                        }, {
                            data: "empresa",
                            name: "empresa.razaoSocial",
                            className: className,
                            render: function (a, e, data) {
                                return  '<div class="editar-item datatable-lista-item-text-large " data-id-item="' + data.id + '" >' +
                                        data.empresa  +
                                        '</div>';
                            }
                        }, {
                            data: "departamento",
                            name: "departamento.descricao",
                            className: className,
                            render: function (a, e, data) {
                                return  '<div class="editar-item datatable-lista-item-text-large " data-id-item="' + data.id + '" >' +
                                        data.departamento +
                                        '</div>';
                            }
                        }, {
                            data: "cargo",
                            name: "cargo.descricao",
                            className: className,
                            render: function (a, e, data) {
                                return  '<div class="editar-item datatable-lista-item-text-large " data-id-item="' + data.id + '" >' +
                                        data.cargo  +
                                        '</div>';
                            }
                        }, {
                            data: "pis",
                            name: "funcionario.pis",
                            className:"datatable-lista-item-text",
                            render: function (a, e, data) {
                                return  '<div class="editar-item" data-id-item="' + data.id + '" >' +
                                        data.pis +
                                        '</div>';
                            }
                        }, {
                            data: "dataAdmissao",
                            name: "funcionario.dataAdmissao",
                            render: function (a, e, data) {
                                return  '<div class="editar-item" data-id-item="' + data.id + '" >' +
                                        data.dataAdmissao +
                                        '</div>';
                            }
                        }, {
                            data: "ativo",
                            name: "funcionario.ativo",
                            render: function (a, e, data) {
                                return  '<div class="editar-item" data-id-item="' + data.id + '" >' +
                                        data.ativo +
                                        '</div>';
                            }
                        }
                    ],
                    ajax: {
                        // /' + $rootScope.$storage.grupo.idGrupo
                        url: constantesConfig.baseUrl + 'rest/funcionario/paginacao/grupoPermisso',
                        method: "POST",
                        "type": "POST",
                        "contentType": "application/json",
                        headers: {
                            'X-Auth-Token': $rootScope.authToken
                        },
                        dataSrc: function(response){
                            //Trada os dados que vieram da tela
                            console.log("Retornou algo...");
                            console.log(response);
                            return dataFormat(response.data);
                        },
                        "data": function ( d ) {
                          return JSON.stringify( d );
                        }
                    }
                };

                // ---------------------------------
                // EVENTOS
                // ---------------------------------
                scope.novo = function () {
                    $rootScope.$state.go('AdicionarFuncionario',{abaAtiva:'dados-pessoais'});
                };


                scope.editar = function (id) {
                    if(permissoesService.isPermitido("VisualizarFuncionario") 
                            || permissoesService.isPermitido("Cartoes") 
                            || permissoesService.isPermitido("FuncionariosJornadas")
                            || permissoesService.isPermitido("FuncCalendarios")
                            || permissoesService.isPermitido("Afastamentos")
                            || permissoesService.isPermitido("Compensacoes")
                            || permissoesService.isPermitido("BHManutencoes")){
                        $rootScope.$state.go('FormularioFuncionario', {
                                abaAtiva: 'dados-pessoais',
                                id: id
                            });
                    }else{
                        $timeout(function(){
                            mensagemService.msgAtencao("conf_operador_nao_permissao");
                        });
                    }
                };

                scope.excluir = function (listaExcluir) {
                    if (listaExcluir.length > 0) {
                        var msg = listaExcluir.length > 1 ? 'Deseja excluir os funcionários selecionados?' : 'Deseja excluir o funcionário selecionado?';
                        mensagemService.msg({
                            mensagem: msg,
                            callBackOK: function () {
                                //Força fechar o dialog
                                bootbox.hideAll();

                                //Reseta a lista de erros
                                scope.erroLista = [];

                                excluirLista(listaExcluir, 0, 0);
                            }
                        });
                    } else {
                        mensagemService.msgAlerta({
                            mensagem: 'funcionario_dialog_excluir_nenhum',
                            titulo: 'mensagem_service_alerta_titulo'
                        });
                    }
                };

                //Evento chamado antes de atualizar a tabela
                scope.acaoErros = function ( e, settings, data ) {
                    if(data && data instanceof Array){
                        data.forEach(function(entidade){

                            scope.erroLista.forEach(function(erro){
                                if(entidade.idFuncionario == erro.id){
                                    entidade.mensagem = erro.mensagem;
                                    entidade.isErro = true;
                                }
                            });
                            
                        });

                    }
                };

                // ---------------------------------
                // FUNÇÕES E PROCEDIMENTOS
                // ---------------------------------
                //Formata os dados apresentados na tabela
                var dataFormat = function (data) {
                    var retorno = [];
                    if (data && data.length > 0) {
                        data.forEach(function (funcionario) {
                            retorno.push({
                                id:         funcionario.idFuncionario,
                                nome:         funcionario.nome || "",
                                empresa:    funcionario.empresaRazaoSocial? funcionario.empresaRazaoSocial : "",
                                departamento:    funcionario.departamentoDescricao? funcionario.departamentoDescricao : "",
                                cargo:     funcionario.cargoDescricao ? funcionario.cargoDescricao : "",
                                pis:   formatPis.formatar(funcionario.pis || ""),
                                dataAdmissao:   funcionario.dataAdmissao || "",
                                ativo: funcionario.ativo? "Sim" : "Não",
                                isErro :    funcionario.isErro, 
                                mensagem :  funcionario.mensagem,
                            });
                        });
                    }
                    return retorno;

                };

                var excluirLista = function (listaExcluir, countSucesso, countErro) {
                    if (listaExcluir.length <= 0) {
                        //Finalizou
                        $timeout(function () {
                            if (countSucesso) {
                                mensagemService.msgSucesso(countSucesso > 1? "funcionario_excluir_sucesso_plr": "funcionario_excluir_sucesso_sgl", [countSucesso]);
                            }

                            if(countErro){
                                mensagemService.msgAtencao(countErro > 1? "funcionario_excluir_erro_plr": "funcionario_excluir_erro_sgl", [countErro]);
                            }
                        }, 200);

                        reloadTable();
                        return;
                    }

                    var funcionario = listaExcluir.pop();

                    funcionarioService.Funcionario.delete({
                        id: funcionario.id
                    }, function (response) {
                        countSucesso++;
                        excluirLista(listaExcluir, countSucesso, countErro);
                    }, function (error) {                    
                        countErro++;
                        
                        scope.erroLista.push({
                            id          : funcionario.id,
                            mensagem    : error.data.body
                        });

                        excluirLista(listaExcluir, countSucesso, countErro);
                    });
                };

                //função para recarregar os dados da tabela por ajax
                var reloadTable = function () {
                    angular.element("#tblFuncionario").dataTable().api().ajax.reload();
                };

                //Já carregou os componentes, então inicializa tabela
                scope.carregarTabela = true;

            }
        };



    }

})();



