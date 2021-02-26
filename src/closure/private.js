// Clouser variable privadas y metodos privados 
//https://developer.mozilla.org/es/docs/Web/JavaScript/Closures

const person = () => {
    var name = 'Name'
  
    return {
      getName : () => {
        return name
      },
  
      setName : (value) =>{
        name = value
      }
    }
  }
  
  const newPerson = person()
  console.log(newPerson.getName())
  newPerson.setName('jose')
  console.log(newPerson.getName())

  // metodos privados
  var Counter = (function() {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment: function() {
        changeBy(1);
      },
      decrement: function() {
        changeBy(-1);
      },
      value: function() {
        return privateCounter;
      }
    }
  })();
  
  console.log(Counter.value()); /* Muestra 0 */
  Counter.increment();
  Counter.increment();
  console.log(Counter.value()); /* Muestra 2 */
  Counter.decrement();
  console.log(Counter.value()); /* Muestra 1 */ 