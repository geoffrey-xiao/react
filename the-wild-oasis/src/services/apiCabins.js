import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data: cabins, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("cabins could not be loaded");
  }
  return cabins;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("cabins could not be deleted");
  }

  return data;
}

export async function createEditCabin(cabin, id) {
  console.log(cabin);
  const imageName = `${Math.random()}-${cabin.image.name}`.replaceAll("/", "");

  const hasImagePath = cabin?.image?.startsWith(supabaseUrl);

  const imagePath = hasImagePath
    ? cabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  let query = supabase.from("cabins");

  if (!id) {
    // const newCabin = { ...cabin, image: imagePath };
    query = query.insert([{ ...cabin, image: imagePath }]);
  }

  if (id) {
    query = supabase
      .from("cabins")
      .update({ ...cabin, image: imagePath })
      .eq("id", id);
  }

  const { data, error } = await query.select().single();
  if (error) {
    console.error(error);
    throw new Error("cabins could not be inserted");
  }

  if (!hasImagePath) {
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, cabin.image);
    if (storageError) {
      await supabase.from("cabins").delete().eq("id", data.id);
      console.error(storageError);
      throw new Error("uploaded error");
    }
  }
  return data;
}
