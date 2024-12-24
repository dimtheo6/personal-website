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
import { SiTailwindcss, SiVite, SiWebpack, SiVitest } from "react-icons/si";

export default function Skills() {
  const front = [
    { name: "HTML", icon: <FontAwesomeIcon icon={faHtml5} /> },
    { name: "CSS", icon: <FontAwesomeIcon icon={faCss} /> },
    { name: "SASS", icon: <FontAwesomeIcon icon={faSass} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "JavaScript", icon: <FontAwesomeIcon icon={faJs} /> },
    { name: "React", icon: <FontAwesomeIcon icon={faReact} /> },
  ];

  const misc = [
    { name: "Git", icon: <FontAwesomeIcon icon={faGit} /> },
    { name: "GitHub", icon: <FontAwesomeIcon icon={faGithub} /> },
    { name: "Vite", icon: <SiVite /> },
    { name: "Vitest", icon: <SiVitest /> },
    { name: "Webpack", icon: <SiWebpack /> },
  ];

  const card_styles = 'dark:bg-black bg-gray-200 rounded-xl flex flex-wrap  p-10 min-h-[350px] justify-center hover:scale-105 transition-all'
  return (
    <section id="skills" className="flex flex-col justify-center gap-14 w-screen py-20 md:px-20 lg:px-40 2xl:px-60">
      <header className="flex  justify-between">
        
        <div className="flex items-center w-1/2 gap-4">
          <h1 className="text-2xl">Tools & Skills</h1>
          <hr className={`flex-1 h-[2px] bg-black `}></hr>
          <div className="empty w-auto"></div>
        </div>
      </header>


    <div className="flex text-xl gap-48 justify-center">

      <div className="container w-64 h-64 flex flex-col text-center gap-5">
        <h1>Front-end</h1>
        <div id="frontend_card" className={`${card_styles} gap-5`}>
          {front.map((item) => (
            <div key={item.name} className="flex flex-col items-center">
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container w-64  flex flex-col text-center gap-5">
        <h1>Miscellaneous</h1>
        <div id="misc_card" className={`${card_styles} gap-10`}>
          {misc.map((item) => (
            <div key={item.name} className="flex flex-col items-center">
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
