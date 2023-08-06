import {
  CountdownWrapper,
  startCountdown,
  stopCountdown,
  pauseCountdown,
} from "./commons/CountdownWrapper";

import Button from "./commons/Button";

function HeroSection() {
  return (
    <section class="flex flex-grow items-center justify-center">
      <div class="flex flex-col ml-6 mr-6 items-center [&>p]:text-white">
        <CountdownWrapper />

        <div class="flex mt-2 gap-12">
          <Button onClick={startCountdown}>Start</Button>
          <Button onClick={pauseCountdown}>Pause</Button>
          <Button onClick={stopCountdown}>Stop</Button>
        </div>
        
      </div>
    </section>
  );
}

export default HeroSection;
