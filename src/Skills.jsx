import {
  faHtml5,
  faCss,
  faSass,
  faReact,
  faJs,
  faGit,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  SiTailwindcss,
  SiVite,
  SiWebpack,
  SiVitest,
  SiFirebase,
  SiStripe,
  SiNextdotjs,
  SiTypescript,
  SiPostman,
} from "react-icons/si";
import { FaLock, FaNodeJs } from "react-icons/fa";

export default function Skills() {
  const ZustandIcon = () => (
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 7h10L4 17h10" />
    </svg>
  );

  const front = [
    { name: "HTML", icon: <FontAwesomeIcon icon={faHtml5} /> },
    { name: "CSS", icon: <FontAwesomeIcon icon={faCss} /> },
    { name: "SASS", icon: <FontAwesomeIcon icon={faSass} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "JavaScript", icon: <FontAwesomeIcon icon={faJs} /> },
    { name: "React", icon: <FontAwesomeIcon icon={faReact} /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Zustand", icon: <ZustandIcon /> },
  ];

  const back = [
    { name: "Node.js", icon: <FaNodeJs /> },
    {
      name: "Firebase / Firestore",
      icon: <SiFirebase />,
    },
    { name: "REST APIs", icon: <SiPostman /> },
    { name: "Stripe API", icon: <SiStripe /> },
    { name: "Authentication", icon: <FaLock /> },
    {
      name: "Next.js API Routes",
      icon: <SiNextdotjs />,
    },
  ];

  const misc = [
    { name: "Git", icon: <FontAwesomeIcon icon={faGit} /> },
    { name: "GitHub", icon: <FontAwesomeIcon icon={faGithub} /> },
    { name: "Vite", icon: <SiVite /> },
    { name: "Vitest", icon: <SiVitest /> },
    { name: "Webpack", icon: <SiWebpack /> },
  ];

  const card_styles =
    "dark:bg-black bg-gray-200 rounded-xl p-4 w-64 h-72 md:w-72 md:h-80 lg:w-80 lg:h-80 hover:scale-105 transition-all";
  return (
    <section
      id="skills"
      className="flex flex-col justify-center gap-14 w-screen py-20 md:px-20 lg:px-40 2xl:px-60 max-md:px-10"
    >
      <header className="flex  justify-between">
        <div className="flex items-center max-md:w-full md:w-1/2 gap-4">
          <h1 className="text-2xl">Tools & Skills</h1>
          <hr className={`flex-1 h-[2px] bg-black `}></hr>
          <div className="empty w-auto"></div>
        </div>
      </header>

      <div className="flex text-xl gap-16 max-lg:gap-5 justify-center max-md:flex-col max-md:items-center max-md:gap-20">
        <div className="container w-72 md:w-80 lg:w-96 flex flex-col text-center gap-4">
          <h1>Front-end</h1>
          <div
            id="frontend_card"
            className={`${card_styles} grid grid-cols-3 gap-3 p-2 max-md:p-7 max-md:gap-7 w-full h-full place-items-center`}
          >
            {front.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center gap-1 w-full max-w-[72px]"
              >
                <span className="text-2xl md:text-3xl">{item.icon}</span>
                <span className="text-xs md:text-sm text-center break-words">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="container w-72 md:w-80 lg:w-96 flex flex-col text-center gap-4">
          <h1>Back-end</h1>
          <div
            id="backend_card"
            className={`${card_styles} grid grid-cols-2 gap-3 p-6 max-md:p-7 max-md:gap-7 w-full h-full place-items-center`}
          >
            {back.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center gap-1 w-full max-w-[120px]"
              >
                <span className="text-2xl md:text-3xl">{item.icon}</span>
                <span className="text-xs md:text-sm text-center break-words">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="container w-72 md:w-80 lg:w-96 flex flex-col text-center gap-4">
          <h1>Miscellaneous</h1>
          <div
            id="misc_card"
            className={`${card_styles} grid grid-cols-2  p-7 max-md:p-7 max-md:gap-7 w-full h-full place-items-center`}
          >
            {misc.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center gap-1 w-full max-w-[120px]"
              >
                <span className="text-2xl md:text-3xl">{item.icon}</span>
                <span className="text-xs md:text-sm text-center break-words">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
