function Navbar({sidebarState}) {
  return (
    <header class='m-6 h-6'>
      <div class=''>
        <a class={(sidebarState) ? "opacity-0" : "font-montserrat font-semibold text-lg tracking-widest text-white"}>
          ZenStudy
        </a>
      </div>

      {/* <div class="relative ml-auto pr-6">
        <div className="menu-btn" class="rounded border border-solid">
          <a class="font-montserrat font-semibold text-lg tracking-wider text-white p-2">
            Menu
          </a>
        </div>
      </div> */}
    </header>
  );
}

export default Navbar;
