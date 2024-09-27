//JQuerry: biblioteca do javascript que permite simplificar a sintaxe

//Javascript -ID
//document.getElementById("nomeID")
//JQuerry - ID
//$("#nomeID")

//Javascript - classe
//document.getElementsByClassName("nomeClasse")
//JQuerry
//$(".nomenclasse")

//Javascript - tag
//document.getElementsByTagName("h1")
//JQuerry
//$("h1")


//progamação orientada a objetos

var nome = "joão"
var sobrenome = "silva"
var idade = 12

var pessoa = {
    nome:"joão",
    sobrenome:"silva",
    idade:12
}

console.log(pessoa.idade)

var pessoa2 = {
    nome:"ana",
    sobrenome:"rocha",
    idade:21
}

//metodo construtor

function people(_nome, _sobrenome, _idade){
    this.nome = _nome
    this.sobrenome = _sobrenome
    this.idade = _idade
}

var aluno1 = new people("kaique", "rocha", 12)
var aluno2 = new people("kevin", "vinicios", 14)
var aluno3 = new people("pedro","galloro",12)


console.log(aluno1.nome)
console.log(aluno2.nome)
console.log(aluno3.nome)

function Item(nome, quantidade, preco){
    this.nome = nome;
    this.quantidade = quantidade
    this.preco = preco
}

var intens = []

function adicionarItem(){
    var nomeItemNovo = $("#nomeItem").val();
    var quantidadeNovo = $("#quantidade").val();
    var precoNovo = $("#preco").val();

    var novoItem = new Item(nomeItemNovo, quantidadeNovo, precoNovo)

    intens.push(novoItem)
    atualizaTabela(novoItem)
}

function atualizaTabela(item){
    var htmlFInal = "<tr>";
}