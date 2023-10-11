function calcular() {
    event.preventDefault(); //parar o submit do formulário

    // declaradas as variáveis
    // n1 = Primeiro Número
    // n2 = Segundo Número
    // op = Operação referente
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let op = document.getElementById('operacao').value;
    let resultado; //indefinido

    // iniciada a lógica com If, Else If, Else
    if (op == '+') {
        // de soma
        resultado = somar(n1, n2);
    }
    else if (op == '-') {
        // de subtração
        resultado = subtrair(n1, n2);
    }
    else if (op == '*') {
        // de multiplicação
        resultado = multiplicar(n1, n2);
    }
    else if (op == '/') {
        // de divisão
        resultado = dividir(n1, n2);
    } else {
        // caso digitado caracter inválido, exibe na tela
        alert('Insira uma operação válida! (+,-,*,/)')
    }

    // se digitado caracter válido, retorna o valor da função com operação realizada
    alert(`O resultado da operação é : ${resultado}`);
}

// iniciada a lógica de return dos elementos após a verificação
function somar(n1, n2) {
    // retorna o valor da soma
    return n1 + n2; 
}

function subtrair(n1, n2) {
    // da subtração
    return n1 - n2;
}

function multiplicar(n1, n2) {
    // da multiplicação
    return n1 * n2;
}

function dividir(n1, n2) {
    // da divisão
    return n1 / n2;
}