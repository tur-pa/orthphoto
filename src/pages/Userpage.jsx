import Button from "../ui/Button";
import FormRow from "../ui/FormRow";
import Form from "../ui/Form";
import Input from "../ui/Input";
import FileInput from "../ui/FileInput";
import Header from "../ui/Header";
import { FaPencil, FaPlus } from "react-icons/fa6";
import Filter from "../ui/Filter";
import Sort from "../ui/Sort";
import Gallery from "../ui/Gallery";
import AddPhoto from "../features/photos/AddPhoto";

function Userpage() {
  const avatarClass = `w-[130px] h-[130px] rounded-full object-cover`;
  const usernameClass = `text-2xl font-medium mt-7`;

  return (
    <>
      {/* HEADER */}
      <Header></Header>

      {/* USER SECTION */}
      <section className="flex flex-col justify-center items-center">
        <img
          className={avatarClass}
          src="https://images.pexels.com/photos/19402529/pexels-photo-19402529/free-photo-of-verde-atras-do-verde.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="avatar"
        ></img>

        <h1 className={usernameClass}>Nazwa użytkownika</h1>
        <div>
          <Button type="bgButton">
            <FaPencil /> &nbsp; Edytuj profil
          </Button>
          <AddPhoto></AddPhoto>
        </div>

        <div className="flex text-center [&>div>p]:text-gray-400 [&>div>h4]:text-lg [&>div>h4]:font-medium [&>div>h4]:text-gray-500">
          <div className="mr-4">
            <p>Wyświetlenia</p>
            <h4>324,5 tysięcy</h4>
          </div>
          <div className="mx-2">
            <p>Polubienia</p>
            <h4>324,5 tysięcy</h4>
          </div>
          <div className="ml-4">
            <p>Liczba zdjęć</p>
            <h4>324,5 tysięcy</h4>
          </div>
        </div>
      </section>

      {/* FILTER SECTION */}
      <section>
        <div className="container mx-auto mt-5 flex justify-end">
          <div>
            <Filter
              options={[
                { value: "all", label: "Wszystkie" },
                { value: "popularity", label: "Popularne" },
                { value: "commented", label: "Komentowane" },
              ]}
            ></Filter>
          </div>
          <div className="flex items-center">
            <Sort></Sort>
          </div>
        </div>
      </section>
      {/* GALLERY SECTION */}
      <section className="mt-8">
        <Gallery></Gallery>
      </section>

      {/* ADD PHOTO SECTION */}

      {/* FOOTER */}
    </>
  );
}

export default Userpage;
