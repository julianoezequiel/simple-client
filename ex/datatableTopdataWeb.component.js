/**
* @Author: tharle.camargo
* @Date:   13-02-2017
* @Project: TopPontoWeb
*/

 /*
 * Componente que gerencia o "Progress Bar" da tela
 *@params 
 */



 angular.module("TopPontoWebApp").directive('datatableTopdataWeb', ['mensagemService', '$timeout', 'formatDate', '$compile', '$sce', function(mensagemService, $timeout, formatDate, $compile, $sce) {
 		return  {
        scope: {
            itemLista	     : '=?',
            opcoes           : "=",
            titulo           : '@?',//Titulo exibido nas mensagens (padrão "item")
            genero           : '@?',// 'M' para masculino (padrão) e 'F' para feminino
            acaoExluir       : '=?',//Função
            acaoEditar       : '=?',//Função
            acaoErros        : '=?',//Função de "colorir" os itens com erros
            permissaoExcluir:  '=?', //é permitido excluir?
            id               : '@?',
            desabilitarMenu: '@?',
        },
        restrict: "A",
        templateUrl: "app/component/template/datatableTopdataWeb.template.html",
        link:   function(scope, $element, $attrs) {

        	// ---------------------------------
            // INIT DADOS 
            // ---------------------------------

            // // Lista de elementos com erro (normalmente da exclusão)
            // scope.erroLista = [];
            var classExcluir = scope.permissaoExcluir? "excluir-item" : "disabled element-disabled";

            //seta as opções default
            scope.opcoes.dom = scope.opcoes.dom ? scope.opcoes.dom :'<"top"fl>rt<"clear"><"bottom"p><"clear">';
            scope.opcoes.lengthMenu = [
                [5, 15, 20, 100],
                [5, 15, 20, 100]
            ];
            scope.opcoes.language = {
                url: 'assets/global/Portuguese-Brasil.json'
            };
            scope.opcoes.pageLength = scope.opcoes.pageLength ? scope.opcoes.pageLength : 15 ;
            scope.opcoes.deferRender = true;
            scope.opcoes.bDestroy = true;
            //Esse parametro define qual é o valor da chave principal dos dados
            //o padrão dele é 'data'
            scope.opcoes.sAjaxDataProp = "";
            scope.opcoes.stateSave = true;

            // scope.opcoes.fixedHeader= true;
            // scope.opcoes.fixedHeader = {
            //     header: true,
            //     footer: true
            // };

            if(!scope.desabilitarMenu){ 

                if(scope.opcoes.columnDefs[0].targets != 0){
                    var columnDefsDefault = [
                        {
                            width: "5%",
                            className: 'datatable-lista-item',
                            targets: [0],
                            searchable: false,
                            orderable: false,
                            title:  '<div class="row col-md-12 datatable-lista-item" >' +
                                '<div class="table-checkbox col-md-6">' +
                                '<input type="checkbox" class="group-checkable select-all" data-set="#'+scope.id+' .checkboxes"/>' +
                                '</div>' +
                                '<div class="col-md-6">' +
                                '<button type="button" class="btn btn-xs btn-primary dropdown-toggle" aria-haspopup="true" data-toggle="dropdown">' +
                                '<i class="fa fa-angle-down fa-fx"></i>' +
                                '</button>' +
                                '<ul class="dropdown-menu pull-left" role="menu">' +
                                '<li><a   class="'+classExcluir+'" href="#">Excluir selecionado(s) </a></li>' +
                                '</ul>' +
                                '</div>' +
                                '</div>'
                            // title:  '<div class="row col-md-12 datatable-lista-item" >' +
                            //             '<div class="table-checkbox col-md-6">' +
                            //                 '<input type="checkbox" class="group-checkable select-all" data-set="#'+scope.id+' .checkboxes"/>' +
                            //             '</div>' +
                            //             '<div class="col-md-6 datatable-popover">' +
                            //                 // '<div class="datatable-pop-over">'+ aria-haspopup="true" data-toggle="dropdown"
                            //                 // '<button type="button" class="btn btn-xs btn-primary data-table-menu" data-toggle="popover" >' +
                            //                 //     '<i class="fa fa-angle-down fa-fx"></i>' +
                            //                 // '</button>' +

                            //                 // '<button type="button" class="btn btn-xs btn-primary data-table-menu" aria-haspopup="true" data-toggle="popover"  append-to-body="true" >' +
                            //                 //     '<i class="fa fa-angle-down fa-fx"></i>' +
                            //                 // '</button>' +
                            //                 // '<ul class="dropdown-menu pull-left" role="menu">' +
                            //                 // '<li><a   class="'+classExcluir+' label-nowrap" href="#">Excluir selecionado(s) </a></li>' +
                            //                 // '</ul>' +


                            //             '</div>' +
                            //         '</div>'
                        }
                    ];

                    // Merge com as opções da entidade
                    //Nessa nao importa a ordem, pois esse parametro leva "target"
                    scope.opcoes.columnDefs.push.apply(scope.opcoes.columnDefs, columnDefsDefault);
                }


                var columnsDefault = [
                    {
                        data: "",
                        render: function (a, e, data) {
                                return function(){

                                    return '<div class="table-1-coluna">'+
                                        '<div class="table-checkbox">' +
                                            '<input type="checkbox" class="checkboxes"/>' +
                                        '</div>'+
                                        '<div class="table-erro-icone '+(data.isErro? '': 'hidden')+'">'+
                                            '<i class="fa fa-warning table-erro-msg" data-mensagem="'+data.mensagem+'" ></i>'+
                                        '</div>'+
                                    '</div>';
                                }       
                        },
                        className: "dt-body-left  dt-check"
                    }
                ];

                // Merge com as opções da entidade
                scope.opcoes.columns.push.apply(columnsDefault, scope.opcoes.columns);
                
                //Aqui os valores default tem q ir antes dos personalizados
                scope.opcoes.columns = columnsDefault;
            }






            //Evento para marcar os itens em vermelho
            scope.opcoes.fnDrawCallback = function( oSettings ) {
                // alert( 'DataTables has redrawn the table' );
                // var idLinha = 0;
                if(!$element.DataTable() || !$element.DataTable().rows() || !$element.DataTable().rows().data()
                    || $element.DataTable().rows().data().length <= 0){
                    return;
                }

                var entidadeLista = $element.DataTable().rows().data();

                for (var i = 0; i < entidadeLista.length; i++) {
                    var coletivoEntidade = entidadeLista[i];
                    var idLinha = $element.DataTable().rows()[0][i];
                    //colore a linha de vermelho
                    if(coletivoEntidade.isErro){
                        angular.element($element.DataTable().row(idLinha).node()).switchClass( "", "table-erro-celula", 1000, "easeInOutQuad" );
                    }
                }
            }


            //variáveis do datatable
            scope.dataTable = $element.dataTable(scope.opcoes);

            angular.element(document).on('shown.bs.dropdown', function(event) {
                  var dropdown = $(event.target);
                 
                  // Set focus on the first link in the dropdown
                  setTimeout(function() {
                    dropdown.find('.dropdown-menu li:first-child a').focus();
                  }, 10);

            });

            angular.element(window).bind('resize', function () {
                try{
                    scope.dataTable.fnAdjustColumnSizing(false);
                }catch(e){
                }
            } );

            //Evento chamado antes de atualizar a tabela
            scope.dataTable.on('xhr.dt', function ( e, settings, data ) {
                if(scope.acaoErros){
                    scope.acaoErros(e, settings, data);
                }
            } );

            // ---------------------------------
            // EVENTOS
            // ---------------------------------

            $timeout(function(){


                //evento para redezenhar a tabela
                angular.element(".dataTable").on('draw.dt', function () {
                    // console.log("draw.dt");
                    Metronic.initAjax();
                });

                angular.element(".dataTable").find('.group-checkable').change(function () {
                    var set = $(this).attr("data-set");
                    var checked = $(this).is(":checked");
                    $(set).each(function () {
                        if (checked) {
                            $(this).attr("checked", true);
                        } else {
                            $(this).attr("checked", false);
                        }
                    });
                    $.uniform.update(set);
                });


                //evento para editar o registro
                angular.element(".dataTable").on('click', '.editar-item', function (evento) {
                    // evento.stopPropagation();
                    if(evento.toElement){
                        //TODO: Trocar por isso angular.element(item).data('id')
                        var id = evento.toElement.getAttribute("data-id-item");

                        //Chama funcao da tela
                        scope.acaoEditar(id);
                    }
                });

                //Evento para exibir o erro que está na celula
                angular.element(".dataTable").on('click', '.table-erro-msg', function (evento) {
                    if(evento.toElement){
                        //TODO: Trocar por isso angular.element(item).data('id')
                        var mensagem = evento.toElement.getAttribute("data-mensagem");
                        $timeout(function () {
                            mensagemService.msgAtencao(mensagem);
                        }, 100);
                    }
                });

                //Evento para o Select All
                angular.element(".dataTable").on('click', '.select-all', function (event) {
                    $timeout(function(){
                        scope.isAllChecked = event.toElement.checked;
                        $(".checkboxes").attr("checked", scope.isAllChecked);

                        //Força rederização na tela
                        $.uniform.update();
                    });
                });

                // scope.excluirItem = function(){
                angular.element(".dataTable").on('click', '.excluir-item', function (event, el) {
                    event.preventDefault();
                    console.log(event);
                    console.log(el);
                    var list = $element.find('input:checked.checkboxes');
                    var listaExcluir = [];
                   
                    for (var i = 0; i < list.length; i++) {
                        listaExcluir.push(scope.dataTable.fnGetData($(list[i]).parents('tr')));
                    }

                    if(scope.acaoExluir){
                        scope.acaoExluir(listaExcluir);
                    }
                });

                // scope.menuConteudo = $sce.trustAsHtml('<span class="datatable-popover-conteudo"></span>');
                
                // // popover-trigger="'outsideClick'"
                // var menu = '<button uib-popover-html="menuConteudo" type="button" class="btn btn-xs btn-primary '+
                //                 ' data-table-menu" popover-class="datatable-popover-position-manual" popover-append-to-body="true" popover-placement="bottom" popover-is-open="menuOpen" >' +// popover-trigger="\'focus\'"
                //                 '<i class="fa fa-angle-down fa-fx"></i>'+
                //             '</button>';
                // var menuCompilado = $compile(menu)(scope);

                // angular.element('.datatable-popover').append(menuCompilado);

                // scope.$watch("menuOpen", function(novo, antigo){
                //     $timeout(function(){
                //         console.log("Mexeu no menu!");
                //         if(novo){
                //             var menuBotaoExcluir = $compile('<a class="'+classExcluir+' label-nowrap" data-ng-click="excluirItem()" href="#">Excluir selecionado(s) </a>')(scope);
                //             angular.element('.datatable-popover-conteudo').append(menuBotaoExcluir);

                //             // angular.element(".datatable-popover-position-manual").attr("style", "top: 500px !important; left: 500px !important;");
                //         }
                //     }, 50);
                // });

                Metronic.initAjax();

            }, 50);

            

            // ---------------------------------
            // FUNÇÕES E PROCEDIMENTOS
            // ---------------------------------
             //função para recarregar os dados da tabela por ajax
            var reloadTable = function () {
                scope.dataTable.api().ajax.reload();
            };

            var sinalizarItensTabela = function(idColetivo, mensagem){
                var linha = angular.element(document.querySelector("div[data-id-coletivo='"+idColetivo+"']")).parent().parent();
                linha.addClass('table-erro-celula');
            }

        }
    }
 }]);