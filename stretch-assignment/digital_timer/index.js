(function() {
  let timer = setInterval(incrementTime, 2000)

  let sTensEl = document.getElementById("secondTens");
  let sOnesEl = document.getElementById("secondOnes");
  let msHunEl = document.getElementById("msHundreds");
  let msTensEl = document.getElementById("msTens");

  let sTens = 0;
  let sOnes = 0;
  let msHun = 0;
  let msTens = 0;
  
  let doIZero = true;

  function incrementTime() {
    if(doIZero) {
      doIZero = zeroCounter();
    }
    // msTenIncrement();
  }

  function zeroCounter() {
    console.log('zero');
    sTensEl.textContent = 0;
    sOnesEl.textContent = 0;
    msHunEl.textContent = 0;
    msTensEl.textContent = 0;
    return false
  }

  // function msTenIncrement() {
  //   if(msTens<10) {
  //     msTensElContent = msTens;
  //     msTens++;
  //   } else {
  //     msHunEl
  //   }
  // }
})();