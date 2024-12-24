import { projects } from "./utils";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center gap-16 w-screen max-md:py-5 max-md:px-10 py-20 md:px-20 lg:px-40 2xl:px-60"
    >
      <header className="flex justify-between">
        <div className="flex items-center w-1/2 max-md:w-full gap-4">
          <h1 className="text-2xl">Projects</h1>
          <hr className={`flex-1 h-[2px] bg-black`}></hr>
          <div className="empty w-auto"></div>
        </div>
      </header>

      <div className="flex flex-wrap gap-10 justify-center">
        {projects.map((project) => {
          const { ref, inView } = useInView({
            triggerOnce: true, // Ensures animation happens only once when the card enters the viewport.
            threshold: 0.2,   // Adjust the threshold to fine-tune when the animation starts.
          });

          return (
            <div
              key={project.id}
              ref={ref}
              className={`project relative h-[350px] w-[400px] max-md:h-[300px] max-md:w-[300px] dark:bg-gray-800 bg-gray-200 rounded-2xl transition-all duration-500 transform hover:scale-110 dark:shadow-none ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
              }`}
            >
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt=""
                  className="h-1/2 w-full rounded-t-2xl"
                />
              </a>

              <div className="project_info px-3 py-3 flex flex-col gap-3">
                <div className="title flex justify-between">
                  <h2 className="text-lg font-bold">{project.name}</h2>
                  <div className="icons flex gap-3 text-xl">
                    <a
                      href={project.git}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faGithub} className="cursor-pointer hover:text-orange-400"/>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="cursor-pointer hover:text-orange-400" />
                    </a>
                  </div>
                </div>
                <p>{project.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
