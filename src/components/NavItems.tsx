"use client";
import { PRODUCT_CATEGORIES } from "@/config";
import React, { useEffect, useRef, useState } from "react";
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

// Component for different items used on the navbar
const NavItems = () => {
  // State hook with <> typescript generic values of only null or number with a default value of null
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  // Effect hook to check if user presses 'escape' key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if(e.key === "Escape"){
        setActiveIndex(null)
      }
    }

    document.addEventListener("keydown", handler)

    // Clean up
    return () => {
      document.removeEventListener("keydown", handler)
    }
  }, [])

  const isAnyOpen = activeIndex !== null;

  // Ref hook to check if user is clicking outside of navbar
  const navRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(navRef, () => setActiveIndex(null));

  return (
    <div className="flex gap-4 h-full" ref={navRef}>
      {PRODUCT_CATEGORIES.map((category, i) => {
        {
          /*Check for opened navbar items*/
        }
        const handleOpen = () => {
          if (activeIndex === i) {
            setActiveIndex(null);
          } else {
            setActiveIndex(i);
          }
        };

        const isOpen = i === activeIndex;

        return (
          <NavItem
            category={category}
            handleOpen={handleOpen}
            isOpen={isOpen}
            key={category.value}
            isAnyOpen={isAnyOpen}
          />
        );
      })}
    </div>
  );
};

export default NavItems;
