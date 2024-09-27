$("#pesquisarPokemon").click(buscarPokemon)

function buscarPokemon() {
    var nomePokemon = $("#inputPokemon").val().toLowerCase();

    $.get("https://pokeapi.co/api/v2/pokemon/" + nomePokemon, preencherTabela)
    .fail(limparTabela);
    console.log("teste")
}

function preencherTabela(data) {
    $("#nomePokemon").text(data.name);
    $("#tipoPokemon").text(data.types[0].type.name);
    $("#hpPokemon").text(data.stats[0].base_stat);
    $("#imagemPokemon").attr('src', data.sprites.front_default);
    $("attkPokemon").text(data.stats[1].base_stat);
    $("weightPokemon").text(data.type[1].type.weight);
    $("#imagemPokemonShine").attr('src', data.sprites.front_shiny);
}

function limparTabela() {
    $("#nomePokemon").text('');
    $("#tipoPokemon").text('');
    $("#hpPokemon").text('');
    $("#imagemPokemon").attr('src', '');
    alert('Pokémon não encontrado!'); 
}