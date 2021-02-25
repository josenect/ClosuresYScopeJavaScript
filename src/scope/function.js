
const fuits = () => {

    var fruit = 'apple'
    console.log(fruit)
}

fuits()
console.log(fruit)   // no es definida en este scope ya que fruit es del scope de la funcion

const anotherFunction = () => {
    var x = 1
    var x = 2
    let y = 1 
    //let y = 2    no se puede re declarar en un scope pero si re asignar
    y = 5


    console.log(x)
    console.log(y)

}

anotherFunction()

