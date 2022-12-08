function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

area(5, 8)
console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 5, 55, 80, 20))
console.log(area(5, 5))