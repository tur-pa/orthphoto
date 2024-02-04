const styledGrid = `grid grid-cols-3 gap-8`;
const styledHeader = `mb-6 text-sm font-semibold text-gray-800 uppercase`;
const styledList = `text-gray-500 font-medium [&>*:not(:last-child)]:mb-4 hover:*:text-gray-900 *:transition-all *:duration-300`;

function FooterList() {
  return (
    <div className={styledGrid}>
      <div id="col-nr-1">
        <h2 className={styledHeader}>Zdjęcia</h2>
        <ul className={styledList}>
          <li>
            <a href="/">Przeglądaj</a>
          </li>
          <li>
            <a href="/">Wyszukaj</a>
          </li>
        </ul>
      </div>

      <div id="col-nr-2">
        <h2 className={styledHeader}>Społeczność</h2>
        <ul className={styledList}>
          <li>
            <a href="/">Zaloguj się</a>
          </li>
          <li>
            <a href="/">Dołącz</a>
          </li>
          <li>
            <a href="/">Autorzy</a>
          </li>
        </ul>
      </div>

      <div id="col-nr-3">
        <h2 className={styledHeader}>Orthphoto</h2>
        <ul className={styledList}>
          <li>
            <a href="/">O nas</a>
          </li>
          <li>
            <a href="/">Wsparcie</a>
          </li>
          <li>
            <a href="/">Kontakt</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterList;
