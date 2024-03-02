import { useSearchParams } from "react-router-dom";
import { GALLERY_SIZE } from "../utils/constants";

const liStyled = `relative block rounded px-3 py-1.5 text-lg text-gray-600 transition-all hover:bg-gray-100 disabled:invisible`;
const liStyledActivated = liStyled + ` font-medium bg-gray-100`;

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / GALLERY_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  function customPage(pageNum) {
    searchParams.set("page", pageNum);
    setSearchParams(searchParams);
  }

  const isRenderingNext = currentPage + 1 <= pageCount;
  const isRenderingPrev = currentPage > 1;

  // 1 PAGE

  if (pageCount <= 1) return null;

  // >2 PAGES

  return (
    <div>
      <ul className="mt-8 flex list-none">
        {isRenderingPrev && (
          <>
            <li className={liStyled}>
              <button onClick={prevPage}>Poprzednia</button>
            </li>
            <li className={liStyled}>
              <button onClick={() => customPage(currentPage - 1)}>
                {currentPage - 1}
              </button>
            </li>
          </>
        )}
        <li className={liStyledActivated}>
          <button>{currentPage}</button>
        </li>
        {isRenderingNext && (
          <>
            <li className={liStyled}>
              <button onClick={() => customPage(currentPage + 1)}>
                {currentPage + 1}
              </button>
            </li>
            <li className={liStyled}>
              <button>...</button>
            </li>
            <li className={liStyled}>
              <button onClick={() => customPage(pageCount)}>{pageCount}</button>
            </li>
            <li className={liStyled}>
              <button onClick={nextPage}>Następna</button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Pagination;
