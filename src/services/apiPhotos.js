import { GALLERY_SIZE } from "../utils/constants";
import supabase, { supabaseUrl } from "./supabase";

export async function getInfinitePhotos({ pageParam = 1 }) {
  let query = supabase.from("photos").select("*");
  let from = (pageParam - 1) * GALLERY_SIZE;
  let to = from + GALLERY_SIZE - 1;

  query = query.range(from, to);

  let { data: photos, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Zdjęcie nie mogło zostać załadowane");
  }

  return photos;
}

export async function getPhotos({ sortBy, checkboxFilter }) {
  let query = supabase.from("photos").select("*");

  // SORT
  if (sortBy.sortField && sortBy.sortDir) {
    query.order(sortBy.sortField, { ascending: sortBy.sortDir === "asc" });
  }

  // FILTER
  // console.log(Object.values(checkboxFilter).length);
  // if (Object.values(checkboxFilter).length > 0) {
  //   query.eq("country", "poland");
  // }

  let { data: photos, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Zdjęcie nie mogło zostać załadowane");
  }

  return photos;
}

export async function addPhotoApi(newPhoto) {
  const imageName =
    `${Math.floor(Math.random() * 10)}-${newPhoto.image.name}`.replaceAll(
      "/",
      "",
    );
  const imagePath = `${supabaseUrl}/storage/v1/object/public/photos/${imageName}`;
  let query = supabase.from("photos");

  console.log(newPhoto);

  query = query.insert([{ ...newPhoto, image: imagePath }]);

  const { data, error } = await query.select().single();
  if (error) {
    console.error(error);
    throw new Error("Zdjęcie nie mogło być dodane.");
  }

  const { error: storageError } = await supabase.storage
    .from("photos")
    .upload(imageName, newPhoto.image);

  return data;
}
