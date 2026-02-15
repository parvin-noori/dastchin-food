import Image from "next/image";
import { sliderItem } from "../slider/slider.types";

type bannerProps = {
  banners: sliderItem[];
};

export default function Banner({ banners }: bannerProps) {
  return (
    <>
      {banners.map((banner, index) => (
        <div className="col-span-6" key={index}>
          <Image
            className="w-full rounded-2xl"
            src={banner.image_url}
            alt={banner.title ?? "image slide"}
            width={400}
            height={350}
          />
        </div>
      ))}
    </>
  );
}
