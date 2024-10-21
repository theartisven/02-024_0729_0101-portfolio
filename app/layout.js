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
      <body className="flex h-screen flex-row justify-center items-center dark:bg-neutral-900 p-2 ">
        <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="flex flex-col lg:w-[1200px] max-h-[90vh] lg:h-screen gap-4 justify-center items-center overflow-hidden rounded">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
