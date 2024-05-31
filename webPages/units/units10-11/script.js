//window.alert("ola mundo");

//boleana
var chuva = false;
var sol = true;


console.log(chuva);
console.log(sol);

//number;
var idade = 14;;
var altura = 1.70;;

console.log(typeof(idade));
console.log(typeof(altura));

//string;
var nome = "Ana";

//tipos de declaraçoes de variaveis;
//var = escopo global pode ser alterada, permite criaçao de variavel vazia;
;
var sobrenome = "silva";
sobrenome = "rocha";
var fruta;
fruta = "maça";
fruta = "banana";

//let =pode ser alterada, permite criaçao de variavel vazia, escopo local;
let aluno = "pedro";
alumo = "kevin";
let comida;

if(true){
    var animal =" gato";
    console.log("dentro do bloco" + animal);
}
console.log("fora do bloco" + animal);

//const = escopo local, nao pode ser alterada, e nao pode ser vazia;
 const sobremesa = "pudim";
 //sobremesa = "bolo";
 //const amigo;

 var comparacao = (0 == "0");
 console.log(comparacao);

 var comparacao2 = (0 === "0");
 console.log(comparacao2);