import { getProducts } from "@/lib/supabaseClient";
import Image from "next/image";
import Link from "next/link";
import { FiUser } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import CartButton from "../cartButton";
import HamburgerMenu from "../hamburgerMenu";
import MapButton from "../map";

const headerButtons = [
  {
    display: "lg",
    icon: <IoNotificationsOutline size={25} />,
  },
  {
    display: "lg",
    icon: <FiUser size={25} />,
    url: "/profile",
  },
];

export default async function Header() {
  const products = await getProducts();
  return (
    <>
      <div className="bg-white py-5 w-full rounded-b-2xl">
        <div className="container mx-auto grid grid-cols-3 items-center px-5">
          <div className="flex items-center gap-x-5">
            <HamburgerMenu />
            <div className="lg:flex hidden">
              <MapButton />
            </div>
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
            <div className="lg:hidden">
              <MapButton />
            </div>
          </div>
          <div className="ms-auto flex items-center gap-x-5">
            <CartButton products={products} />
            {headerButtons.map((button, index) => (
              <Link href={button.url ? button.url : "/"}>
                <button
                  key={index}
                  className={`cursor-pointer ${
                    button.display === "lg" ? "lg:block hidden" : "block"
                  }`}
                >
                  {button.icon}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
