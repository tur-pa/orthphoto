import Menu from "./Menu";
import SearchForm from "./SearchForm";

const styledHeader = `container mx-auto mt-6 flex items-center justify-between`;
const styledLogo = `text-2xl font-semibold`;
const styledDivedLine = `my-8 border-gray-300`;

function Header() {
  return (
    <>
      <header className={styledHeader}>
        <h1 className={styledLogo}>Orthphoto</h1>
        <SearchForm type="marginX"></SearchForm>
        <Menu></Menu>
      </header>
      <hr className={styledDivedLine}></hr>
    </>
  );
}

export default Header;
