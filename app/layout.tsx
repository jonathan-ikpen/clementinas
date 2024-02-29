import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/shared/footer";
import MobileHeaderNav from "@/components/shared/mobile-nav";
import DesktopHeader from "@/components/shared/desktop-header";
import AnnouncementBar from "@/components/shared/announcement-bar";

// const inter = Inter({ subsets: ["latin"] });
// import { Inter } from "next/font/google";

const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/satoshi/Satoshi-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/satoshi/Satoshi-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/satoshi/Satoshi-Black.woff",
      weight: "900",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Clementinas Farm",
  description: "Clementinas Farm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={satoshi.className + "overflow-x-hidden "}>
        <div className="bg-background w-full max-w-[1440px] mx-auto overflow-x-hidden">
          <AnnouncementBar
            message={"Next delivery of StrawBerry is monday, start"}
            discount={"booking now"}
            button={"buy now"}
            link={"/store"}
            display
          />
          <DesktopHeader />
          <MobileHeaderNav />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
