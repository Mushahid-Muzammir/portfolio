import { projectsData } from '@/../utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {

  return (
    <div id='projects' className="relative z-50  my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex justify-center items-center">
          <h2 className="text-3xl font-bold uppercase text-white pb-6 border-b-2 border-[#16f2b3]">
            PROJECTS
          </h2>
        </div>
      </div>

      <div id="projects" className="py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;