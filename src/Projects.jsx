import { projects } from "./utils";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center gap-16 w-screen py-20 md:px-20 lg:px-40 2xl:px-60"
    >
      <header className="flex justify-between">
        <div className="flex items-center w-1/2 gap-4">
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
              className={`relative h-[350px] w-[400px] bg-gray-800 rounded-2xl transition-all duration-700 transform ${
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

              <div className="project_info px-3 py-3">
                <div className="title flex justify-between">
                  <h2>{project.name}</h2>
                  <div className="icons flex gap-3">
                    <a
                      href={project.git}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
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
