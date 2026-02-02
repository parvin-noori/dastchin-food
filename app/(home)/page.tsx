import { supabase } from "@/lib/supabase";
import Banner from "../_components/banner";
import Slider from "../_components/slider";
import { sliderItem } from "../_components/slider/slider.types";

const getSlides = async () => {
  const { data, error } = await supabase.from("banners").select("*");
  if (error) {
    console.log("Error fetching slider data:", error);
    return [];
  }
  return data;
};

export default async function Home() {
  const slides:sliderItem[] = await getSlides();
  return (
    <div className="py-5">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12">
          <Slider slides={slides}/>
        </div>
        <Banner />
      </div>
      dastchin
    </div>
  );
}
