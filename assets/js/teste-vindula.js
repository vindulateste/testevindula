function inserirMaterial(){

	//move valores do input para a tabela
	var id_material = document.getElementById("pedido-material").value;
	var marca = document.getElementById("marca-pedido").value;
    var dt_compra = document.getElementById("dt-compra").value;
	var qtd_material = document.getElementById("qtd-material").value;
	var preco_material = document.getElementById("preco-total").value;

	//define variavel para montar tabela 
	var table_material = document.getElementById("table-material");
	
	//monta tabela
    	var body_material = "<tr>"+
						    "<td>"+id_material+"</td>"+
						    "<td>"+marca+"</td>"+
						    "<td>"+dt_compra+"</td>"+
						    "<td>"+qtd_material+"</td>"+
					        "<td>"+preco_material+"</td>"+
						    "</tr>";
		table_material.innerHTML = body_material;		
};
//
function inserirInsumo(){

	//move valores do input para a tabela
	var marca_insumo = document.getElementById("marca-insumo").value;
    var desc_insumo = document.getElementById("desc-insumo").value;
	var qtd_insumo = document.getElementById("qtd-insumo").value;
	var preco_insumo = document.getElementById("preco-insumo").value;

	//define variavel para montar tabela 
	var table_insumo = document.getElementById("table-insumo");
	
	//monta tabela
    	var body_insumo = "<tr>"+
						    "<td>"+marca_insumo+"</td>"+
						    "<td>"+desc_insumo+"</td>"+
						    "<td>"+qtd_insumo+"</td>"+
						    "<td>"+preco_insumo+"</td>"+					
						    "</tr>";
		table_insumo.innerHTML = body_insumo;		
};
//
function submeter(){

	//move valores do solicitante
	var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
	var cpf = document.getElementById("cpf").value;
	var cep_solicitante = document.getElementById("cep-solicitante").value;
	var end_solicitante = document.getElementById("end-solicitante").value;
    var compl_solicitante = document.getElementById("compl-solicitante").value;
	var cidade_solicitante = document.getElementById("cidade-solicitante").value;
	var estado_solicitante = document.getElementById("estado-solicitante").value;

	//define variavel para montar tabela 
	var table_solicitante = document.getElementById("table-solicitante");
	
	//monta tabela
    	var body_solicitante = "<tr>"+
						    "<td>"+nome+"</td>"+
						    "<td>"+telefone+"</td>"+
						    "<td>"+cpf+"</td>"+
						    "<td>"+cep_solicitante+"</td>"+
						    "<td>"+end_solicitante+"</td>"+
						    "<td>"+compl_solicitante+"</td>"+
						    "<td>"+cidade_solicitante+"</td>"+
						    "<td>"+estado_solicitante+"</td>"+					
						    "</tr>";
		table_solicitante.innerHTML = body_solicitante;	

	//move valores do endereço de entrega
	
	var cep_entrega = document.getElementById("cep-entrega").value;
	var end_entrega = document.getElementById("end-entrega").value;
    var compl_entrega = document.getElementById("compl-entrega").value;
	var cidade_entrega = document.getElementById("cidade-entrega").value;
	var estado_entrega = document.getElementById("estado-entrega").value;

	//define variavel para montar tabela 
	var table_entrega = document.getElementById("table-entrega");
	
	//monta tabela
    	var body_entrega = "<tr>"+						 
						    "<td>"+cep_entrega+"</td>"+
						    "<td>"+end_entrega+"</td>"+
						    "<td>"+compl_entrega+"</td>"+
						    "<td>"+cidade_entrega+"</td>"+
						    "<td>"+estado_entrega+"</td>"+					
						    "</tr>";
		table_entrega.innerHTML = body_entrega;

	// calcula total do pedido
	var valor_material = document.getElementById("preco-total").value;
	var valor_insumo = document.getElementById("preco-insumo").value;	
	var qtd_material = document.getElementById("qtd-material").value;
	var qtd_insumo = document.getElementById("qtd-insumo").value;
    
	var calcula_total = (valor_material * qtd_material) + (valor_insumo * qtd_insumo);
	document.getElementById("valor-total").value = calcula_total;
			
};
//
function logar(){
  var usuario = document.getElementById("usuario").value;
  var senha = document.getElementById("senha").value;
  if(usuario=="gerente"){
    if(senha==1234){
      location="confirmar-seguro.html";
    }
     
    else{
      alert("Nome de usuário ou senha inválidos.");
    } 
 }
 else{
      alert("Nome de usuário ou senha inválidos.");
    }
};
//
function buscar(){
	var pedido =  document.getElementById("busca-pedido").value;
	var mysql_query = "SELECT a.id AS id_pedido, c.id_material, b.marca, EXTRACT(YEAR FROM a.data_de_compra) AS dt_ano,EXTRACT(MONTH FROM a.data_de_compra) AS dt_mes,EXTRACT(DAY FROM a.data_de_compra) AS dt_dia, b.quantidade AS qtd_material, b.preco AS preco_material, c.descricao, c.quantidade AS qtd_insumo, c.preco AS preco_insumo, d.nome, d.telefone, d.cpf, d.cep, d.rua, d.numero, d.bairro, d.cidade, d.estado FROM pedidos a, materiais b, insumos c, solicitantes d WHERE a.id= "+ pedido+" and d.id = a.id_solicitante and b.id_pedido = a.id and c.id_pedido = a.id and c.id_material = b.id";

	mysqlQuery(mysql_query, function(result){
		// move o resultado da query
		var obj = JSON.parse(result);									
		obj.forEach(function(el){
		   var valor = el.id_pedido;
		   document.getElementById("nr-pedido").value = valor;
		   var valor = el.id_material;
		   document.getElementById("pedido-material").value = valor;
		   var valor = el.marca;
		   document.getElementById("marca-pedido").value = valor;
		   var valor = el.dt_dia+"/"+el.dt_mes+"/"+el.dt_ano;
		   document.getElementById("dt-compra").value = valor;
		   var valor = el.qtd_material;
		   document.getElementById("qtd-material").value = valor;
		   var valor = el.preco_material;
		   document.getElementById("preco-total").value = valor;
		   var valor = el.marca;
		   document.getElementById("marca-insumo").value = valor;
		   var valor = el.descricao;
		   document.getElementById("desc-insumo").value = valor;
		   var valor = el.qtd_insumo;
		   document.getElementById("qtd-insumo").value = valor;
		   var valor = el.preco_insumo;
		   document.getElementById("preco-insumo").value = valor;
		   var valor = el.nome;
		   document.getElementById("nome").value = valor;
		   var valor = el.telefone;
		   document.getElementById("telefone").value = valor;
		   var valor = el.cpf;
		   document.getElementById("cpf").value = valor;
		   var valor = el.cep;
		   document.getElementById("cep-solicitante").value = valor;
		   var valor = el.rua+", nº "+el.numero+" - Bairro: "+el.bairro;
		   document.getElementById("end-solicitante").value = valor;
		   var valor = "casa1";
		   document.getElementById("compl-solicitante").value = valor;
		   var valor = el.cidade;
		   document.getElementById("cidade-solicitante").value = valor;
		   var valor = el.estado;
		   document.getElementById("estado-solicitante").value = valor;
		   var valor = el.cep;
		   document.getElementById("cep-entrega").value = valor;
		   var valor = el.rua+", nº "+el.numero+" - Bairro: "+el.bairro;
		   document.getElementById("end-entrega").value = valor;
		   var valor = "casa1";
		   document.getElementById("compl-entrega").value = valor;
		   var valor = el.cidade;
		   document.getElementById("cidade-entrega").value = valor;
		   var valor = el.estado;
		   document.getElementById("estado-entrega").value = valor;


		});			
	});	
};