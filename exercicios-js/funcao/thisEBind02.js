function pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}// outra forma de resolver é retirando a cons self e utilizando a amarração do bind, para que sempre retorno o valor do this para o objeto pessoa

new pessoa