//com a função arrow o mesmo exemplo usado em aulas anteriores, eu não preciso amarra o objeto junto ao bind
function pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new pessoa