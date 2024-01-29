import supabase from "./supabase";

export async function getPhotos() {
  let { data: photos, error } = await supabase.from("photos").select("*");

  if (error) {
    console.error(error);
    throw new Error("Photos could not be loaded");
  }

  return photos;
}
