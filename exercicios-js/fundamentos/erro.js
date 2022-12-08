function tratarErroELancar(erro) {
    //throw new error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {//throw irá executar um bloco caso ocorra um erro capturado e try e tratado pelo catch
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {//try é um bloco que pode gerar algum tipo de erro, e caso ocorra o erro podemos tratar
        console.log(obj.name.toUpperCase() + '!!!')    
    } catch (e) {//apartir do catch podemos tratar o erro e jogar para Throw
        tratarErroELancar(e)
    } finally {//Finally tambem é uma funçao do try que ira imprimir algo ao final da função
        console.log('final.')
    }   
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)