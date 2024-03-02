import { GALLERY_SIZE } from "../utils/constants";
import supabase, { supabaseUrl } from "./supabase";

export async function getInfinitePhotos({ pageParam = 1, sortBy }) {
  let query = supabase.from("photos").select("*");
  let from = (pageParam - 1) * GALLERY_SIZE;
  let to = from + GALLERY_SIZE - 1;

  if (sortBy.sortField && sortBy.sortDir) {
    query.order(sortBy.sortField, { ascending: sortBy.sortDir === "asc" });
  }

  query = query.range(from, to);

  let { data: photos, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Zdjęcie nie mogło zostać załadowane");
  }

  return photos;
}

export async function getPhotos({ sortBy, filterBy, page }) {
  let query = supabase.from("photos").select("*", { count: "exact" });

  // SORT
  if (sortBy.sortField && sortBy.sortDir) {
    query.order(sortBy.sortField, { ascending: sortBy.sortDir === "asc" });
  }

  // FILTER
  filterBy?.map((el) => {
    if (el.array.length > 0)
      switch (el.name) {
        case "name":
          return query.ilike(el.name, `%${el.array}%`);

        case "tags":
          return query.contains(el.name, el.array);

        default:
          return query.in(el.name, el.array);
      }
    return null;
  });

  // PAGINATION

  if (page) {
    const from = (page - 1) * GALLERY_SIZE;
    const to = from + GALLERY_SIZE - 1;
    query = query.range(from, to);
  }

  let { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Zdjęcie nie mogło zostać załadowane");
  }

  return { data, count };
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
