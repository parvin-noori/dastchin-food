"use client"

import { BsExclamationCircle } from "react-icons/bs";
import { FaArrowsRotate } from "react-icons/fa6";
import { FiCalendar } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { IoMdTime } from "react-icons/io";

export default function Orders() {
  const orders = [
    {
      number: 2243,
      price: 37000,
    },
    {
      number: 2241,
      price: 30000,
    },
    {
      number: 2232,
      price: 67000,
    },
  ];
  return (
    <div className="gap-y-10 flex flex-col items-start">
      <span className="font-semibold text-xl">سفارش های من</span>
      <ul className="flex flex-col gap-y-2 w-full">
        {orders.map((order, index) => (
          <li key={index}>
            <div className="w-full flex flex-col gap-3">
              <span className="font-semibold">سفارش شماره {order.number}</span>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 text-sm">
                  <GrLocation className="text-gray-400" /> خانه
                </span>
                <span className="flex items-center gap-1 text-sm">
                  <FiCalendar className="text-gray-400" /> چهارشنبه٬ ۲۱ اردیبهشت
                </span>
                <span className="flex items-center gap-1 text-sm">
                  <IoMdTime className="text-gray-400" /> ۲۱:۴۷
                </span>
                <span className="flex items-center gap-2 ms-auto">
                  <strong>{order.price.toLocaleString()}</strong>
                  تومان
                </span>
              </div>
              <div className="flex items-center ms-auto gap-2">
                <button className="bg-gray-100 cursor-pointer text-gray-700 py-2 gap-1 font-semibold px-3 rounded-lg flex items-center">
                  <BsExclamationCircle />
                  مشاهده فاکتور
                </button>
                <button className="bg-pink-100 cursor-pointer text-pink-500 py-2 gap-1 flex items-center font-semibold px-3 rounded-lg">
                  <FaArrowsRotate />
                  سفارش مجدد
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
