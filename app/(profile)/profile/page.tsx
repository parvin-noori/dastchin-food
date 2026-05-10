"use client";

import { FaRegEdit } from "react-icons/fa";

export default async function Profile() {
  return (
    <div className="gap-y-10 flex flex-col items-start">
      <span className="font-semibold text-xl">حساب کاربری </span>
      <div className="grid lg:grid-cols-2 grid-cols-1 w-full lg:gap-y-0 gap-y-5">
        <div className="flex flex-col gap-y-3">
          <span className="text-gray-400 font-semibold">
            نام و نام خانوادگی
          </span>
          <span className="font-bold">کاربر</span>
        </div>
        <div className="flex flex-col gap-y-3">
          <span className="text-gray-400 font-semibold">ایمیل</span>
          <span className="font-bold"></span>
        </div>
      </div>
      <div className="flex flex-col gap-y-3 items-start text-green-600 mt-auto">
        <button
          type="button"
          className="gap-x-2 flex items-center cursor-pointer"
        >
          <FaRegEdit />
          تغییر اطلاعات کاربر
        </button>
        <button
          type="button"
          className="gap-x-2 flex items-center cursor-pointer"
        >
          <FaRegEdit />
          تغییر رمز عبور
        </button>
      </div>
    </div>
  );
}
