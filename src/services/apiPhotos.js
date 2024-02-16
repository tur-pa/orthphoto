import supabase, { supabaseUrl } from "./supabase";

export async function getPhotos() {
  let { data: photos, error } = await supabase.from("photos").select("*");

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
