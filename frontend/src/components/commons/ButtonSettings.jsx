function ButtonSettings({ children, icon, tailwind_css, onClick }) {
  return (
    <div
      class={`flex p-1  left-0 gap-2 items-center rounded-lg cursor-pointer ${tailwind_css} hover:bg-btn-set transition-all`}
      onClick={onClick}
    >
      {icon}
      <span class="flex-grow">{children}</span>
    </div>
  );
}

export default ButtonSettings;
