import { supabase } from "./supabase";

export const getSlides = async () => {
  const { data, error } = await supabase.from("banners").select("*");
  if (error) {
    console.log("Error fetching slider data:", error);
    return [];
  }
  return data;
};


export const getCategories = async () => {
  const { data, error } = await supabase.from("category").select("*");
  if (error) {
    console.log("Error fetching category data:", error);
    return [];
  }
  return data;
};