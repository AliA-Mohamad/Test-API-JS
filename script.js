async function search(cep){
    let erroMSG = document.getElementById('erro');
    erroMSG.innerHTML = `<p class="error-p"> </p>`
    try{
        let query = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let queryJson = await query.json();

        autoc(
            queryJson.uf,
            queryJson.localidade,
            queryJson.bairro,
            queryJson.logradouro
        );

    } catch (erro) {
        let erroMSG = document.getElementById('erro');
        erroMSG.innerHTML = `<p class="error-p"> CEP inválido, Tente novamente! </p>`
        console.log(erro);
    }
}

function autoc(estado, cidade ,bairro ,rua) {
    let es = document.getElementById("estado")
    let city = document.getElementById("cidade")
    let ba = document.getElementById("bairro")
    let r = document.getElementById("rua")

    es.value = estado;
    city.value = cidade
    ba.value = bairro
    r.value = rua
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => search(cep.value))
