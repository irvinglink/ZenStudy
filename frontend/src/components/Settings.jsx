import ButtonSettings from "./commons/ButtonSettings";
import { BsFillBrushFill, BsFillClockFill } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import './css/Settings.css'

function Settings({settingsToggler, settingsState }) {
  const [optionState, setOption] = useState("");

  const handleOptionClick = (option) => {
    setOption(option);

    // TODO CHANGE PAGE STATE
  };

  return (
    <div className={`settings ${settingsState ? "fade-in" : "fade-out"}`}>

      <div
        class="fixed h-screen w-screen bg-black-op z-30"
        onClick={settingsToggler}
      />

      <div class="flex flex-col fixed top-0 left-0 right-0 bottom-6 mx-auto my-auto h-4/6 w-150 z-40 bg-black rounded-2xl">
        <div class="flex w-full px-10 py-5 justify-between items-center">
          <span class="text-white font-azeret">Settings</span>

          <span class="text-white font-azeret">{optionState}</span>

          <div class="cursor-pointer rounded-full">
            <MdClose size={25} color="#383b3d" onClick={settingsToggler} class='hover:fill-white transition-all' />
          </div>
        </div>
        <div class="grid grid-cols-settings px-10 pb-2 flex-grow">
          <div class="flex flex-col gap-2 border-r border-r-white pr-2">
            <ButtonSettings
              icon={<BsFillClockFill />}
              tailwind_css="text-white"
              onClick={() => handleOptionClick("Pomodoro")}
            >
              Pomodoro
            </ButtonSettings>
            <ButtonSettings
              icon={<BsFillBrushFill />}
              tailwind_css="text-white"
              onClick={() => handleOptionClick("Theme")}
            >
              Theme
            </ButtonSettings>
            <ButtonSettings
              icon={<AiOutlineUnorderedList />}
              tailwind_css="text-white"
              onClick={() => handleOptionClick("Profiles")}
            >
              Profiles
            </ButtonSettings>
          </div>

          <div>
            
          </div>
        </div>
        <div class='w-full py-10'>

        </div>
      </div>
      
    </div>
  );
}

export default Settings;
