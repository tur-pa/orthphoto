import { FaFacebookF, FaInstagram } from "react-icons/fa6";

const styledFooter = `flex items-center justify-between`;
const styledText = `text-sm text-gray-500 text-center hover:*:text-gray-700 *:transition-all *:duration-300"`;
const styledSocial = `flex *:mx-2 text-gray-500 hover:*:text-gray-700 *:transition-all *:duration-300`;

function FooterCopyright() {
  return (
    <div className={styledFooter}>
      <span className={styledText}>
        © 2024&nbsp;
        <a href="https://orthphoto.net/">Orthphoto</a>. All Rights Reserved.
      </span>

      <div className={styledSocial}>
        <a href="/">
          <FaFacebookF />
          <span className="sr-only">Facebook page</span>
        </a>
        <a href="/">
          <FaInstagram />
          <span className="sr-only">Instagram page</span>
        </a>
      </div>
    </div>
  );
}

export default FooterCopyright;
