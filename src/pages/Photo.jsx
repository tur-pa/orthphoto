import { FaArrowLeft } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";
import { usePhoto } from "../features/photos/usePhoto";
import Spinner from "../ui/Spinner";
import Rating from "../ui/Rating";
import Stats from "../ui/Stats";
import Comments from "../ui/Comments";
import { useState } from "react";

const styledContainer = `container mx-auto`;
const dataText = `pb-4 text-xl font-semibold`;
const titleText = `py-1 text-gray-500`;

function Photo() {
  const navigate = useNavigate();
  const { isLoading, photo } = usePhoto();
  const [isOpen, setIsOpen] = useState(false);

  if (isLoading) return <Spinner />;

  return (
    <div className={styledContainer}>
      <button onClick={() => navigate(-1)}>
        <FaArrowLeft />
      </button>
      <div className={`flex justify-between`}>
        <div>
          <p className={titleText}>Nazwa zdjęcia</p>
          <p className={dataText}>Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          <p className={titleText}>Autor zdjęcia</p>
          <p className={dataText}>John Wick</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img
          src={photo.image}
          alt={photo.name}
          key={photo.id}
          className={`h-screen max-w-screen-2xl object-cover transition-all duration-200`}
        ></img>
        <p className={titleText}>&reg; Wszelkie prawa zastrzeżone dla autora</p>
      </div>
      <div className="mx-auto flex max-w-2xl justify-between py-8">
        <Stats></Stats>
        <Rating defaultRating={photo.rating}></Rating>
      </div>
      <div className="mx-auto max-w-2xl pb-4">
        <p className={titleText}>Opis</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia laborum
          eaque dolore! Placeat cum et expedita quo omnis est deleniti obcaecati
          odit tenetur laborum animi a, ipsum sequi qui! Laborum.
        </p>
      </div>
      <Comments></Comments>
    </div>
  );
}

export default Photo;
