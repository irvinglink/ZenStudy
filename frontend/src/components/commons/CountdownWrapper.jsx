import Countdown, { zeroPad } from "react-countdown";
import config from '../../config.json'

const Completed = () => (
  <p class="text-white font-montserrat font-bold text-5xl">Time's Up!</p>
);

let COUNTDOWN_API = null;
let TIME_MINUTES = config.settings.time; // DATABASE
let DATE = Date.now();

const renderer = ({ hours, minutes, seconds, completed, api }) => {
    
    COUNTDOWN_API = api;

  if (completed) {
    return <Completed />;
  } else {

    return (
      <span class="text-white font-azeret font-bold text-5xl ">
        {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
      </span>
    );

  }
};


export function startCountdown() {
    COUNTDOWN_API.start()
}

export function stopCountdown() {
    COUNTDOWN_API.stop()
}

export function pauseCountdown() {
    COUNTDOWN_API.pause()
}

export function CountdownWrapper() {
  return (
    <Countdown
      autoStart={false}
      date={DATE + TIME_MINUTES * 60 * 1000}
      renderer={renderer}
    />
  );
}
