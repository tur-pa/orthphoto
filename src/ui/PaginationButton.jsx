import { useSearchParams } from "react-router-dom";
import Button from "../ui/Button";
import { usePhotos } from "../features/photos/usePhotos";

function PaginationButton() {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const currentPage = !searchParams.get("page")
  //   ? 1
  //   : Number(searchParams.get("page"));

  // function nextPhotos() {
  //   const next = currentPage + 1;
  //   searchParams.set("page", next);
  //   setSearchParams(searchParams);
  // }

  const { fetchNextPage, hasNextPage, isFetchingNextPage } = usePhotos();
  return (
    <>
      <button
        disabled={!hasNextPage || isFetchingNextPage}
        onClick={() => fetchNextPage()}
      >
        Załaduj więcej
      </button>
    </>
  );
}

export default PaginationButton;
