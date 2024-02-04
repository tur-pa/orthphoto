import Gallery from "../ui/Gallery";
import Filter from "../ui/Filter";

const styledHeader = `container mx-auto`;
const styledHeaderText = `text-5xl font-semibold text-gray-900`;
const styledFilter = `container mx-auto mb-5 mt-10`;

function Discover() {
  return (
    <div>
      <section className={styledHeader}>
        <h2 className={styledHeaderText}>
          Odkrywaj prawosławie w serwisie Orthphoto
        </h2>
      </section>

      <section className={styledFilter}>
        <Filter
          options={[
            { value: "photos", label: "Zdjęcia" },
            { value: "users", label: "Użytkownicy" },
            { value: "country", label: "Kraj" },
            { value: "ranks", label: "Ranking" },
          ]}
        ></Filter>
      </section>

      <Gallery></Gallery>
    </div>
  );
}

export default Discover;
