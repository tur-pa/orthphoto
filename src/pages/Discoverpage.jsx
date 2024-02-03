import Header from "../ui/Header";
import Gallery from "../ui/Gallery";

function Discoverpage() {
  return (
    <div>
      <Header></Header>
      <div className="container mx-auto">
        <h2 className="text-gray-900 font-semibold text-5xl">
          Odkrywaj prawosławie w serwisie Orthphoto
        </h2>
      </div>

      <div className="container mx-auto mt-10 mb-5">
        <button className=" hover:text-white  font-semibold mr-1 px-4 py-2 hover:bg-gray-700 hover:rounded-full">
          Zdjęcia
        </button>
        <button className="mr-1 px-4 py-2 font-semibold">Użytkownicy</button>
        <button className="mr-1 px-4 py-2 font-semibold">Kraj</button>
        <button className="px-4 py-2 font-semibold">Rankingi</button>
      </div>

      <Gallery></Gallery>
    </div>
  );
}

export default Discoverpage;
