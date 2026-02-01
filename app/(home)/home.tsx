import Image from "next/image";
import Slider from "../_components/slider";

export default function Home() {
  return (
     <div>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12">
          <Slider />
        </div>
        <div className="col-span-6">
          <Image
            className="w-full rounded-2xl"
            src="/assets/imgs/website_image_irani_1.jpg"
            alt="irani food"
            width={400}
            height={350}
          />
        </div>
        <div className="col-span-6">
          <Image
            className="w-full rounded-2xl"
            src="/assets/imgs/website_image_pizza_1.jpg"
            alt="irani food"
            width={400}
            height={350}
          />
        </div>
      </div>
      dastchin
    </div>
  )
}
