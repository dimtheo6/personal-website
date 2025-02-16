import {
  faSun,
  faMoon,
  faEnvelope,
  faFileArrowDown,
  faCopy,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(true);
  const [active, setActive] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
  const [openSide, setOpenSide] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const darkModeHandler = () => {
    setDark(!dark);
  };

  const handleCopy = () => {
    const textToCopy = "dimitris.theodosop@gmail.com";
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => {
          setCopySuccess(false);
          setActive(false);
        }, 2000); // Reset after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy text:", err);
      });
  };

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function Left() {
    return (
      <div className={`left flex justify-center gap-10 text-2xl `}>
        <button
          onClick={() => darkModeHandler()}
          className="max-md:fixed max-md:bottom-40"
          aria-label={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {dark && <FontAwesomeIcon icon={faMoon} />}
          {!dark && (
            <FontAwesomeIcon icon={faSun} className="text-yellow-500 " />
          )}
        </button>
        <div className="links flex gap-8 max-md:flex-col max-md:gap-3 ">
          <a
            href="https://github.com/dimtheo6"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/dimitris-theodosopoulos-1b4884327/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <div className=" relative">
            <button
              onClick={() => setActive(!active)}
              className="max-md:hidden"
              aria-label="show email"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="hover:text-orange-400"
              />
            </button>
            <div
              className={`absolute flex items-center -bottom-12 left-1/2 -translate-x-1/2  gap-3 px-2 py-1 text-base bg-orange-600 rounded-lg transition-opacity duration-200 ${
                active ? "opacity-1" : "opacity-0"
              }`}
            >
              <FontAwesomeIcon
                icon={faCopy}
                onClick={handleCopy}
                className={`cursor-pointer ${
                  copySuccess ? "text-green-700" : ""
                }`}
              />
              dimitris.theodosop@gmail.com
              <button onClick={() => setActive(false)}>X</button>
            </div>
          </div>

          <a href="/theodosopoulos_resume.pdf" target="_blank">
            <FontAwesomeIcon
              icon={faFileArrowDown}
              className="hover:text-orange-400"
            />
          </a>
        </div>
      </div>
    );
  }

  function Right() {
    return (
      <div className="right flex gap-8 max-md:flex-col">
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setOpenSide(false);
          }}
          className="relative group border-b-0"
        >
          Home
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
        </button>

        <button
          className="relative group border-b-0"
          onClick={() => {
            document
              .getElementById("about")
              .scrollIntoView({ behavior: "smooth" });
            setOpenSide(false);
          }}
        >
          About
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
        </button>

        <button
          className="relative group border-b-0"
          onClick={() => {
            document
              .getElementById("skills")
              .scrollIntoView({ behavior: "smooth" });
            setOpenSide(false);
          }}
        >
          Skills{" "}
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
        </button>

        <button
          className="relative group border-b-0"
          onClick={() => {
            document
              .getElementById("projects")
              .scrollIntoView({ behavior: "smooth" });
            setOpenSide(false);
          }}
        >
          Projects{" "}
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
        </button>
      </div>
    );
  }

  return (
    <>
      <header
        id="header"
        className={`flex justify-around items-center w-full p-5 fixed top-0 h-20 text-black dark:text-white font-bold text-xl transition-colors duration-200 z-50 ${
          openSide && "z-40"
        } ${scrolled && "dark:bg-black bg-white"}`}
      >
        {isMobile ? (
          <>
            <FontAwesomeIcon
              icon={faBars}
              className="absolute top-5 right-8 text-4xl"
              onClick={() => setOpenSide(!openSide)}
            />
          </>
        ) : (
          <>
            {" "}
            <Left />
            <Right />
          </>
        )}
      </header>
      <div
        className={`overlay fixed h-full w-full bg-black ${
          openSide ? "opacity-40" : "hidden"
        } z-40`}
        onClick={() => setOpenSide(false)}
      ></div>
      <div
        className={`fixed flex flex-col gap-14 py-10 -translate-x-full h-full w-52 md:hidden duration-300 bg-white dark:bg-primary z-50 ${
          openSide ? "translate-x-0" : "-translate-x-full"
        } transition-transform`}
      >
        <Right />
        <Left />
      </div>
    </>
  );
}
