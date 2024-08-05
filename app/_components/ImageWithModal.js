"use client";
import "../globals.css";

import React, { useState } from "react";

export default function ImageWithModal(props) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	return (
		<div className="relative inline-block overflow-hidden ">
			<img
				src={props.src}
				alt={props.alt}
				className="cursor-pointer max-w-full h-auto hover:scale-105 ease-in-out duration-300"
				onClick={openModal}
			/>
			{isModalOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50 backdrop-blur-sm"
					onClick={closeModal}
				>
					<div
						className="relative bg-white"
						onClick={(e) => e.stopPropagation()}
					>
						<img
							src={props.src}
							alt={props.alt}
							className="max-w-full max-h-[75vh] object-contain rounded-md overflow-hidden"
						/>
						<button
							className="absolute -top-8 -right-4 text-2xl font-bold text-white"
							onClick={closeModal}
						>
							×
						</button>
						<div className="bg-black bg-opacity-10 backdrop-blur-sm absolute -bottom-8 inset-x-0 text-xs p-2 font-bold text-white text-center">
							{props.alt}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
