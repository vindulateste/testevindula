<?php

//Recebo o dados do formulário via post e filtro os dados
$getPost = filter_input_array(INPUT_POST, FILTER_DEFAULT);
//Limpo os dados recebidos, evitando tags ou códigos
$setPost = array_map('strip_tags', $getPost);
//Elimino os espaços em branco
$Post = array_map('trim', $setPost);

$Action = $Post['action'];
$jSon = array();
unset($Post['action']);
sleep(1);

echo json_encode($jSon);
