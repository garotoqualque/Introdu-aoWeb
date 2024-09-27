//retorna todos os elementos que possuem a classe className
// document.getElementsByClassName("className");
// document.getElementsByClassName("className teste");

// document.getElementsById("IdTeste").document.getElementsByClassName("className")


//retorna todas as tags
// document.getElementsByTagName("h1")

// var x = document.getElementsByTagName("div").length;
// console.log(x)

var produto = "camisa"
var produto = ["camisa", "calça", "meia"];

console.log(produto[0]);

var dadosDiferentes = ["bola", 10 , true]

var compras = ["leite", "pão", "queijo", "presunto"]

//length retorna o tamanho da lista
compras.length

//push adiciona um elemento no final da lista
compras.push("arroz")

//pop remove o ultimo elemntoda lista
compras.pop

//splice substitui elmentos da lista
//adicionando
compras.splice(2,0, "banana");
//removendo
compras.splice(2,1);

var listaCompras = ["leite", "pão", "queijo", "presunto"]

function preencherSelect(){
    var htmlFinal = "";
    tamanhoLista = listaCompras.length;

    for(var i = 0; i < tamanhoLista; i++ ){
        htmlFinal += "<option value="+ i +">"+ listaCompras[i] + "</option>"
    }

    document.getElementById("meuSelect").innerHTML = htmlFinal;
}

function adicionarItem(){
    var valorInput = document.getElementById("inputItem").value;
    listaCompras.push(valorInput);
    preencherSelect()
}

function removerItem(){
    var valorSelect = document.getElementById("meuSelect").value;
    listaCompras.splice(valorSelect, 1);
    preencherSelect();
}

function soma(){
    var num1 = parseInt(document.getElementById("input1").value);
    var num2 = parseInt(document.getElementById("input2").value);
    
    document.getElementById("resultado").innerHTML = num1+num2
}

function sub(){
    var num1 = parseInt(document.getElementById("input1").value);
    var num2 = parseInt(document.getElementById("input2").value);
    
    document.getElementById("resultado").innerHTML = num1-num2
}

function mult(){
    var num1 = parseInt(document.getElementById("input1").value);
    var num2 = parseInt(document.getElementById("input2").value);
    
    document.getElementById("resultado").innerHTML = num1*num2
}

function divi(){
    var num1 = parseInt(document.getElementById("input1").value);
    var num2 = parseInt(document.getElementById("input2").value);
    
    document.getElementById("resultado").innerHTML = num1/num2
}