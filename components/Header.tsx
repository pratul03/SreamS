import Image from "next/image";
import React from "react";
import logo from "../public/logo.svg";
import Link from "next/link";


export interface HeaderProps{
  className: string
}

const Header = ({className}: HeaderProps) => {
  return (
    <header className="mb-16 flex h-16 w-screen items-center justify-center pt-16">
      <div className="flex items-center justify-center md:ml-10 md:w-1/5">
        <Link href="/">
          <div className="relative opacity-75 transition duration-300 hover:opacity-100">
            <div className="flex items-center justify-center">
              <Image src={logo} alt="logo" className="w-12" />
              <h1 className="ml-2 text-lg font-bold">SibuFlix.</h1>
            </div>
          </div>
        </Link>
      </div>

      <nav className="hidden flex-1 items-center justify-center space-x-10 md:ml-16 md:flex">
        <p>
          Made with{" "}
          <span role="img" aria-label="heart emoji">
            💕
          </span>{" "}
          by
          <a
            href="https://github.com/pratul03"
            target="_blank"
            className="text-violet-500 hover:underline font-medium"
          >
            Dev-Pratul
          </a>
        </p>
      </nav>
    </header>
  );
};

export default Header;
