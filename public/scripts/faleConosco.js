/// <reference path="../vendor/jquery-3.5.1.js" />
/// <reference path="index.d.ts" />

var faleConosco = localStorage.getItem("faleConosco");// Recupera os dados armazenados
faleConosco = JSON.parse(faleConosco); // Converte string para objeto
if (faleConosco == null) // Caso não haja conteúdo, iniciamos um vetor vazio
    faleConosco = [];
console.log(faleConosco);
function enviarcomentario() {

    //alert("aaaaaaallllllooooo");
    var nomelei = document.getElementById('nome').value;
    var emaillei = document.getElementById('email').value;
    var mensagemlei = document.getElementById('mensagem').value;
    if (nomelei != "" && emaillei != "" && mensagemlei != "") {
        console.log(nomelei);
        console.log(emaillei);
        console.log(mensagemlei);
        /**
         * @type {{[key: string]: import(".").Contato}} //tipo, objeto,todos as propriedades dele string = [key: string]: string tipo dela tambem é uma string
         */
        var contato = JSON.stringify({
            nome: nomelei,
            email: emaillei,
            mensagem: mensagemlei,

        });
        faleConosco.push(contato);
        localStorage.setItem("faleConosco", JSON.stringify(faleConosco));
        $("#incompleto").hide();
        $('#sucesso').show();
        console.log(faleConosco);
    } else {
        $('#incompleto').show()
        $('#sucesso').hide();
    }
}
$(()=>{
    $('#sucesso').hide();
    $('#incompleto').hide();
})
//document.getElementById('btncontato').addEventListener('click', enviarcomentario);
//document.getElementById('btncontato').onclick(enviarcomentario);