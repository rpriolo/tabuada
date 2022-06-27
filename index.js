var botaoGerar = document.querySelector('input#botao');
botaoGerar.addEventListener('click', gerarTabuada)

function gerarTabuada() {
    var table = document.querySelector('table#resultado');
    table.innerHTML = ''; // Limpa o resultado anterior

    var inputNumero = document.querySelector('input#numero');
    var numeroDigitado = Number(inputNumero.value);

    
    for (var i = 0; i <= 10; i++) {
        var tr = document.createElement('tr');
        table.appendChild(tr);
        var td1 = document.createElement('td');
        td1.setAttribute('id', 'conta')
        var td2 = document.createElement('td');
        td2.setAttribute('id', 'igual')
        var td3 = document.createElement('td');
        td3.setAttribute('id', 'resultado')
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        var resultadoTabuada = numeroDigitado * i;

        td1.innerHTML = `${numeroDigitado} × ${i}`;
        td2.innerHTML = `=`;
        td3.innerHTML = `${resultadoTabuada}`;

    }
};