"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

export default function BodyWithPageClass({ children, className }) {
  const pathname = usePathname();

  const isAboutPage = pathname === "/about-us";
  const isContactPage = pathname === "/contacts";

  useEffect(() => {
    if (isAboutPage) {
      document.body.classList.add("about-us-page");
    } else {
      document.body.classList.remove("about-us-page");
    }
  }, [pathname]);

  return (
    <body className={className}>
      {!isContactPage && <Header />}
      {children}
      {!isContactPage && <Footer />}
    </body>
  );
}
