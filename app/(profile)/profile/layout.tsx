import Link from "next/link";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const menu = [
    {
      title: "کاربر",
      subtitle: "0930",
      href: "/profile",
    },
    {
      title: "سفارش های من",
      href: "/profile/orders",
    },
    {
      title: "دعوت از دوستان",
      href: "/profile/invitations",
    },
    {
      title: "لیست تراکنش ها",
      href: "/profile/transactions",
    },
    {
      title: "خروج",
      href: "/",
    },
  ];
  return (
    <div className="my-20 grid lg:grid-cols-10 grid-cols-1 gap-8 items-start">
      <div className="lg:col-span-3 bg-white  rounded-2xl shadow-lg">
        <ul className="divide-y divide-gray-200 divide-solid">
          {menu.map((option, index) => (
            <li key={index}>
              <Link href={option.href} className="p-6 block">{option.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:col-span-7 bg-white p-4 rounded-2xl shadow-lg">{children}</div>
    </div>
  );
}
