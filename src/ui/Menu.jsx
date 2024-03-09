import MenuButton from "./MenuButton";

const styledNav = `flex justify-between gap-4 self-center font-semibold text-nowrap`;

function Menu() {
  return (
    <div className={styledNav}>
      <a href="/discover">Przeglądaj</a>
      <a href="/">Prześlij zdjęcie</a>
      <MenuButton></MenuButton>
      <a href="/signup">Dołącz</a>
    </div>
  );
}

export default Menu;
