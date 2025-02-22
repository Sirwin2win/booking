// import localFont from "next/font/local";
// import { Sora } from "next/font/google";
import "@/assets/style/globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Categories from "@/components/Categories";

import { Roboto, Poppins, Open_Sans, Sora } from "next/font/google";
import GalleryOne from "@/components/GalleryOne";
import Footer from "@/components/Footer";
import GalleryTwo from "@/components/GalleryTwo";
import GalleryThree from "@/components/GalleryThree";
// const roboto = Roboto({
//   weight: ["400", "700"],
//   subsets: ["latin"],
//   variable: " -roboto",
//   display: "swap",
// });

const sora = Sora({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: " sora",
  display: "swap",
});
// const poppins = Poppins({
//   weight: ["400", "600"],
//   variable: " poppins",
//   subsets: ["latin"],
//   display: "swap",
// });
// const openSans = Open_Sans({
//   subsets: ["latin"],
//   variable: " OpenSans",
//   display: "swap",
// });

export const metadata = {
  title: "Hotel Booking Ap",
  description: "Book our hotel and have the best of experience",
  icons: {
    icon: {
      url: "/img/leather.jpg",
      type: "image/jpg",
    },
    // shortcut: { url: "/leather.jpg", type: "image/png" },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={sora.className}
        // className={`${roboto.className} ${poppins.variable} ${openSans.variable} ${sora.variable}`}
      >
        <div className="relative">
          <div className="absolute mt-[-0px] z-50 md:mt-[0px] md:ml-[100px]">
            <Navbar />
          </div>
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
