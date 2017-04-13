<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8">
    <meta name="mit" content="0040830">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Teste Vindula 2017</title>
    <meta name="description" content="Esse Website Foi Produzido Como Avalição De Um Processo Seletivo" />
    <meta name="robots" content="index, follow" />

    <link rel="canonical" href="index" />

    <link href='https://fonts.googleapis.com/css?family=Lato:100,300,400,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="css-min/boot.min.css">
    <link rel="stylesheet" href="css-min/style.min.css">

    <link rel="shortcut icon" href="icon/favicon-vindula.jpg" />

    <!-- Include Chart Js -->
	<script src="js-min/chart.min.js"></script>

    <!-- html5shiv.js - Para que o HTML5 funcione corretamente no IE 9 com toda semântica. -->
    <!--[if lt IE 9]>
        <script src="js/html5shiv.js"></script>
    <![endif]-->

</head>

<body>
            
    <header class="container main_header bg-header #home">
        <div class="content">
            <img class="main_logo" title="Teste Vindula 2017" alt="[Teste Vindula 2017]" src="img/logo.png"/>
            <h1 class="fontzero">Teste Vindula 2017</h1>

            <ul class="main_menu">
                <li><a href="#dashboard" title="DASHBOARD">DASHBOARD</a></li>
                <li><a href="#solucoes" title="SOLUÇÔES">SOLUÇÕES</a></li>
                <li><a href="#administracao" title="ADMINISTRAÇÂO">ADMINISTRAÇÃO</a></li> 
            </ul>

            <ul>
                <li><a class="processo" href="#pedidos" title="INICIAR PROCESSO">INICIAR PROCESSO</a></li> 
            <ul>

            <img class="main_header_icon copy" src="icon/playcopy-icon.png" alt="" />
            <img class="main_header_icon mike" src="icon/mike-icon.gif" alt="" />
            <img class="main_header_icon" src="icon/smart-icon.png" alt="" />
            <img class="main_header_icon" src="icon/search-icon.png" alt="" />
            <div class="clear"></div>

            <article class="dashboard">
                <h1 class="fontzero">Dashboard</h1>
                <img class="main_header_icon tarefa" src="icon/tarefa-icon.png" title="Tarefa" alt="[Tarefa]"/>
                <a href="#tarefa"><span>Tarefa</span></a>
                <a href="#Check if extra insurance is necessary"><span>Check if extra insurance is necessary</span></a>
            </article>
        </div>
    </header><!-- Fecha Header -->

    <main class="container">

        <article class="container">
            <div class="main_destaque container">
                <div class="content">
                    <header>
                        <h1 class="fontsize3 font-bold al-center">Shipment of a hardware retailer</h1>
                        <p class="tagline fontsize1b al-center">Shipment of a hardware retailer</p>
                    </header>          
                    <div class="clear"></div>
                </div>      
            </div>
        </article><!-- FECHA CONTAINER DESTAQUE -->

        <!-- seção relacional-->
        <section class="container bg-blue">
            <!--container do title-->
            <div class="content">
                <header class="sectiontitle sectiontitle-nomargin">
                    <h1>Conheça alguns produtos:</h1>
                    <h2>Estamos sempre trabalhando com produtos modernos, para entregar um produto 100% atualizado para você!</h2>
                </header>
                <div class="clear"></div>
            </div>
                
            <!--container dos artigos-->
            <div class="container">
                <div class="content" style="padding-bottom: 8px;">
                    <article class="main_tec_item box box-small al-center radius">
                        <img src="img/ps4.jpg" alt="Playstation 4" title="Playstation 4">
                        <h1>Playstation 4:</h1>
                        <p class="tagline">Playstation 4 em grande oferta, vai ficar de fora? Entre em contato conosco, temos algumas ofertas esperando por você.</p><br>
                    </article>
                        
                    <article class="main_tec_item box box-small al-center radius">
                        <img src="img/xbox.png" alt="Xbox One" title="Xbox One">
                        <h1>Xbox One:</h1>
                        <p class="tagline">Xbox One em grande oferta, vai ficar de fora? Entre em contato conosco, temos algumas ofertas esperando por você.</p><br>
                    </article>
                        
                    <article class="main_tec_item box box-small al-center radius">
                        <img src="img/ipad.jpg" alt="Ipad" title="Ipad">
                        <h1>Macbook:</h1>
                        <p class="tagline">Macbook em grande oferta, vai ficar de fora? Entre em contato conosco, temos algumas ofertas esperando por você.</p><br>
                    </article>
                        
                    <article class="main_tec_item box box-small al-center radius last">
                        <img src="img/notbook.png" alt="Notbook Acer" title="Notbook Acer">
                        <h1>Notbook Acer:</h1>
                        <p class="tagline">Notbook Acer em grande oferta, vai ficar de fora? Entre em contato conosco, temos algumas ofertas esperando por você.</p><br>
                    </article>
                    
                    <div class="box-line"></div>
                    <div class="clear"></div>
                </div>
            </div>
        </section><!-- FECHA ARTIGOS -->

        <section class="container bg-pedidos">  
            <div class="content">
            <header class="content pedidos">
                <h1 class="fontsize2b al-center">Pedidos</h1>
                <p class="tagline fontsize1b al-center">Criando Aplicações Real-Time com HTML5, CSS3, JS, jQuery e SQL!</p>
            </header>

            <div class="box-medium">
                <h1 class="fontsize2 font-bold">Inserir Insumos</h1>
                <p>Informe os dados e faça o envio após a validação.
                <form name="formPedido" id="formPedido"  class="formPedido" method="" action="">
                    <fieldset>
                        <label>
                            <span>Marca</span>
                            <select class="j_insumos radius" name ="Insumos" title ="Selecione a Marca" >
                                <option value="Epson">Epson</option>
                                <option value="HP">HP</option>
                                <option value="Nikon">Nikon</option>
                                <option value="Kanon">Kanon</option>
                            </select>
                        </label>
                        <label>  
                            <span>Descrição</span>      
                            <input type="text" id="descricao" name="descricao" class="j_desc radius" />
                        </label>
                        <label>  
                            <span>Quantidade</span>      
                            <input type="number" id="quantidade" name="quantidade" step="0" min="1" max="1000" class="j_quant radius" />
                        </label>
                        <label>  
                            <span>Preço</span>      
                            <input type="text" id="preco" name="preco" pattern="[0-9.]+$" class="j_preco radius" />
                        </label>
                        <button type="" name="validar" id="validar" class="btn btn-blue radius">Validar</button>
                        <button type="reset"  name="limpar" id="limpar" class="j_limpar btn btn-red radius">Limpar</button>
                        <button type="submit" name="enviar" id="" class="j_enviar btn radius j_enviar">Enviar</button>
                        <a class="btn btn-orange radius j_env" onclick="return acaoLimpar();">Enviar Pedidos</a>
                    </fieldset>
                </form>
            </div>

                 <div class="content">
                        
                        <form>
                            <input type="search" class="input-search" alt="lista-clientes" placeholder="Buscar na tabela"  class="fl-right"/>
                        </form>
                        
                        <article>
                            <h1 class="fontzero">Tabela de Pedidos</h1>
                            <table class="lista-clientes">
                                <thead>
                                    <tr>
                                        <th class="fontsize1a font-bold">Cod</th>
                                        <th class="fontsize1a font-bold">Material</th>
                                        <th class="fontsize1a font-bold">Marca</th>
                                        <th class="fontsize1a font-bold">Data da Compra</th>
                                        <th class="fontsize1a font-bold">Quantidade</th>
                                        <th class="fontsize1a font-bold">Preço Total</th>
                                    </tr>
                                </thead>

                                <tbody id="pedidos">
                                
                                </tbody>
                            </table>
                        </article>

                        <article>
                            <h1 class="fontzero">Tabela de Insumos</h1>
                            <table class="lista-clientes">
                                <thead>
                                    <tr>
                                        <th class="fontsize1a font-bold">Marca</th>
                                        <th class="fontsize1a font-bold">Descrição</th>
                                        <th class="fontsize1a font-bold">Quantidade</th>
                                        <th class="fontsize1a font-bold">Preço</th>
                                    </tr>
                                </thead>

                                <tbody id="insumos" class="j_linha">

                                </tbody>
                            </table>  
                        </article>     
                    </div>
            <div class="clear">
            </div>
        </section> <!-- FECHA DADOS DO PEDIDO-->  
	
        <section class="container register boxshadow j_solicitantes">  
            <header class="content id="entrega"">
                <a class="j_open openform" rel="usercreate"></a>
                <h1 class="fontsize2">Dados Do Solicitante</h1>
                <p class="tagline">Criando Aplicações Real-Time com HTML5, CSS3, jQuery, AJAX, PHP e SQL!</p>
            </header>

            <form name="form" id="form" class="j_formsubmit usercreate" method="post" action="">
                <input class="noclear" type="hidden" name="action" value="create"/>
                <label>Nome:</label><input type="text" class="nome" name="nome" placeholder="Nome Completo:"/>
                <label>Telefone:</label><input type="text" class="telefone" name="telefone" placeholder="Telefone:"/>
                <label>CPF:</label><input type="text" class="cpf" name="cpf" placeholder="CPF:"/>
                <label>CEP:</label><input type="text" class="cep" name="cep" size="10" maxlength="9" placeholder="CEP:"/>
                <label>Endereço:</label><input type="text" class="endereco" name="endereco" placeholder="Endereço:"/>
                <label>Complemento:</label><input type="text" class="complemento" name="complemento" placeholder="Complemento:"/>
                <label>Cidade:</label><input type="text" class="cidade" name="cidade" placeholder="Cidade:"/>
                <label>Estado:</label><input type="text" class="estado" name="estado" placeholder="Estado:"/>
                <input class="search_icon" type="submit" title="Pesquisar" alt="[Pesquisar]" id="enviar" onclick="return pesqCodigo();"/>
                <input type="number" class="codigo" name="codigo" placeholder="Informe o id para pesquisar:" required/>
                <img class="form_load" src="icon/load.gif" alt="[CARREGANDO...]" title="CARREGANDO..."/>
                <a href="#bg" class="buscar j_entrega">Dados da Entrega</a>
            </form>
        
            <div id="bg"></div>    
            <article class="box-modal radius"> 
                <div class="container">
                    <a href="#entrega" class="close">X</a>
                    <h1 class="fontsize2 al-center">Dados da Entrega</h1>  
                    <p class="tagline al-center">Em breve o produto será entregue.</p>
                    
                    <span class="fontsize1 font-bold ">CEP</span>
                    <span class="j_cep bg-bluelight"></span>
                    <span class="fontsize1 font-bold">Endereço</span>
                    <span class="j_end bg-bluelight"></span>
                    <span class="fontsize1 font-bold">Complemento</span>
                    <span class="j_comp bg-bluelight"></span>
                    <span class="fontsize1 font-bold">Cidade</span>
                    <span class="j_cid bg-bluelight"></span>
                    <span class="fontsize1 font-bold">Estado</span>
                    <span class="j_est bg-bluelight"></span>
                    <span class="fontsize1 font-bold">Valor Total</span>
                    <span class="j_total bg-bluelight"></span>       
                </div>           
            </article>
            <div class="clear">
            </div>
        </section><!-- Fecha Form De Solicitantes -->

        <section class="container bg-bluelight j_graph">
            <div class="content">
            <header class="content sectiontitle">
                <h1 class="al-center">Trabalhando com Gráficos no HTML5</h1>
            </header>

                <article class="box-large fl-left al-center">
                    <h1>Gráfico De Quantidade de pedidos por dia</h1>
                    <!-- Start Canvas -> Desenhar elementos gráficos usando JS -->
                    <canvas class="line-chart"></canvas>
                </article>

                <article class="box-large fl-left al-center last">
                    <h1>Gráfico De Pedidos por solicitante</h1>
                    <!-- Start Canvas -> Desenhar elementos gráficos usando JS -->
                    <canvas class="line-chartb"></canvas>
                </article>
            <div class="clear">
            </div>
        </section> <!-- Fecha Gráficos -->

    </main> <!-- Fecha Main -->

    <footer class="main_footer container bg-footer">
        <section class="content">
            <h1 class="fontzero">Footer</h1>
            <p class="tagline" title="© 2017 iColabora" alt="[© 2017 iColabora]">&copy; <?= date('Y'); ?> iColabora</p>
            <img src="icon/question-icon.png" alt="[?]" title="?">     
        </section>   
    </footer><!-- Fecha Footer -->

    <script src="js-min/jquery-3.2.0.min.js"></script>
    <script src="js-min/jquery.mask.min.js"></script>
    <script src="js-min/mysql_lib.js"></script>
    <script src="js-min/scripts.min.js"></script>
</body>
</html>