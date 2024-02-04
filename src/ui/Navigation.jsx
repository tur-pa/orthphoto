import Logo from "./Logo";
import Menu from "./Menu";

const styledNav = `container mx-auto mt-4 flex justify-between`;

function Navigation() {
  return (
    <nav className={styledNav}>
      <Logo></Logo>
      <Menu></Menu>
    </nav>
  );
}

export default Navigation;
