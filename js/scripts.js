$(function () {

    //Desliza menu!
    $('.main_header a').click(function(){
        var goto = $('.' + $(this).attr('href').replace('#', '')).position().top;
        $('html, body').animate({scrollTop: goto - $('.main_header').outerHeight()}, 1000);
        return false;
    });

    //Suspende Menu!
    $(window).scroll(function(){
        if($(this).scrollTop() > $('.main_header').outerHeight() + 240){
            $('body').css('padding-top', $('.main_header').outerHeight());
            $('.main_header').addClass('main_header_fixed');
        }else{
            $('body').css('padding-top', '0');
            $('.main_header').removeClass('main_header_fixed');
        }
    });

    //Apenas alguns alert, confirm, prompt para simular o processo 
    $('.j_env').click(function(){

        if(confirm("Deseja realmente enviar os pedidos?")){
            
            if(confirm('Deseja incluir um transporte especial?')){

                alert('Solicitar cotações de transportadoras');
                alert('Atribuir transportadora e prepara o trabalho');
               
                alert('Adicionar papelada e mover o pacote para escolher a áera');
                 //animo a página até o form de solicitantes
                 $('html, body').animate({scrollTop: 1760}, 1000);
                 //ativo o form de solicitantes que estava oculto
                $('.register').fadeIn(1700); 

                return true;       
            }
            else confirm('Deseja incluir um seguro extra?');

            prompt('Preencher com etiqueta postal');
            alert('Adicionar papelada e mover o pacote para escolher a áera');

            //animo a página até o form de solicitantes
            $('html, body').animate({scrollTop: 1760}, 1000);
            //ativo o form de solicitantes que estava oculto
            $('.register').fadeIn(1700);
        }
        else 
            $('html, body').animate({scrollTop: 0}, 1000);
            return false;
    });

    //Controla form de solicitantes
    $('.j_open').click(function () {
        $(this).toggleClass('closeform');
        $('.' + $(this).attr('rel')).slideToggle();
        //limpa todos os campos do form
        $('#form').submit($('input').val('')); 
        //apaga  o elemento label do form
        $('.register label').hide();
        //apaga o botão dados da entrega
        $('.j_entrega').fadeOut(500);
        $('.j_formsubmit').find('input[name="action"]').val('create');
    });

    //SELETOR, EVENTO/EFEITO, CALLBACK, AÇÃO
    $('.j_formsubmit').submit(function () {
        var form = $(this);
        var data = $(this).serialize();

        $.ajax({
            url: 'ajax/ajax.php',
            data: data,
            type: 'POST',
            dataType: 'json',
            beforeSend: function () {
                form.find('.form_load').fadeIn(1000);
            },
            success: function (resposta) {
                form.find('.form_load').fadeOut(1000);

                //adiciono label nos campos após serem preenchidos
                $('.register label').fadeIn(1000);	

                //ativo o botão de buscar após 1 segundo
                $('.j_entrega').fadeIn(1200);
            }
        });
        return false;
    });
});

//Máscara para telefone
jQuery(".telefone").mask("(99) 99999-9999");
//Máscara para cpf
jQuery(".cpf").mask("999.999.999-99");
//Máscara para data
jQuery(".Data_compra").mask("99/99/9999");
//Máscara para o cep
jQuery(".cep").mask("99999-999");

//Valida Form de Pedidos
$(function(){
    $("#formPedido").submit(function(e) {
        //evito o submit do form
        e.preventDefault();

    if($('.j_marca').val() === ''){
        alert('O campo Marca não pode ser vazio');      
        return false;
    }

    if($('.j_desc').val() === ''){
        alert('O campo de descrição não pode ser vazio ou números, apenas texto !!'); 
        $('.j_enviar').attr('disabled', 'disabled').removeClass('btn-green');     
        return false;
    }

    if($('.j_quant').val() === ''){
        alert('O campo de quantidade não pode ser vazio'); 
        $('.j_enviar').attr('disabled', 'disabled').removeClass('btn-green');     
        return false;
    }

    if($('.j_preco').val() === ''){
        alert('O campo de preço não pode ser vazio');
        $('.j_enviar').attr('disabled', 'disabled').removeClass('btn-green');      
        return false;
    }

    if($('.j_marca').val() != '' && $('.j_desc').val() != '' && $('.j_quant').val() != '' && $('.j_preco').val() != ''){
          $('.j_enviar').removeAttr('disabled', 'disabled').addClass('btn-green');
          
    }else{
           $('.j_enviar').attr('disabled', 'disabled').removeClass('btn-green');
    }
});

    $('.j_limpar').click(function(){
        $('.j_enviar').attr('disabled', 'disabled').removeClass('btn-green');
    });

});

$('.j_enviar').click(function(){
        $(this).attr('disabled', 'disabled').removeClass('btn-green');
});

//Método responsável por efetuar pesquisas na tabela pelo input search
$(function(){
    $(".input-search").keyup(function(){
        //pega o css da tabela 
        var tabela = $(this).attr('alt');
        if( $(this).val() != ""){
            $("."+ tabela +" tbody > tr").hide();
            $("."+ tabela +" td:contains-ci('" + $(this).val() + "')").parent("tr").show();
        } else{
            $("."+ tabela +" tbody > tr").show();
        }
    }); 
});

$.extend($.expr[":"], {
    "contains-ci": function(elem, i, match, array) {
        return (elem.textContent || elem.innerText || $(elem).text() || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
    }
});

//executa o método quando á página for carregada
window.onload = initTable;

/**
 * Método responsável por fazer consultas SQL e preencher as linhas das tabelas pedidos e insumos
 * @copyright (c) 2017, Paulo Pimentel Aluno: - Bacharel em Ciência da Computação e Aluno: UPINSIDE TREINAMENTOS
 */
function initTable(){

    var mysql_query = "SELECT id_pedido, nome, marca, data_de_compra, quantidade, preco FROM materiais AS m JOIN pedidos AS p ON m.id = p.id ORDER BY id_pedido ASC";    
    mysqlQuery(mysql_query, function(result){ 
        // mostra o resultado da query
        var obj = JSON.parse(result);
        var table_body =  document.getElementById("pedidos");

        obj.forEach(function(el){
            var html_body = "<tr>"+
                                    "<td>"+el.id_pedido+"</td>"+
                                    "<td>"+el.nome+"</td>"+
                                    "<td>"+el.marca+"</td>"+
                                    "<td>"+el.data_de_compra+"</td>"+
                                    "<td>"+el.quantidade+"</td>"+
                                    "<td>"+el.preco+"</td>"+                                                       
                               "</tr>";
            table_body.innerHTML += html_body;
        });
    });


        
        if($('.j_insumos').val() === ''){
            return false;
        }else{
            if($('.j_enviar').click(function(){
                // $('tbody td').hide();
                var marca = $('.j_insumos').val();
                var desc = $('.j_desc').val();
                var quant = $('.j_quant').val();
                var preco = $('.j_preco').val();
                var table =  document.getElementById("insumos");
                var html_body = "<tr>"+
                                    "<td>"+marca+"</td>"+
                                    "<td>"+desc+"</td>"+
                                    "<td>"+quant+"</td>"+
                                    "<td>"+preco+"</td>"+                                                
                                "</tr>";
                table.innerHTML += html_body;
                
            }));
        }
            var mysql_query = "SELECT m.marca, i.descricao, i.quantidade, i.preco FROM materiais As m JOIN insumos As i ON m.id = i.id_material WHERE m.marca = 'Epson' OR m.marca = 'HP'";
            mysqlQuery(mysql_query, function(result){ 
                // mostra o resultado da query
                var obj= JSON.parse(result);
                var table_body =  document.getElementById("insumos");

                    obj.forEach(function(el){
                        var html_body = "<tr>"+
                                            "<td>"+el.marca+"</td>"+
                                            "<td>"+el.descricao+"</td>"+
                                            "<td>"+el.quantidade+"</td>"+
                                            "<td>"+el.preco+"</td>"+                                                
                                        "</tr>";
                        table_body.innerHTML += html_body;
                    });                    
            });
           
        }    
                        
//Consulta CEP e preenche os campos automaticamente
$(document).ready(function() {

            function limpa_formulário_cep() {
                // Limpa valores do formulário de cep.
                $(".endereco").val("");
                $(".complemento").val("");
                $(".cidade").val("");
                $(".estado").val("");
            }
            
            //Quando o campo cep perde o foco.
            $(".cep").blur(function() {

                //Nova variável "cep" somente com dígitos.
                var cep = $(this).val().replace(/\D/g, '');

                //Verifica se campo cep possui valor informado.
                if (cep != "") {

                    //Expressão regular para validar o CEP.
                    var validacep = /^[0-9]{8}$/;

                    //Valida o formato do CEP.
                    if(validacep.test(cep)) {

                        //Preenche os campos com "..." enquanto consulta webservice.
                        $(".endereco").val("");
                        $(".complemento").val("");
                        $(".cidade").val("");
                        $(".estado").val("");

                        //Consulta o webservice viacep.com.br/
                        $.getJSON("//viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

                            if (!("erro" in dados)) {
                                //Atualiza os campos com os valores da consulta.
                                $(".endereco").val(dados.logradouro);
                                $(".complemento").val(dados.bairro);
                                $(".cidade").val(dados.localidade);
                                $(".estado").val(dados.uf);
                            } //end if.
                            else {
                                //CEP pesquisado não foi encontrado.
                                limpa_formulário_cep();
                                alert("CEP não encontrado.");
                            }
                        });
                    } //end if.
                    else {
                        //cep é inválido.
                        limpa_formulário_cep();
                        alert("Formato de CEP inválido.");
                    }
                } //end if.
                else {
                    //cep sem valor, limpa formulário.
                    limpa_formulário_cep();
                }
            });
});

/**
 * Método responsável por fazer consultas SQL e preencher automaticamente os campos do formulário
 * @copyright (c) 2017, Paulo Pimentel Aluno: - Bacharel em Ciência da Computação e Aluno: UPINSIDE TREINAMENTOS
 */
function pesqCodigo(){

    //Se o número do não for informado ou igual a 0, informe uma msg de alerta e o retorno falso
    if($('.codigo').val() === ''){ 
        $('.register label').hide();
        //inativo o botão de buscar
        $('.j_entrega').fadeOut(1000); 
        //exibo uma msg de alerta ao usuário
        alert('O Número do Pedido não pode ser vazio, não pode ser texto e nem ter um valor igual a 0 !!'); 
        //faço o encapsulamento do formulário e limpos todos os campos
        $('#form').submit($('input').val('')); 
        return false;  
    }else{
        //Senão adiciono o valor enviado pelo campo na variável codigo
        var codigo = $('.codigo').val();
        //Faço uma consulta SQL no banco com INNER JOIN e concatenando minha String SQL com a variavel codigo para obter o id corretamente
        var mysql_query = "SELECT p.id_solicitante, s.nome, s.telefone, s.cpf, s.cep, s.rua, s.bairro, s.cidade, s.estado FROM pedidos As p JOIN solicitantes As s ON p.id_solicitante = s.id WHERE p.id_solicitante =" + codigo + "";
                
        mysqlQuery(mysql_query, function(result){ 
        //mostra o resultado da query
        var obj = JSON.parse(result);
        //verifico se a variavel obj já no formato JSON está vazia, caso esteja, nao existe o valor dos id no banco
            if(obj == ""){ 
                $('.register label').hide();
                 //inativo o botão de buscar
                 $('.j_entrega').fadeOut(1000);
                 //informo uma msg de alerta ao usuario
                 alert('O número de pedido informado não existe em nossa base de dados !!');
                 //faço o encapsulamento do formulário e limpos todos os campos
                 $('#form').submit($('input').val('')); 
            }
            //faz uma varredura na variável obj já no formato json pelo forEach
            obj.forEach(function(el){
                //seto o os campos do formulário
                $('.nome').val(el.nome);
                $('.telefone').val(el.telefone);
                $('.cpf').val(el.cpf);
                $('.cep').val(el.cep);
                $('.endereco').val(el.rua);
                $('.complemento').val(el.bairro);
                $('.cidade').val(el.cidade);
                $('.estado').val(el.estado);

                //seto as informações na janela modal
                $('.register .j_cep').html(el.cep); 
                $('.register .j_end').html(el.rua); 
                $('.register .j_comp').html(el.bairro); 
                $('.register .j_cid').html(el.cidade); 
                $('.register .j_est').html(el.estado); 
                //$('.register .j_valor').html(el.estado + el.cidade);  			             
			});                
        }); 

        //Query que executa o cálculo das colunas
        var query = "SELECT ROUND(((m.preco * m.quantidade) + (i.preco * i.quantidade))) As total FROM materiais As m JOIN insumos As i ON m.id = i.id_material WHERE m.id_pedido =" + codigo + "";
        mysqlQuery(query, function(result){ 
		// mostra o resultado da query
		var obj = JSON.parse(result);
			
		    obj.forEach(function(el){
                //seto o valor total na janela modal
               $('.register .j_total').html('R$ ' + el.total);  
			});		
		});                                      
    }
} 		

$(document).ready(function() {
                        
    var dados = [0,1,2,2,3,3,4];
    var ctxLine = document.getElementsByClassName("line-chart");
    var ctxLineb = document.getElementsByClassName("line-chartb");
    //Consulta SQL para buscar a quantidade de pedidos por solicitante
    var mysql_query_p = "SELECT id_solicitante As solicitante, COUNT(*) AS pedidos FROM pedidos GROUP BY id_solicitante";
    var mysql_query_d = "SELECT COUNT(id_solicitante) AS res FROM pedidos GROUP BY data_de_compra";

        mysqlQuery(mysql_query_d, function(result){ 
       
        // mostra o resultado da query
		var objeto = JSON.parse(result);
        //array com os dados dos pedidos por solicitante da consulta sql passado para o objeto JSON
        var array = [objeto[0].res, objeto[1].res, objeto[2].res, objeto[3].res, objeto[4].res, objeto[5] = 0, objeto[6] = 0];
        
        
            // Type, Data e options
            var chartGraph = new Chart(ctxLineb, {
                type: 'line',
                data: {
                    labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"],
                    datasets: [
                        {
                            label: "Gráficos com Chart.js - Pedidos Por Solicitante",
                            data: array,
                            borderWidth: 6,
                            borderColor: 'rgba(58, 83, 155, 0.85)',
                            backgroundColor: 'rgba(75, 119, 190, 0.5)',
                        },
                    ]
                }
            });
        });
    
        mysqlQuery(mysql_query_p, function(result){ 
    
        // mostra o resultado da query
		var obj = JSON.parse(result);
        var arr = [obj[0].pedidos, obj[1].pedidos, obj[2].pedidos, obj[3].pedidos, obj[4] = 0, obj[5] = 0, obj[6] = 0];
        //array com os dados dos id's
        var arrayId = ['Cod:' + obj[0].solicitante, 'Cod:' + obj[1].solicitante, 'Cod:' + obj[2].solicitante, 'Cod:' + obj[3].solicitante, 'Cod:' + obj[4].solicitante];

            // Type, Data e options
            var chartGraph = new Chart(ctxLine, {
                type: 'line',
                data: {
                    labels: arrayId,
                    datasets: [
                        {
                            label: "Gráficos com Chart.js - N° De Pedidos Por Dia",
                            data: arr, 
                            borderWidth: 6,
                            borderColor: 'rgba(27, 188, 155, 0.85)',
                            backgroundColor: 'rgba(134, 226, 213, 0.5)',
                        },
                    ]
                }
            });
        });
});