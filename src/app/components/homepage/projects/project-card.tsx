import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Image from "next/image";

function ProjectCard({ project }: any) {
  return (
    <div className="group rounded-xl border border-white/10 bg-[#0f0b24] hover:bg-[#18123b] p-5 shadow-md hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1">
      
      {/* Thumbnail */}
      {project.image && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <Image
            src={project.image}
            alt={project.name}
            width={400}
            height={250}
            className="rounded-lg object-cover w-full h-44 group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      {/* Title */}
      <h3 className="text-lg font-semibold text-white mb-1 tracking-wide">
        {project.name}
      </h3>

      {/* Role */}
      <p className="text-xs text-[#16f2b3] font-medium mb-2">
        {project.role}
      </p>

      {/* Description */}
      <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tools.map((tech: string, i: number) => (
          <span
            key={i}
            className="bg-[#1b1539] text-[10px] text-gray-200 px-2.5 py-1 rounded-full border border-white/10"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            className="flex items-center gap-1.5 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 px-3.5 py-2 rounded-md transition"
          >
            <FaExternalLinkAlt size={13} /> Live Demo
          </a>
        )}

        {project.code && (
          <a
            href={project.code}
            target="_blank"
            className="flex items-center gap-1.5 text-sm font-medium text-purple-400 border border-purple-400 hover:bg-purple-500/10 px-3.5 py-2 rounded-md transition"
          >
            <FaGithub size={15} /> Code
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
