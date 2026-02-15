import { getBanners, getCategories, getSlides } from "@/lib/supabaseClient";
import Banner from "../_components/banner";
import Category from "../_components/category";
import { categoryItem } from "../_components/category/category.types";
import Slider from "../_components/slider";
import { sliderItem } from "../_components/slider/slider.types";

export default async function Home() {
  const slides: sliderItem[] = await getSlides();
  const categories: categoryItem[] = await getCategories();
  const banners: sliderItem[] = await getBanners();
  return (
    <div className="py-5 gap-5 flex flex-col">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12">
          <Slider slides={slides} />
        </div>
        <Banner banners={banners}/>
      </div>
      <Category categories={categories} />
      dastchin
    </div>
  );
}
