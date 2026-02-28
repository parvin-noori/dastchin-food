"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { mapData } from "./map.types";

const CustomMap = dynamic(() => import("./Map"), { ssr: false });

type MapModalProps = {
  closeModal: () => void;
};

export default function MapModal({ closeModal }: MapModalProps) {
  const [step, setStep] = useState<number>(1);
  const [isMapReady, setIsMapReady] = useState<boolean>(false);
  const [MapData, setMapData] = useState<mapData>({
    address: "",
    details: "",
    title: "",
  });

  const nextStep = () => {
    setStep((prev) => prev + 1);
    setTimeout(() => setIsMapReady(true), 100);
  };
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = (mapData: mapData) => {
    console.log(mapData);
  };

  useEffect(() => {
    if (step === 2) {
      setTimeout(() => setIsMapReady(true), 100);
    }
  }, [step]);
  return (
    <div className="bg-white rounded-2xl xl:w-1/2 lg:w-8/12 md:w-9/12 w-11/12 p-5 z-30 fixed top-1/2 start-1/2 overflow-hidden translate-x-1/2 -translate-y-1/2 max-h-content flex flex-col gap-y-3 h-96">
      <button className="cursor-pointer ms-auto" onClick={closeModal}>
        <MdClose className="text-gray-600" size={24} />
      </button>
      {step === 1 && (
        <>
          <span className="text-3xl font-bold">انتخاب آدرس</span>
          <p>برای مشاهده مناسب ترین پیشنهادها ابتدا موقعیتتان را مشخص کنید.</p>
          <button
            onClick={nextStep}
            className="bg-primary text-white rounded-lg me-auto py-2 px-4 cursor-pointer hover:contrast-80 mt-auto"
          >
            ساخت آدرس جدید
          </button>
        </>
      )}
      {step === 2 && isMapReady && (
        <div className="flex flex-col gap-y-2 flex-1">
          <div className="flex-1 min-h-0 overflow-hidden">
            <CustomMap setMapData={setMapData}/>
          </div>
          <div className="flex items-center gap-x-2">
            <button
              onClick={nextStep}
              className="bg-primary text-white rounded-lg me-auto py-2 px-4 cursor-pointer hover:contrast-80 mt-auto"
            >
              تایید موقعیت روی نقشه
            </button>
          </div>
        </div>
      )}
      {step === 3 && <span>step 3</span>}
    </div>
  );
}
