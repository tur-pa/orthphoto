import Button from "../ui/Button";
import { FaPencil } from "react-icons/fa6";
import Filter from "../ui/Filter";
import Sort from "../ui/Sort";
import Gallery from "../ui/Gallery";
import AddPhoto from "../features/photos/AddPhoto";
import Avatar from "../ui/Avatar";

const styledUserSection = `flex flex-col items-center justify-center`;
const styledUsername = `text-2xl font-medium mt-7`;
const styledStatsSection = `flex text-center [&>div>h4]:text-lg [&>div>h4]:font-medium [&>div>h4]:text-gray-600 [&>div>p]:text-gray-500 gap-5`;
const styledFilterSection = `container mx-auto my-8 flex justify-end`;

function User() {
  return (
    <div>
      <section className={styledUserSection}>
        <Avatar></Avatar>
        <h1 className={styledUsername}>Nazwa użytkownika</h1>
        <div>
          <Button type="bgBtn">
            <FaPencil /> &nbsp; Edytuj profil
          </Button>
          <AddPhoto></AddPhoto>
        </div>

        <div className={styledStatsSection}>
          <div>
            <p>Wyświetlenia</p>
            <h4>324,5 tysięcy</h4>
          </div>
          <div>
            <p>Polubienia</p>
            <h4>324,5 tysięcy</h4>
          </div>
          <div>
            <p>Liczba zdjęć</p>
            <h4>324,5 tysięcy</h4>
          </div>
        </div>
      </section>

      <section className={styledFilterSection}>
        <Filter
          options={[
            { value: "all", label: "Wszystkie" },
            { value: "popularity", label: "Popularne" },
            { value: "commented", label: "Komentowane" },
          ]}
        ></Filter>
        <Sort></Sort>
      </section>

      <Gallery></Gallery>
    </div>
  );
}

export default User;
