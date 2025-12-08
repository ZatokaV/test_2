"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function BodyWithPageClass({ children, className }) {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/about-us") {
      document.body.classList.add("about-us-page");
    } else {
      document.body.classList.remove("about-us-page");
    }
  }, [pathname]);

  return <body className={className}>{children}</body>;
}
