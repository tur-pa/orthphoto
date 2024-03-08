import {
  FaArrowLeft,
  FaRegFlag,
  FaRegChartBar,
  FaHashtag,
} from "react-icons/fa6";

import { useNavigate } from "react-router-dom";
import { usePhoto } from "../features/photos/usePhoto";
import Spinner from "../ui/Spinner";
import Rating from "../ui/Rating";
import Stats from "../ui/Stats";
import Comments from "../ui/Comments";

const styledContainer = `container mx-auto`;

function Photo() {
  const navigate = useNavigate();
  const { isLoading, photo } = usePhoto();

  if (isLoading) return <Spinner />;

  const {
    name,
    image,
    id,
    rating,
    author,
    created_at: created,
    favorite,
    description,
    views,
    tags,
    country,
    category,
  } = photo;

  return (
    <div className={styledContainer}>
      <button onClick={() => navigate(-1)}>
        <FaArrowLeft />
      </button>
      <div className={`flex flex-col items-center justify-between text-center`}>
        <div>
          <p className="py-1 text-gray-500">Nazwa zdjęcia</p>
          <p className="pb-4 text-2xl font-semibold">{name}</p>
        </div>
        <div>
          <p className="py-1 text-gray-500">Autor zdjęcia</p>
          <p className="pb-4 text-xl font-semibold">{author}</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img
          src={image}
          alt={name}
          key={id}
          className={`h-screen max-w-screen-2xl object-cover transition-all duration-200`}
        ></img>
        <p className="pt-2 text-gray-500">
          &reg; Wszelkie prawa zastrzeżone dla autora
        </p>
      </div>
      <div className="mx-auto flex max-w-2xl justify-between py-8">
        <Stats></Stats>
        <Rating defaultRating={rating}></Rating>
      </div>
      <div className="mx-auto max-w-2xl pb-4">
        <p className="pb-4 font-semibold">Opis</p>
        <p className="text-gray-500">{description}</p>
      </div>
      <div className="mx-auto max-w-2xl pb-4">
        <ul class="space-y-4 text-left">
          <li class="flex items-center space-x-3 rtl:space-x-reverse">
            <FaRegFlag />
            <span className="text-gray-500">{country}</span>
          </li>
          <li class="flex items-center space-x-3 rtl:space-x-reverse">
            <FaRegChartBar />
            <span className="text-gray-500">{category}</span>
          </li>
        </ul>
      </div>
      <div className="mx-auto max-w-2xl pb-4">
        <ul className="flex list-none items-center gap-2">
          <FaHashtag />
          {tags.map((tag) => (
            <li>
              <button className="rounded-lg border border-transparent px-2 py-0.5 text-gray-500 transition-all hover:border-gray-100 hover:bg-gray-50">
                {tag}
              </button>
            </li>
          ))}
        </ul>
        <hr className="mt-8"></hr>
      </div>
      <Comments></Comments>
    </div>
  );
}

export default Photo;
