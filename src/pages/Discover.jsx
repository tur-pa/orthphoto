import Gallery from "../ui/Gallery";
import Filter from "../ui/Filter";
import Sort from "../ui/Sort";
import CheckboxFilter from "../ui/CheckboxFilter";
import SelectFilter from "../ui/SelectFilter";
import { useDataContext } from "../context/DataContext";

const styledContainer = `container mx-auto transition-all`;
const styledHeaderText = `text-5xl font-semibold text-gray-900`;
const styledFilterSection = `container mx-auto my-8 flex justify-between`;

function Discover() {
  const { filter, filterCategory } = useDataContext();
  return (
    <div>
      <section className={styledContainer}>
        <h2 className={styledHeaderText}>
          Odkrywaj prawosławie w serwisie Orthphoto
        </h2>
      </section>

      <section className={styledFilterSection}>
        <div className="flex gap-3">
          <Filter
            options={[
              { value: "photos", label: "Zdjęcia" },
              { value: "country", label: "Kraj" },
              { value: "category", label: "Kategoria" },
              { value: "users", label: "Użytkownicy" },
            ]}
          ></Filter>
        </div>
        <div className="flex items-center">
          <SelectFilter
            options={[
              { value: "", label: "Sortuj według" },
              { value: "created_at", label: "Data dodania" },
              { value: "views", label: "Popularność" },
              { value: "rating", label: "Najwyżej oceniane" },
              { value: "comments_num", label: "Komentowane" },
            ]}
          ></SelectFilter>
          <Sort></Sort>
        </div>
      </section>
      <section className={styledContainer}>
        {filterCategory === "country" && (
          <CheckboxFilter
            options={[
              { value: "poland", label: "Polska" },
              { value: "greece", label: "Grecja" },
              { value: "norway", label: "Norwegia" },
              { value: "spain", label: "Hiszpania" },
              { value: "canada", label: "Kanada" },
              { value: "china", label: "Chiny" },
              { value: "france", label: "Francja" },
              { value: "georgia", label: "Gruzja" },
              { value: "portugal", label: "Portugalia" },
            ]}
          ></CheckboxFilter>
        )}
      </section>
      <section className={styledContainer}>
        {filterCategory === "category" && (
          <CheckboxFilter
            options={[
              { value: "landscape", label: "Krajobrazy" },
              {
                value: "architecture-churches",
                label: "Architektura - Cerkiew",
              },
              {
                value: "architecture-monasteries",
                label: "Wnętrza - Ikonostas",
              },
              { value: "interior-icons", label: "Wnętrza - Ikony" },
              { value: "reportage-feasts", label: "Reporterskie - Święta" },
              {
                value: "reportage-services",
                label: "Reporterskie - Nabożeństwa",
              },
              { value: "people-hierarchy", label: "Ludzie - Hierarchia" },
              { value: "people-monks", label: "Ludzie - Mnisi" },
              { value: "humour", label: "Humor" },
            ]}
          ></CheckboxFilter>
        )}
      </section>
      <Gallery filter={filter}></Gallery>
    </div>
  );
}

export default Discover;
