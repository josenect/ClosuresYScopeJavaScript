var a = 'Hello';

function hello () {
    let b = 'Hello world';
    const c = 'Hello world!!';
    if (true) {
        let d = '¡¡Hello world!!';
        debugger;
    }
}

hello();



const moneyBoxCorrect = () => {
    debugger; //Para poder ver lo que pasa en el programa y el scope.
    var saveCoinsCorrect = 0;
    const countCoins = (coins) => {
      debugger;
      saveCoinsCorrect += coins;
      console.log(`MoneyBox: $$${saveCoinsCorrect}`);
    }
    return countCoins;
  }

  let myMoneyBox = moneyBoxCorrect();

  myMoneyBox(4);
  myMoneyBox(6);
  myMoneyBox(10);

  //crear la pagina nueva para hacer debugging

  about:blank

  const helloWorld = () => {  globalVar = "I'm global"; 

}
   helloWorld();
   console.log(globalVar)
