import FooterCopyright from "./FooterCopyright";
import FooterList from "./FooterList";

const styledFooter = `w-full px-4 container mx-auto py-8`;
const styledDivideLine = `my-8 border-gray-300`;
const styledLogo = `text-2xl font-semibold`;
const styledContainer = `flex justify-between`;

function Footer() {
  return (
    <footer className={styledFooter}>
      <hr className={styledDivideLine}></hr>
      <div className={styledContainer}>
        <a href="/">
          <span className={styledLogo}>Orthphoto</span>
        </a>
        <FooterList></FooterList>
      </div>

      <hr className={styledDivideLine}></hr>
      <FooterCopyright></FooterCopyright>
    </footer>
  );
}

export default Footer;
