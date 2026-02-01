import Image from "next/image";
import Link from "next/link";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { TbCurrentLocation, TbMenuDeep } from "react-icons/tb";

const headerButtons = [
  {
    display: "all",
    icon: <FiShoppingCart size={23} />,
  },
  {
    display: "lg",
    icon: <IoNotificationsOutline size={25} />,
  },
  {
    display: "lg",
    icon: <FiUser size={25} />,
  },
];

export default function Header() {
  return (
    <div className="bg-white py-5 w-full rounded-b-2xl">
      <div className="container mx-auto grid grid-cols-3 items-center px-5">
        <div className="flex items-center gap-x-5">
          <button>
            <TbMenuDeep size={25} />
          </button>
          <button className="lg:flex items-center gap-x-2 hidden">
            انتخاب آدرس
            <TbCurrentLocation />
          </button>
        </div>

        <div className="mx-auto">
          <Link href="/" className="lg:block hidden">
            <Image
              src="/assets/imgs/logotype-red.svg"
              alt="logo"
              width={130}
              height={100}
            />
          </Link>
          <button className="items-center gap-x-2 lg:hidden flex">
            انتخاب آدرس
            <TbCurrentLocation />
          </button>
        </div>
        <div className="ms-auto flex items-center gap-x-5">
          {headerButtons.map((button, index) => (
            <button
              key={index}
              className={`cursor-pointer ${
                button.display === "lg" ? "lg:block hidden" : "block"
              }`}
            >
              {button.icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
