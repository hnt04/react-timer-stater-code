import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState("0:00:00");

  const isStart = "Your code here";
  const active = useRef(0);
  const refInterval = useRef();

  const startTimer = () => {
    "Your code here";
    active.current.disabled = true;
  };
  const stopTimer = () => {
    "Your code here";
  };
  const resetTimer = () => {
    "Your code here";
    active.current.disabled = false;
  };

  return { time, startTimer, stopTimer, resetTimer, active };
};
export default useTimer;
