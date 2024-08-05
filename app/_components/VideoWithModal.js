/* "use client"; */
import "../globals.css";

/* import React, { useState } from "react"; */

export default function VideoWithModal(props) {
	/* 	const [isModalOpen, setIsModalOpen] = useState(false); */
	/*  */
	/* 	const openModal = () => setIsModalOpen(true); */
	/* 	const closeModal = () => setIsModalOpen(false); */

	return (
		<div className="relative inline-block rounded-sm overflow-hidden">
			<video
				src={props.src}
				className="cursor-pointer max-w-full h-auto"
				/* 				onClick={openModal} */
				controls
			/>
			{/* 			{isModalOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50 backdrop-blur-sm"
					onClick={closeModal}
				>
					<div
						className="relative bg-white p-4 rounded shadow-lg"
						onClick={(e) => e.stopPropagation()}
					>
						<video
							src={props.src}
							className="max-w-full max-h-[75vh] object-contain"
							controls
							autoPlay
						/>
						<button
							className="absolute -top-8 -right-4 text-2xl font-bold text-white"
							onClick={closeModal}
						>
							×
						</button>
					</div>
				</div>
			)} */}
		</div>
	);
}
