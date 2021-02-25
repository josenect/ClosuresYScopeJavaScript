const fruit = () => {
    if (true) {
        var fruit1 = 'apple'
        let fruit2 = 'banana'
        const fruit3 = 'pera'

    }
    console.log(fruit1)
    console.log(fruit2) // se imprimen desde un scope que no existe ya que esta definida en un scope en bloque y no en funcion
    console.log(fruit3) // se imprimen desde un scope que no existe ya que esta definida en un scope en bloque y no en funcion

}

fruit()

const anotherFunction = () => {
    for (var index = 0; index < 10; index++) {   // si se define como var al terminar el tiempo el toma el valor que tenga de yltimo en es escope
        setTimeout(() => {
            console.log(index);
        },1000)
        
    }


}
 
anotherFunction()