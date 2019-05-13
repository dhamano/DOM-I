(function() {
  let startButton = document.createElement("button");
  let resetButton = document.createElement("button");
  let brEl = document.createElement("br");
  startButton.textContent = "Start 10 second Timer";
  startButton.setAttribute("id","start");
  resetButton.setAttribute("id","reset");
  startButton.setAttribute("onClick","javascript:startTimer()");
  resetButton.setAttribute("onClick","javascript:resetTimer()");
  resetButton.textContent = "Reset Timer";
  document.querySelector(".digits").append(brEl);
  document.querySelector(".digits").append(startButton);
  document.querySelector(".digits").append(resetButton);

})();

let sTensEl = document.getElementById("secondTens");
let sOnesEl = document.getElementById("secondOnes");
let msHunEl = document.getElementById("msHundreds");
let msTensEl = document.getElementById("msTens");

let sTens = 0;
let sOnes = 0;
let msHun = 0;
let msTens = 0;
  
let doIZero = true;
let stopTimer = true;

function resetTimer() {
  document.querySelector(".digits").classList.remove('redDigit');
  msTensEl.textContent = "-";
  msHunEl.textContent = "-";
  sOnesEl.textContent = "-";
  sTensEl.textContent = "-";
  sTens = 0;
  doIZero = true;
}

function startTimer() {
  document.getElementById("start").disabled = true;
  document.getElementById("reset").disabled = true;
  if(sTens !== 0) {
    resetTimer();
  }
  let timer = setInterval(incrementTime, 10)

  function incrementTime() {
    if(doIZero) {
      doIZero = zeroCounter();
    }
    msTenIncrement();
  }

  function zeroCounter() {
    sTensEl.textContent = 0;
    sOnesEl.textContent = 0;
    msHunEl.textContent = 0;
    msTensEl.textContent = 0;
    return false
  }
  
  function msTenIncrement() {
    if(msTens<9) {
      msTens++;
      msTensEl.textContent = msTens;
    } else {
      msTens = 0;
      msTensEl.textContent = msTens;
      msHunIncrement();
    }
  }
  
  function msHunIncrement() {
    if(msHun<9) {
      msHun++;
      msHunEl.textContent = msHun;
    } else {
      msHun = 0;
      msHunEl.textContent = msHun;
      sOnesIncrement();
    }
  }
  
  function sOnesIncrement() {
    if(sOnes<9) {
      sOnes++;
      sOnesEl.textContent = sOnes;
    } else {
      sOnes = 0;
      sOnesEl.textContent = sOnes;
      sTensIncrement();
    }
  }
  
  function sTensIncrement() {
    sTens++;
    sOnesEl.textContent = sOnes;
    sTensEl.textContent = sTens;
    document.querySelector(".digits").classList.add('redDigit')
    clearInterval(timer);
    document.getElementById("start").disabled = false;
    document.getElementById("reset").disabled = false;
  }
};