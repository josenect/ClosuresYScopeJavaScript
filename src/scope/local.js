// el scope local funcioan en bloque y en funcion en variables var el scope es en funcion 
// al imprimri  el ultimo consolelog imprime la var global ya que la asignacion en la funcion es de otro scope
var hello = ' el inicio'

const helloWorl = () => {
   var hello = 'Hello World'
    console.log(hello)
}

helloWorl()
console.log(hello)
