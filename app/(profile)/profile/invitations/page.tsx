"use client";

import Image from "next/image";
import { useRef } from "react";
import { LuCopy } from "react-icons/lu";
import { toast } from "react-toastify";

export default function Invitations() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCopy = () => {
    if (inputRef.current) {
      navigator.clipboard
        .writeText(inputRef.current.value)
        .then(() => {
          toast.success("لینک دعوت کپی شد");
        })
        .catch(() => {
          toast.error("faild to copy");
        });
    }
  };
  return (
    <div className="gap-y-10 flex flex-col items-start">
      <span className="font-semibold text-xl">دعوت از دوستان</span>
      <p className="!text-black">
        لینک دعوت زیر را برای دوستانتان بفرستید تا با ثبت‌نام در اسنپ‌فود کد
        تخفیف ۲۰٬۰۰۰ تومانی هدیه بگیرند. با اولین سفارش هر دوستتان، شما هم یک کد
        تخفیف ۲۰٬۰۰۰ تومانی هدیه خواهید گرفت.
      </p>
      <Image
        src="/assets/imgs/gift.png"
        alt="gift"
        width={400}
        height={100}
        className="mx-auto"
      />
      <div className="flex items-center border border-gray-200 rounded-full w-sm mx-auto">
        <input
          readOnly
          ref={inputRef}
          type="text"
          value="18940383"
          className="outline-none p-3 flex-1"
        />
        <button className="p-3 cursor-pointer" onClick={handleCopy}>
          <LuCopy className="text-red-400" />
        </button>
      </div>
    </div>
  );
}
