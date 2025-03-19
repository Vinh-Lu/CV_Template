"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from "lucide-react"

interface ProjectDetailProps {
  project: {
    id: number
    title: string
    description: string
    folderName: string
    category: string
    technologies: string[]
    liveUrl?: string
    githubUrl?: string
    featured: boolean
    longDescription?: string
    challenges?: string[]
    solutions?: string[]
    screenshots?: string[]
    mainImage?: string
  }
  isOpen: boolean
  onClose: () => void
}

export function ProjectDetail({ project, isOpen, onClose }: ProjectDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const hasMultipleScreenshots = project.screenshots && project.screenshots.length > 1

  const nextImage = () => {
    if (project.screenshots) {
      setCurrentImageIndex((prevIndex) => (project.screenshots && prevIndex === project.screenshots.length - 1 ? 0 : prevIndex + 1))
    }
  }

  const prevImage = () => {
    if (project.screenshots) {
      setCurrentImageIndex((prevIndex) => (project.screenshots && prevIndex === 0 ? project.screenshots.length - 1 : prevIndex - 1))
    }
  }

  const getImageUrl = () => {
    if (project.screenshots && project.screenshots.length > 0) {
      return project.screenshots && project.screenshots[currentImageIndex]?.src
    }
    return project.screenshots && project.screenshots[0]?.src || `/projects/${project.folderName}/thumbnail.jpg`
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-[#121212] text-white border-[#333]">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-white">{project.title}</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-gray-400 hover:text-white hover:bg-[#252525]"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-gray-400 mt-2">{project.description}</p>
        </DialogHeader>

        <div className="mt-6">
          <div className="relative rounded-xl overflow-hidden mb-8 bg-[#0a0a0a] border border-[#333]">
            <img
              src={getImageUrl() || "/placeholder.svg"}
              alt={`${project.title} screenshot ${currentImageIndex + 1}`}
              className="w-full h-auto object-contain max-h-[500px]"
              onError={(e) => {
                e.currentTarget.src = "/placeholder.svg?height=500&width=800"
              }}
            />

            {hasMultipleScreenshots && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 border-[#333] rounded-full"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 border-[#333] rounded-full"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-xs">
                  {currentImageIndex + 1} / {project.screenshots?.length}
                </div>
              </>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {project.longDescription && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-white">Project Overview</h3>
                  <p className="text-gray-400 leading-relaxed">{project.longDescription}</p>
                </div>
              )}

              {project.challenges && project.challenges.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-white">Challenges</h3>
                  <ul className="space-y-2 text-gray-400">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block h-2 w-2 rounded-full bg-blue-500 mt-2 mr-3"></span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.solutions && project.solutions.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-white">Solutions</h3>
                  <ul className="space-y-2 text-gray-400">
                    {project.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block h-2 w-2 rounded-full bg-purple-500 mt-2 mr-3"></span>
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div>
              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333] mb-6">
                <h3 className="text-xl font-bold mb-4 text-white">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} className="bg-[#252525] text-gray-300 border-[#333]">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
                <h3 className="text-xl font-bold mb-4 text-white">Project Links</h3>
                <div className="space-y-3">
                  {project.liveUrl && (
                    <Button
                      asChild
                      variant="outline"
                      className="w-full justify-between border-[#333] hover:border-blue-500 hover:bg-[#252525]"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <span>Live Demo</span>
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      asChild
                      variant="outline"
                      className="w-full justify-between border-[#333] hover:border-blue-500 hover:bg-[#252525]"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <span>Source Code</span>
                        <Github className="h-4 w-4 ml-2" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {project.screenshots && project.screenshots.length > 1 && (
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-white">Gallery</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {project.screenshots.map((screenshot, index) => (
                  <div
                    key={index}
                    className={`rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                      currentImageIndex === index
                        ? "border-blue-500 scale-[1.05] shadow-lg shadow-blue-500/20"
                        : "border-transparent hover:border-[#333]"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <img
                      src={screenshot?.src || "/placeholder.svg"}
                      alt={`${project.title} thumbnail ${index + 1}`}
                      className="w-full h-20 object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg?height=80&width=120"
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

