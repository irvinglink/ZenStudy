import { IoMdSettings } from "react-icons/io";

function Footer({sidebarState, settingsToggler}) {
  return (
    <footer class="h-20 flex flex-row items-center ml-6 mr-6">
      
      <div class={`items-start cursor-pointer z-20 hover:scale-105 ${(sidebarState) ? "hidden": ""}`} onClick={settingsToggler}>
        <IoMdSettings size={35} color="white" />  
      </div>

      <div class="ml-auto items-end text-white font-montserrat opacity-50">
        &copy; Irvinglink
      </div>

      {/*  SPOTIFY EMBED
        
        <iframe
          src="https://open.spotify.com/embed/playlist/3WLDIcG4Cx2UOPy0rbFhQn?utm_source=oembed"
          class="absolute top-0 left-0 pl-6 w-1/4 h-full border-0"
          allowfullscreen
          allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture;"
        ></iframe> */}

      {/*  SOUNDCLOUD EMBED
        <iframe
          class="h-full w-full"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/751456812&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true"
        ></iframe> */}
    </footer>
  );
}

export default Footer;
