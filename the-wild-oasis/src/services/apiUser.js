import supabase from "./supabase";

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  return data;
}

export async function getCurrentUser() {
  // const { session, error: sesssionError } = await supabase.auth.getSession();

  // if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();
  console.log("user", data);

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
  return data?.user;
}

export async function logout() {
  let { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
  return null;
}
