import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { usePathname } from "next/navigation";
import { Icons } from "./Icons";

// Component for footer
const Footer = () => {
  const pathname = usePathname();
  const pathsToMinimize = ["/verify-email", "/sign-up", "/sign-in"];

  return (
    <footer className="bg-white flex-grow-0">
      <MaxWidthWrapper>
        <div className="border-t border-gray-200">
          {pathsToMinimize.includes(pathname) ? null : 
          <div className="flex justify-center">
            <Icons.logo className="h-12 w-auo" />
            </div>}
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
