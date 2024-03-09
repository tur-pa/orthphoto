import supabase from "./supabase";

export async function signup(formData) {
  const { email, password, first_name, last_name } = formData;
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { first_name, last_name },
    },
  });
  if (error) throw new Error(error.message);

  return data;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
