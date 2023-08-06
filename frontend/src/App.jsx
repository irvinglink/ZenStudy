import data from "./data.json";
import Utils from "./utils";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Sidebar from "./components/commons/Sidebar";
import Settings from "./components/Settings";
import { useState } from "react";
import { FadeOut } from "react-animated-components";

const backgroundKeys = Object.keys(data.backgrounds); // Convert the keys into an array
var img_src =
  data.backgrounds[backgroundKeys[Utils.getRandomInt(backgroundKeys.length)]]; // Get a random image URL

function App() {
  const [sidebarState, setSidebar] = useState(false);
  const toggleSidebar = () => setSidebar((prevState) => !prevState);

  const [settingsState, setSettingsState] = useState(false);
  const toggleSettings = () => setSettingsState((prevState) => !prevState);

  return (
    <div>
      <Settings
          settingsToggler={toggleSettings}
          settingsState={settingsState}
        />

      <div class="flex flex-col h-screen">
        <Navbar sidebarState={sidebarState} />
        <HeroSection />
        <Footer sidebarState={sidebarState} settingsToggler={toggleSettings} />
      </div>

      <Sidebar isEnabled={sidebarState} toggleSidebar={toggleSidebar} />

      <div class="fixed top-0 bottom-0 left-0 right-0 object-contain -z-10">
        <img src={img_src} loading="lazy" class="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default App;
