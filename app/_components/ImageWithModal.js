"use client";
import "../globals.css";

import React, { useState } from "react";

export default function ImageWithModal(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative inline-block overflow-hidden rounded-lg ">
      <img
        src={props.src}
        alt={props.alt}
        className="cursor-pointer max-w-full h-auto hover:scale-105 ease-in-out duration-300 "
        onClick={openModal}
      />
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50 backdrop-blur-md "
          onClick={closeModal}
        >
          <div
            className="relative flex justify-center "
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={props.src}
              alt={props.alt}
              className="max-w-full max-h-[75vh] ld:max-w-[75vw] object-contain rounded-lg overflow-hidden"
            />
            <button
              className="absolute -top-8 -right-4 text-xl font-medium text-zinc-50"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="bg-black bg-opacity-20 absolute -bottom-10 inset-x-0 text-xs p-2 font-medium text-zinc-50 text-center rounded-lg mt-4 w-fit">
              {props.alt}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
