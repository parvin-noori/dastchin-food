"use client";

import { useState } from "react";
import { TbCurrentLocation } from "react-icons/tb";
import MapModal from "./mapModal";

export default function MapButton() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const closeModal = (): void => {
    setShowModal(false);
  };
  const openModal = (): void => {
    setShowModal(true);
  };

  return (
    <>
      <button
        onClick={openModal}
        className="items-center gap-x-2 flex cursor-pointer"
      >
        انتخاب آدرس
        <TbCurrentLocation />
      </button>
      {showModal && <MapModal closeModal={closeModal} />}
      {showModal && (
        <>
          <div
            className="overlay bg-black/80 fixed inset-0 z-10"
            onClick={closeModal}
          ></div>
        </>
      )}
    </>
  );
}
