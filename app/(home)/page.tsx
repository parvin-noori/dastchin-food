import { getSlides,getCategories } from "@/lib/supabaseClient";
import Banner from "../_components/banner";
import Slider from "../_components/slider";
import { sliderItem } from "../_components/slider/slider.types";
import { categoryItem } from "../_components/category/category.types";
import Category from "../_components/category";

export default async function Home() {
  const slides: sliderItem[] = await getSlides();
  const categories: categoryItem[] = await getCategories();
  return (
    <div className="py-5 gap-5 flex flex-col">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12">
          <Slider slides={slides} />
        </div>
        <Banner />
      </div>
      <Category categories={categories} />
      dastchin
    </div>
  );
}
