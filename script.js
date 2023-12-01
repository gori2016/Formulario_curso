function check_form() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var masculino = document.getElementById("masculino").checked;
    var feminino = document.getElementById("feminino").checked;
    var outro = document.getElementById("outro").checked;
    var tipoDoContato = document.getElementById("tipodecontato").value;

    if (nome == "") {
        alert("Preencha o nome")
        return false;

    }

    if (telefone == "") {
        alert("digite o telefone")
        return false;

    }



    if (masculino && feminino && outro == "") {
        alert("preencha o genero");
        return false;
    }




    if (tipoDoContato == "") {
        alert("preencha o contato");
        return false;
    }

    return true;
}