let operador = '';
let finalizouOperacao = false;

export default function operaCalculadora(inputTela, valorRecebido, memoriaRecebida){
    if(valorRecebido >= parseInt("0") && valorRecebido <= parseInt("9")){
        if(inputTela === '0' || finalizouOperacao === true){
            finalizouOperacao = false;
            return {novoValor: valorRecebido, novaMemoria: memoriaRecebida};
        }
        return {novoValor: inputTela.concat('', valorRecebido), novaMemoria: memoriaRecebida};
    }else if(valorRecebido === '.'){
        if(!inputTela.includes('.')){
            return {novoValor: inputTela.concat('', valorRecebido), novaMemoria: memoriaRecebida};
        }
        return {novoValor: inputTela, novaMemoria: memoriaRecebida};
    }else if(valorRecebido === 'c' || valorRecebido === "Delete"){
        operador = '';
        memoriaRecebida = 0;
        return {novoValor: '0', novaMemoria: memoriaRecebida}
    }else if(valorRecebido === '=' || valorRecebido === "Enter"){
        memoriaRecebida = calculaResultado(inputTela, memoriaRecebida);
        operador = ''
        finalizouOperacao = true;
        return {novoValor: memoriaRecebida.toString(), novaMemoria: 0};
    }else if(valorRecebido === '!'){
        let result;
        
        result = (parseFloat(inputTela) * -1).toString();
        
        return {novoValor: result, novaMemoria: memoriaRecebida};
    }else{
        if(operador !== ''){
            memoriaRecebida = calculaResultado(inputTela, memoriaRecebida);
        }else{
            memoriaRecebida = parseFloat(inputTela);
        }
        operador = valorRecebido;
        return {novoValor: '0', novaMemoria: memoriaRecebida};
    }
}

function calculaResultado(inputTela, memoriaRecebida){
    if(operador === '+'){
        memoriaRecebida += parseFloat(inputTela);
    }else if(operador === '-'){
        memoriaRecebida -= parseFloat(inputTela);
    }else if(operador === '/'){
        memoriaRecebida /= parseFloat(inputTela);
    }else if(operador === 'x' || operador === '*'){
        memoriaRecebida *= parseFloat(inputTela);
    }

    return memoriaRecebida
}