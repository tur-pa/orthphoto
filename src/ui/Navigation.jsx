import Logo from "./Logo";
import Menu from "./Menu";

function Navigation() {
  return (
    <div className="flex justify-between text-white h-20 items-center">
      <div className="basis-full">
        <Logo></Logo>
      </div>
      <div className="basis-full">
        <Menu></Menu>
      </div>
    </div>
  );
}

export default Navigation;
