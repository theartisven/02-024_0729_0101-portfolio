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
			<body className=" flex flex-row justify-center items-center dark:bg-neutral-900">
				<div className="flex flex-col w-screen gap-4 justify-center items-center rounded lg:h-screen">
					<Navbar />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
