import supabase from "./supabase";

export async function getCurrentProfile(userName) {
  let query = supabase.from("profiles").select(`username`);
  query.eq("username", userName).single();

  const { data: profile, error } = await query;

  if (error) throw new Error(error.message);

  return profile;
}

export async function getProfileStats(userName) {
  let query = supabase
    .from("profiles")
    .select(`photos(views, comments_num, favorite)`)
    .eq("username", userName)
    .single();

  const { data: profileStats, error } = await query;

  if (error) throw new Error(error.message);

  return profileStats;
}

export async function updateCurrentProfile({
  currId,
  username,
  first_name,
  last_name,
  avatar_url,
}) {
  const updateData = { username, first_name, last_name, avatar_url };

  const { data, error } = await supabase
    .from("profiles")
    .update(updateData)
    .eq("id", currId)
    .select()
    .single();

  if (error) throw new Error(error.message);
  console.log(data);
  return data;
}
