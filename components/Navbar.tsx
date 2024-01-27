import Image from "next/image";
import Link from "next/link";
import React from "react";

const navIcons = [
  {
    icon: "/assets/icons/search.svg",
    alt: "search",
  },
  {
    icon: "/assets/icons/black-heart.svg",
    alt: "heart",
  },
  {
    icon: "/assets/icons/user.svg",
    alt: "user",
  },
];

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/icons/logo.svg"
            width={27}
            height={27}
            alt="logo"
          />
          <p className="nav-logo">
            Price <span className="text-primary">Check Kro</span>
          </p>
        </Link>
        <div className="flex items-center gap-5">
          {navIcons.map((icon, index) => (
            <Image
              key={index}
              src={icon.icon}
              width={28}
              height={28}
              alt={icon.alt}
            />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
