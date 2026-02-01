"use client";

import Image from "next/image";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { TbMenuDeep } from "react-icons/tb";

const firstMenu = [
  {
    title: "پرطرفدارها",
  },
  {
    title: "تخفیفات",
  },
  {
    title: "سوالی دارید؟",
  },
];

const secondMenu=[
  {
    title:"صفحه اصلی"
  },
  {
    title:"منو"
  },
  {
    title:"گالری"
  },
  {
    title:"درباره ما"
  },
  {
    title:"تماس با ما"  
  }
]

export default function HamburgerMenu() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const closeCollapsed = () => {
    setCollapsed(false);
  };
  return (
    <>
      <button onClick={toggleCollapsed} className="cursor-pointer">
        <TbMenuDeep size={25} />
      </button>
      <div
        className={`${collapsed ? "translate-x-0" : "translate-x-full"} h-full p-5 divide-y-2 divide-gray-200  duration-500 transition-all md:w-xs w-full md:rounded-l-2xl bg-white fixed start-0 top-0 z-20`}
      >
        <button
          onClick={closeCollapsed}
          className="absolute cursor-pointer end-6 top-7 hover:bg-gray-100 rounded-full transiton-color duration-300 p-1.5 border-0"
        >
          <MdClose size={25} />
        </button>
        <div className="py-5">
          <Image
            src="/assets/imgs/logotype.svg"
            alt="logo"
            width={130}
            height={100}
          />
        </div>
        <div className="py-7">
          <ul className="flex flex-col gap-y-4">
            {firstMenu.map((item, index) => (
              <li key={index} className="cursor-pointer font-semibold hover:text-primary duration-300">
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="py-7">
          <ul className="flex flex-col gap-y-4">
            {secondMenu.map((item, index) => (
              <li key={index} className="cursor-pointer font-semibold hover:text-primary duration-300">
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {collapsed && (
        <div
          className="overlay bg-black/80 fixed inset-0 z-10"
          onClick={closeCollapsed}
        ></div>
      )}
    </>
  );
}
