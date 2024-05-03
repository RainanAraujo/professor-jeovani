import { useState } from "react";
import simbol from "../assets/simbol.svg";
import clsx from "clsx";
import { InstagramLogo, List, X } from "@phosphor-icons/react";
import { useScrollPosition } from "../utils/useScrollPosition";

interface Options {
  title: string;
  url: string;
}

export default function Navbar() {
  const scrollPosition = useScrollPosition();
  const options: Options[] = [
    { title: "Quem sou", url: "#quemsou" },
    { title: "Princípios", url: "#principios" },
  ];
  return (
    <>
      <nav
        className={clsx(
          scrollPosition > 0 ? "shadow-[0_4px_20px_-1px_rgba(0,0,0,0.1)]" : "",
          "flex justify-center items-center sticky top-0 h-20 max-xl:h-20 bg-gray-100 transition-all duration-300 z-40"
        )}
      >
        <div
          className={clsx(
            "flex justify-between px-20 w-full max-w-7xl items-center  ",
            "max-xl:px-5"
          )}
        >
          <img src={simbol} width={40} alt="" />
          <a
            href="/APRESENTACAO_JEOVANI.pdf"
            target="_blank"
            className="xl:hidden py-2 px-4 bg-blue-800 rounded-md text-white"
          >
            Saber mais
          </a>
          <MenuHamburger options={options} />

          <ul
            className={clsx(
              "flex gap-6 text-gray-700 text-base font-medium",
              "max-xl:hidden"
            )}
          >
            {options.map((option) => (
              <li key={option.title}>
                <a
                  href={option.url}
                  className="after:content-[''] after:block after:bg-blue-800 after:w-0 after:h-1 hover:after:w-full after:transition-[width_3.s]"
                >
                  {option.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-4 items-center max-xl:hidden">
            <a href="https://www.instagram.com/prof.jeovani/" target="_blank">
              <InstagramLogo size={32} className="text-blue-800 " />
            </a>

            <a
              href="/APRESENTACAO_JEOVANI.pdf"
              target="_blank"
              className="py-2 px-4 bg-blue-800 rounded-md text-white"
            >
              Saber mais
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

interface MenuHamburgerProps {
  options: Options[];
}

function MenuHamburger({ options }: MenuHamburgerProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className={clsx("hidden", "max-xl:flex")}
        onClick={() => setIsOpen(true)}
      >
        <List className="cursor-pointer hover:opacity-70" size={32} />
      </div>
      {isOpen && (
        <div
          className="fixed top-0 right-0 w-full h-full bg-black bg-opacity-20 animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="fixed top-0 right-0 h-full bg-white w-3/4
            flex justify-start items-start p-10 py-20 animate-slide-right-to-left"
            onClick={(e) => e.stopPropagation()}
          >
            <X
              className="absolute right-5 top-10"
              size={32}
              onClick={() => setIsOpen(false)}
            />
            <ul className="flex flex-col gap-6 text-gray-700 text-base font-medium  ">
              {options.map((option) => (
                <li key={option.title}>
                  <a href={option.url} onClick={() => setIsOpen(false)}>
                    {option.title}
                  </a>
                </li>
              ))}
              <div className="flex gap-4 items-center">
                <a
                  href="https://www.instagram.com/prof.jeovani/"
                  target="_blank"
                >
                  <InstagramLogo size={32} className="text-blue-800" />
                </a>
              </div>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
