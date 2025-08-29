"use client"

import ProjectCard from "@/components/project-car"
import { ProjectDetail } from "@/components/project-detail"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect,useState } from "react"



const getProjectImages = async (folderName: string) => {
  const res = await fetch(`/api/get-images?directory=${folderName}`);

  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  }

  return res.json();
};

async function getProjects() {
  const projects = [
    {
      id: 1,
      title: "FUTA Bus Admin Dashboard",
      description:
        "Comprehensive administrative dashboard for FUTA Bus Lines, providing real-time monitoring, route management, and business analytics.",
      folderName: "ADMIN_CITY_BUS",
      category: "web",
      technologies: ["React","Next.js","Redux","Tailwind CSS","Chart.js"],
      // liveUrl: "https://admin.futabus.vn",
      githubUrl: "",
      featured: true,
      longDescription:
        "The FUTA Bus Admin Dashboard is a sophisticated management system that provides administrators with real-time monitoring of bus operations, route management, financial analytics, and customer data. The system features interactive maps, comprehensive reporting tools, and business intelligence capabilities.",
      challenges: [
        "Creating an intuitive interface for complex data visualization",
        "Implementing real-time monitoring of bus locations and status",
        "Developing comprehensive analytics for business intelligence",
        "Ensuring system security and role-based access control",
      ],
      solutions: [
        "Designed a modern, blue-themed UI with clear data visualization components",
        "Implemented WebSocket connections for real-time data updates",
        "Created interactive maps showing bus routes and vehicle locations",
        "Developed comprehensive analytics dashboards with filtering capabilities",
      ],
      screenshots: await getProjectImages("BOD"),
    },
    {
      id: 2,
      title: "FUTA CityBus Website",
      description:
        "Public-facing website for FUTA CityBus with online booking, route information, and customer support.",
      folderName: "WEB_CITY_BUS",
      category: "web",
      technologies: ["Next.js","Tailwind CSS","Redux","Google Maps API","Payment Gateway Integration"],
      // liveUrl: "https://futabus.vn",
      githubUrl: "",
      featured: true,
      longDescription:
        "The FUTA CityBus website provides customers with information about bus routes, schedules, and services. It includes an online booking system, monthly pass management, route finder, news updates, and customer support features. The website also offers comprehensive user account management with features like saved addresses, transaction history, password and PIN security, support ticket system, and FutaPay digital wallet integration. The website is designed to be user-friendly and responsive, providing a seamless experience for customers across all devices.",
      challenges: [
        "Creating an intuitive booking flow for diverse route options",
        "Implementing secure payment processing with multiple providers",
        "Developing an interactive route finder with real-time information",
        "Ensuring responsive design for all device types",
      ],
      solutions: [
        "Designed a step-by-step booking process with clear visual cues",
        "Integrated multiple payment gateways including FutaPay digital wallet",
        "Created an interactive map-based route finder with stop information",
        "Implemented comprehensive user account management with security features",
        "Developed a support ticket system with feedback collection",
        "Implemented a fully responsive design with mobile-first approach",
      ],
      screenshots: await getProjectImages("WEB_CITY_BUS"),
    },
    {
      id: 3,
      title: "FUTA Bus CMS",
      description: "Content Management System for FUTA Bus Lines, managing website content, promotions, and news.",
      folderName: "CMS_CITY_BUS",
      category: "cms",
      technologies: ["Strapi","React","GraphQL"],
      // liveUrl: "https://cms.futabus.vn",
      githubUrl: "",
      featured: true,
      longDescription:
        "The FUTA Bus CMS is a custom content management system built with Strapi that allows content editors to manage website content, promotions, news articles, and route information. The system includes a user-friendly interface for content creation and management.",
      screenshots: await getProjectImages("CMS_CITY_BUS"),
    },
    {
      id: 4,
      title: "FUTA CRM System",
      description:
        "Customer Relationship Management system for tracking customer interactions, support tickets, and service quality.",
      folderName: "CRM",
      category: "web",
      technologies: ["React","Redux","Firebase"],
      // liveUrl: "https://crm.futabus.vn",
      githubUrl: "",
      featured: true,
      longDescription:
        "The FUTA CRM system provides tools for managing customer relationships, tracking interactions, handling support tickets, and evaluating service quality. It includes features for customer segmentation, complaint management, and performance analytics.",
      challenges: [
        "Creating a unified system for customer data across multiple business units",
        "Implementing efficient ticket management and routing",
        "Developing comprehensive reporting for service quality metrics",
      ],
      solutions: [
        "Designed a modular architecture that supports different business units",
        "Implemented automated ticket routing and priority assignment",
        "Created customizable dashboards for monitoring customer satisfaction metrics",
      ],
      screenshots: await getProjectImages("CRM"),
    },
    {
      id: 5,
      title: "FUTA Land Recruitment CMS",
      description:
        "Content Management System for FUTA Land recruitment, managing job listings and applicant information.",
      folderName: "CMS_FUTA_LAND",
      category: "cms",
      technologies: ["Strapi","React"],
      // liveUrl: "https://cms.futaland.vn",
      githubUrl: "",
      featured: true,
      longDescription:
        "The FUTA Land Recruitment CMS manages content for the company's recruitment portal, including job listings, location information, and applicant data. The system provides tools for HR staff to manage the entire recruitment process.",
      screenshots: await getProjectImages("CMS_FUTA_LAND"),
    },
    {
      id: 6,
      title: "FUTA Land Website",
      description: "Real estate website for FUTA Land, showcasing property listings and development projects.",
      folderName: "WEB_FUTA_LAND",
      category: "web",
      technologies: ["Next.js","Tailwind CSS","Redux"],
      // liveUrl: "https://futaland.vn",
      githubUrl: "",
      featured: true,
      longDescription:
        "The FUTA Land website showcases real estate properties and development projects. It includes property search, filtering, detailed listings with images and maps, and inquiry forms.",
      screenshots: await getProjectImages("WEB_FUTA_LAND"),
    },
   
  ]
  return projects;
}

export default function Portfolio() {
  const [projects,setProjects] = useState([])
  const [selectedProject,setSelectedProject] = useState(null)
  const [activeCategory,setActiveCategory] = useState("all")
  const [isLoaded,setIsLoaded] = useState(false)

  useEffect(() => {
    const fetchProjects = async () => {
      const dataProjects = await getProjects();
      setProjects(dataProjects);
      setIsLoaded(true);
    };

    fetchProjects();
  },[]);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : activeCategory === "featured"
        ? projects.filter((project) => project.featured)
        : projects.filter((project) => project.category === activeCategory)

  const openProjectDetail = (project: any) => {
    setSelectedProject(project)
  }

  const closeProjectDetail = () => {
    setSelectedProject(null)
  }

  const categories = [
    { id: "all",name: "All Projects" },
    { id: "featured",name: "Featured" },
    { id: "web",name: "Web Apps" },
    { id: "cms",name: "CMS" },
  ]

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-30"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0,y: 20 }}
            animate={isLoaded ? { opacity: 1,y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              My Portfolio
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              A collection of projects I've worked on throughout my career as a web developer, showcasing my skills in
              front-end development, back-end integration, and UI/UX design.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0"
              >
                <Link href="#projects">View Projects</Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0">
                <Link href="/">View CV</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0,y: 20 }}
            animate={isLoaded ? { opacity: 1,y: 0 } : {}}
            transition={{ duration: 0.6,delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-center">Featured Work</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-10"></div>

            {/* Filter Categories */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${activeCategory === category.id
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    : "bg-[#1a1a1a] text-gray-300 hover:bg-[#252525]"
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects?.map((project,index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0,y: 20 }}
                animate={isLoaded ? { opacity: 1,y: 0 } : {}}
                transition={{ duration: 0.5,delay: 0.1 * (index % 3) }}
              >
                <ProjectCard project={project} onViewDetails={() => openProjectDetail(project)} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {selectedProject && (
        <ProjectDetail project={selectedProject} isOpen={!!selectedProject} onClose={closeProjectDetail} />
      )}
    </div>
  )
}
