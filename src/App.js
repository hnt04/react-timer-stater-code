import React from "react";
import useTimer from "./useTimer";

function App() {
  const { time, startTimer, stopTimer, resetTimer, active } = useTimer(0);

  const formatTime = (time) => {
    const getSeconds = `0${(time % 60)}.slide(-2)`
    const minutes = `${Math.floor(time/60)}`
    const getMinutes = `${minutes % 60}.slide(-2)`
    const getHours = `0${Math.floor(time/3600)}`

    return `${getHours} : ${getMinutes} : ${getSeconds}`
  }

  return (
    <div className="App container">
      <h1>Coder Timer</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <p>{formatTime(time)}</p>
        </div>
        <div className="button__wrapper">
          <button className="button" onClick={stopTimer}>
            Stop
          </button>
          <button
            className="button"
            ref={active}
            onClick={startTimer}
          >
            Start
          </button>
          <button className="button" onClick={resetTimer}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
