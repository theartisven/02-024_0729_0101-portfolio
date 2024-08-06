import Navbar from "../app/_components/Navbar";
import Footer from "../app/_components/Footer";
import "./globals.css";

export const metadata = {
	title: "Sven Hero Kaufmann",
	description: "Sven Hero Kaufmann's Portfolio. Mostly UI / UX",
};
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="flex flex-row justify-center items-center dark:bg-neutral-900">
				<div className="flex flex-col lg:w-[1200px] lg:h-screen gap-4 justify-center items-center overflow-hidden rounded">
					<Navbar />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}