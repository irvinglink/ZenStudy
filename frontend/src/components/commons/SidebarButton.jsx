import { useState } from "react";
import { FaHeadphones } from "react-icons/fa";
import { MdClose } from "react-icons/md";

function SidebarButton({ toggleSidebar }) {
  const [iconState, setIconState] = useState(true);

  const toggleIconState = () => setIconState((prevState) => !prevState);

  const completeToggle = () => {
    toggleSidebar();
    toggleIconState();
  };

  return (
    <div
      class="border-2 rounded-full border-white p-2 cursor-pointer hover:scale-105 transition-all"
      onClick={completeToggle}
    >
      {iconState ? (
        <FaHeadphones size={30} color="white" />
      ) : (
        <MdClose size={30} color="white" />
      )}
    </div>
  );
}

export default SidebarButton;
