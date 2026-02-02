import Image from "next/image";
import { bannerItem } from "./banner.types";

const bannsers: bannerItem[] = [
  { title: "irani food", url: "/assets/imgs/website_image_irani_1.jpg" },
  { title: "irani food", url: "/assets/imgs/website_image_pizza_1.jpg" },
];
export default function Banner() {
  return (
    <>
      {bannsers.map((banner, index) => (
        <div className="col-span-6" key={index}>
          <Image
            className="w-full rounded-2xl"
            src={banner.url}
            alt={banner.title}
            width={400}
            height={350}
          />
        </div>
      ))}
    </>
  );
}
