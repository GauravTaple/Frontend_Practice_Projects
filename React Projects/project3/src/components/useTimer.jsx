import  { useState, useEffect } from 'react';
 
export const useTimer = (initialTime = 0) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
 
  useEffect(() => {
    console.log('**********');
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        console.log('---------------------');
        // if(time !==0){
            setTime(prevTime => prevTime - 1);
        // }
      }, 1000);
    } else {
      clearInterval(timer);
    }
 
    return () => clearInterval(timer);
  }, [isRunning]);
 
  const startTimer = () => {
    setIsRunning(true);
  };
 
  const stopTimer = () => {
    setIsRunning(false);
  };
 
  const resetTimer = () => {
    setTime(initialTime);
    setIsRunning(false);
  };
 
  return {
    time,
    isRunning,
    startTimer,
    stopTimer,
    resetTimer
  };
};