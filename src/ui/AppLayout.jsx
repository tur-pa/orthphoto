import { Outlet } from "react-router-dom";
import Header from "./Header";
import BackgroundImage from "./BackgroundImage";

function AppLayout() {
  return (
    <div className="container mx-auto">
      <div className="fixed left-0 -z-50">
        <BackgroundImage></BackgroundImage>
      </div>

      <Header></Header>

      <Outlet></Outlet>
    </div>
  );
}

export default AppLayout;
