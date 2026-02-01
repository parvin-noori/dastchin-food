import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare, FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const socialMedia = [
  {
    icon: <FaInstagram />,
    label: "اینستاگرام",
    href: "https://www.instagram.com/dastchin.food/",
  },
  {
    icon: <FaTelegramPlane />,
    label: "تلگرام",
    href: "https://t.me/dastchin_food",
  },
  {
    icon: <IoLogoWhatsapp />,
    label: "واتساپ",
    href: "https://wa.me/989300000000",
  },
  {
    icon: <FaFacebookSquare />,
    label: "فیسبوک",
    href: "https://www.facebook.com/dastchin.food",
  },
];

export default function Footer() {
  return (
    <div className="bg-white py-14">
      <div className="container flex flex-col gap-y-5">
        <Image
          src="/assets/imgs/logotype-red.svg"
          alt="logo"
          width={130}
          height={100}
        />
        <div className="grid lg:grid-cols-4 lg:space-x-10 space-y-10 lg:space-y-0">
          <div className="flex flex-col gap-y-4">
            <span className="font-bold ">درباره ما</span>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز
            </p>
          </div>
          <div className="flex flex-col gap-y-4">
            <span className="font-bold ">آخرین اخبار</span>
            <div className="space-y-1">
              <Link href="/" className=" line-clamp-2">
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز
                </p>
              </Link>
              <Link href="/" className=" line-clamp-2">
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز
                </p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <span className="font-bold ">ارتباط با ما</span>
            <div className="space-y-1">
              <p>
                شماره تماس:
                <Link href="tel:093000">093000</Link>
              </p>
              <p>آدرس:...</p>
            </div>
          </div>
          <div className="flex items-center mt-auto gap-x-1">
            {socialMedia.map((item, index) => (
              <Link href={item.href} key={index} className="size-10 text-lg text-white flex items-center justify-center rounded-full bg-primary">
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
