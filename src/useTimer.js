import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(ini);

  const isStart = useRef(0);
  const active = useRef(true);
  const refInterval = useRef();

  const startTimer = () => {
    refInterval.current=setInterval(() => {
      isStart.current++;
      setTime(prev => prev + 1)
    }, 1000)
    active.current.disabled = true;
  };
  const stopTimer = () => {
    clearInterval(refInterval.current);
    refInterval.current = 0
  };
  const resetTimer = () => {
    stopTimer();
    if(time) {
      refInterval.current++;
      setTime(0)
    }
    active.current.disabled = false;
  };

  return { time, startTimer, stopTimer, resetTimer, active };
};
export default useTimer;
