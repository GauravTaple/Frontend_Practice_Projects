import { useTimer } from "./useTimer";

function Otp() {
    const { time, isRunning, startTimer, stopTimer, resetTimer } = useTimer(60);
    // console.log(time,'time' );
    // console.log( isRunning ,'isRunning');
    // console.log( startTimer,'startTimer' );
    // console.log(stopTimer,'stopTimer' );
    // console.log( resetTimer,'resetTimer' );


    const formatTime = () => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      };

  return (
    <div>
       <h1>Timer: {formatTime()}</h1>
       <button onClick={startTimer} disabled={isRunning}>
               Start
       </button>
       <button onClick={stopTimer} disabled={!isRunning}>
               Stop
       </button>
       <button onClick={resetTimer}>
               Reset
       </button>
    </div>
  )
}

export default Otp