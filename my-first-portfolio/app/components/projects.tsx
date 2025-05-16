import { headerItems, projects } from "../constants/constant";
import Image from "next/image";

const Projects = () => {
  return (
    <div>
      <section
        id={headerItems.projects.page}
        className="flex flex-col text-center justify-center items-center my-40"
      >
        <h1 className="text-6xl my-6">Projects</h1>

        <div className="flex justify-center items-center text-center mt-3 break-words flex-wrap">
          {Object.keys(projects).map((project) => (
            <a
              key={project}
              href={projects[project as keyof typeof projects].link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src={projects[project as keyof typeof projects].image}
                alt="projects"
                width={300}
                height={300}
                className="mt-4 p-2"
              />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;

