//API - Application Progamind Interface:
//Interface de Programação de Aplicações

//REST - Representational State Transfer:
//Transferencia de Estado Representational

//Recursos

// - GET pegar/visualizar/acessar
// - POST criar
// - PUT atualizar
// - DELETE apagar

//Status Respostas:

//100 - respostas informativo
//200 - Sucesso
//300 - Redirecionamento
//400 - Erro no Cliente
//500 - Erro no servidor

//Ajax - Nos permite fazer requisições para um servidor
//EX
//$.get(URL, funcao_callback)
//$.post(URL, funcao_callback)

$("#botaoBuscaPersonagem").click(buscarPersonagemAleatorio);

function buscarPersonagemAleatorio(){
    $.get("https://swapi.dev/api/people/1", preencherCardPersonagem)
}

function preencherCardPersonagem(data){
    $("#personagemAleatorio").text(data.name) //criar o campo de informaçao do personagem
    $("#nomePersonagem").text(data.name)
    $("#alturaPersonagem").text(data.height)
    $("#massaPersonagem").text(data.mass)
    $("#corCabeloPersonagem").text(data.hair_color)
    $("#corPelePersonagem").text(data.skin_color)
    $("#corOlhosPersonagem").text(data.eye_color)
    $("#nascimentoPersonagem").text(data.birth_year)
    $("#generoPersonagem").text(data.gender)

}


$("#botaoBuscarFilme").click(buscarFilmeporPersonagem)//quando clicar botao busca filme ativa busca filme por personagem

function buscarFilmeporPersonagem() {
    var nome = $("#buscarFilmeporPersonagem").val();//variavel nome

    $.get("https://swapi.dev/api/people/?searh=" + nome, popularTabela)//buscar informaçao na API e escrever na tabela
}

function popularTabela(data) {
    $("#labelFilme").text(data.results[0].name);

    $("#tabelaFilmes").find("tr:gt(0)").remove();

    for (var i = 0; i < data.results[0].films.length; i++)
    {
        $.get(data.results[0].films[i], criaLinha)
    }
}

function criaLinha(data) {
    var htmlFinal = 
    "<tr><td>" + data.title + "</td>"+
    "<td>" + data.episode_id + "</td>"
    "<td>" + data.director + "</td></tr>"

    $("#tabelaFilmes").append(htmlFinal)
}