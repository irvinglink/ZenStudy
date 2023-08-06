import SidebarButton from "./SidebarButton";

function Sidebar({ isEnabled, toggleSidebar }) {
  return (
    <div
      class={`fixed grid grid-cols-sidebar col-span-2 w-1/4 h-screen z-10 ${isEnabled ? "translate-x-0": "-translate-x-3/4"} transition-transform`}
    >
      
      <div class='opacity-25 w-full'>
        <iframe
          class="absolute h-full w-3/4 z-10"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/751456812&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=false"
        ></iframe>
      </div>
      
      <div class="flex h-screen items-center justify-center select-none">
        <SidebarButton toggleSidebar={toggleSidebar} />
      </div>
      
    </div>
  );
}

export default Sidebar;
