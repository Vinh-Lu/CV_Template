"use client"

import ProjectCard from "@/components/project-car"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight,ExternalLink } from "lucide-react"
interface Project {
  id: number;
  title: string;
  description: string;
  folderName: string;
  category: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  challenges?: string[];
  solutions?: string[];
  screenshots?: Promise<any>;
  mainImage: string;
}

interface ProjectCardProps {
  project: Project;
  onViewDetails: () => void;
}

function ProjectCard({ project,onViewDetails }: ProjectCardProps) {

  return (
    <div className="group relative bg-[#1a1a1a] rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10">
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
        <img
          src={project.screenshots[0].src || `/projects/${project.folderName}/thumbnail.jpg`}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"

        />
        {project.featured && (
          <div className="absolute top-3 right-3 z-20">
            <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 border-0 text-white">Featured</Badge>
          </div>
        )}
      </div>

      <div className="flex-grow p-6">
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0,3).map((tech,index) => (
            <Badge key={index} variant="outline" className="bg-[#252525] text-gray-300 border-[#333]">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="outline" className="bg-[#252525] text-gray-300 border-[#333]">
              +{project.technologies.length - 3}
            </Badge>
          )}
        </div>
      </div>

      <div className="p-6 pt-0 mt-auto flex justify-between items-center border-t border-[#333] gap-2">
        <Button
          onClick={onViewDetails}
          variant="ghost"
          className="text-blue-400 hover:text-blue-300 hover:bg-blue-900/20 p-0"
        >
          View Details <ArrowUpRight className="h-4 w-4 ml-1" />
        </Button>

        {/* {project.liveUrl && (
          <Button
            variant="outline"
            size="sm"
            asChild
            className="border-[#333] hover:border-blue-500 hover:bg-[#252525]"
          >
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-1" />
              Live Demo
            </a>
          </Button>
        )} */}
      </div>
    </div>
  )
}
export default ProjectCard;
