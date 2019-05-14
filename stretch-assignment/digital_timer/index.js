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
let incNext = false;

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
  toggleDisabledOnButtons("start");
  toggleDisabledOnButtons("reset");
  if(sTens !== 0) { resetTimer(); }
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

  function incrementNumber(numToInc, elToInc) {
    if(numToInc<9) {
      numToInc++;
      elToInc.textContent = numToInc;
      incNext = false;
    } else {
      numToInc = 0;
      elToInc.textContent = numToInc;
      incNext = true;
    }
    return numToInc;
  }

  function toggleDisabledOnButtons(buttonID) {
    (document.getElementById(buttonID).disabled) ? document.getElementById(buttonID).disabled = false : document.getElementById(buttonID).disabled = true;
  }
  
  function msTenIncrement() {
    msTens = incrementNumber(msTens, document.getElementById("msTens"));
    if(incNext) { msHunIncrement(); }
  }
  
  function msHunIncrement() {
    incNext = false;
    msHun = incrementNumber(msHun, document.getElementById("msHundreds"));
    if(incNext) { sOnesIncrement(); }
  }
  
  function sOnesIncrement() {
    incNext = false;
    sOnes = incrementNumber(sOnes, document.getElementById("secondOnes"));
    if(incNext) { sTensIncrement(); }
  }
  
  function sTensIncrement() {
    sTens++;
    sTensEl.textContent = sTens;
    document.querySelector(".digits").classList.add('redDigit')
    clearInterval(timer);
    toggleDisabledOnButtons("start");
    toggleDisabledOnButtons("reset");
  }
};