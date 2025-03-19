import type React from "react"
// Function to get the main image for a project
export function getProjectImage(folderName: string): string {
  return `/projects/${folderName}/thumbnail.jpg`
}

// Function to get a specific image from a project folder
export function getProjectImageByName(folderName: string, imageName: string): string {
  return `/projects/${folderName}/${imageName}`
}

// Function to get multiple screenshots from a project folder
export function getProjectScreenshots(folderName: string, count = 3): string[] {
  return Array.from({ length: count }, (_, i) => `/projects/${folderName}/screenshot-${i + 1}.jpg`)
}

// Function to handle image loading errors
export function handleImageError(event: React.SyntheticEvent<HTMLImageElement, Event>, fallbackSrc: string): void {
  event.currentTarget.src = fallbackSrc
}

