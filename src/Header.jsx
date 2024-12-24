import {
  faSun,
  faMoon,
  faEnvelope,
  faFileArrowDown,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(true);
  const [active, setActive] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

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

  return (
    <header
      id="header"
      className={`flex justify-around items-center w-screen p-5 sticky top-0 h-20 text-black dark:text-white font-bold text-xl transition-colors duration-200 z-50 ${
        scrolled ? "dark:bg-black bg-white" : ""
      }`}
    >
      <div className="left flex gap-10 text-2xl ">
        <button onClick={() => darkModeHandler()}>
          {dark && <FontAwesomeIcon icon={faMoon} />}
          {!dark && (
            <FontAwesomeIcon icon={faSun} className="text-yellow-500 " />
          )}
        </button>
        <div className="links flex gap-5  ">
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
            <button onClick={() => setActive(!active)}>
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

          <a href="/CV_Resume.pdf" target="_blank">
            <FontAwesomeIcon
              icon={faFileArrowDown}
              className="hover:text-orange-400"
            />
          </a>
        </div>
      </div>

      <div className="right flex gap-5">
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="relative group border-b-0"
        >
          Home
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
        </button>

        <button className="relative group border-b-0">
          About
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
        </button>

        <button className="relative group border-b-0">
          Skills{" "}
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
        </button>

        <button className="relative group border-b-0">
          Projects{" "}
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
        </button>
      </div>
    </header>
  );
}
