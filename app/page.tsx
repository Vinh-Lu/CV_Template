import { Mail, Phone, MapPin, Calendar, User, Briefcase, GraduationCap, Info } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const data = {
  personalInfo: {
    name: "TRAN VU LINH",
    title: "FRONTEND DEVELOPER",
    contacts: [
      { icon: Phone, text: "0902348153" },
      { icon: Mail, text: "tranvulinh280694@gmail.com" },
      { icon: MapPin, text: "451/3/8 Pham The Hien, Ward 3, District 8, HCMC" },
      { icon: Calendar, text: "28/06/1994" }
    ],
    imageSrc: "/placeholder.svg?height=128&width=128"
  },
  objective:
    "Frontend Developer skilled in React, Next.js, and TypeScript. Experienced in building scalable, high-performance web applications and optimizing user experience. Passionate about problem-solving, contributing to long-term product growth.",
  experience: [
    {
      title: "FRONTEND DEVELOPER (FULL TIME)",
      company: "Phuong Trang Bus Corporation – FUTA Bus Lines",
      period: "03/2022 - Present",
      position: "Member",
      teamSize: "Worked on multiple projects, each with approximately 5-7members.",
      responsibilities: [
        {
          category: "Feature Development",
          points: [
            "Implementing features such as online ticket booking, ticket lookup, admin management systems, and interactive dashboards for data visualization.",
            "Creating responsive layouts based on product wireframes, developing informational websites, landing pages."
          ]
        },
        {
          category: "CMS & Backend Development",
          points: [
            "Setting up and managing CMS Strapi to handle backend operations and data management.",
            "Integrating with RESTful APIs and GraphQL."
          ]
        },
        {
          category: "Authentication & Messaging",
          points: [
            "Implementing Firebase Authentication, OAuth2, and JWT for secure login and session management.",
            "Building real-time message listeners to enhance user interaction."
          ]
        },
        {
          category: "Optimization & Performance",
          points: [
            "Optimize components (memoization, lazy loading, avoid unnecessary re-renders).",
            "Code splitting & dynamic import in Next.js to reduce bundle size.",
            "Tree-shaking and removing unused dependencies.",
            "Use CDN to deliver static content images.",
            "Optimize images (WebP, lazy loading images).",
            "Reduce CSS bundle size with Tailwind.",
            "Manage state efficiently with Redux, SWR, React Query.",
            "Implement client-side caching (IndexedDB, LocalStorage, Redis).",
            "Use prefetching/pagination for APIs instead of loading all data at once.",
            "Use HTTP/2, gzip, Brotli for data compression.",
            "Reduce number of requests with API batching and GraphQL."
          ]
        }
      ],
      technology: "ReactJS, Next.js, TypeScript, Redux, Ant Design, Tailwind CSS, CMS Strapi"
    },
    {
      title: "FRONTEND DEVELOPER (FULL TIME)",
      company: "FPT TELECOM JOINT STOCK COMPANY",
      period: "06/2018 - 03/2022",
      position: "Member",
      teamSize: "6",
      responsibilities: [
        {
          category: "Feature Development",
          points: [
            "Implemented features such as admin management systems, dashboards, new features, promotional events, and file storage/upload functionalities."
          ]
        },
        {
          category: "Payment Integration",
          points: [
            "Integrated multiple payment gateways: MoMo, ShopeePay, BlueSea, ZaloPay."
          ]
        },
        {
          category: "Database Optimization",
          points: [
            "Managed and optimized databases (MySQL, MongoDB, MariaDB, Redis) with stored procedures and triggers."
          ]
        }
      ],
      technology: "Yii2, Material UI, AngularJS, ReactJS, Ajax"
    },
    {
      title: "FRONTEND DEVELOPER (FULL TIME)",
      company: "HOANG VINH PHAT COMPANY",
      period: "05/2017 - 05/2018",
      position: "Member",
      teamSize: "3",
      responsibilities: [
        {
          category: "Feature Development",
          points: [
            "Building and customizing websites based on the Flatsome theme, modifying designs according to client requirements."
          ]
        },
        {
          category: "Custom Development",
          points: [
            "Creating custom post types, custom categories, custom archives, and custom pages, as well as developing custom shortcodes and functions."
          ]
        },
        {
          category: "E-Commerce Integration",
          points: [
            "Implementing WooCommerce for e-commerce websites."
          ]
        },
        {
          category: "Dynamic Content Management",
          points: [
            "Utilizing Advanced Custom Fields (ACF) to create dynamic and customizable fields."
          ]
        },
        {
          category: "Performance Optimization",
          points: [
            "Optimizing and configuring available plugins to enhance website performance and functionality."
          ]
        }
      ],
      technology: "WordPress, PHP, HTML, CSS"
    }
  ],
  education: [
    {
      degree: "BACHELOR OF INFORMATION TECHNOLOGY",
      institution: "Saigon Technology University",
      period: "10/2012 - 10/2017"
    }
  ],
  additionalInfo: {
    workApproach: [
      "Proactive & Fast Learner: Always eager to explore and adapt to new technologies.",
      "Detail-Oriented & Responsible: High commitment to delivering quality work under pressure.",
      "Teamwork & Communication: Good listening skills, problem-solving ability, and strong collaboration in a team environment."
    ],
    technicalSkills: [
      "React", "Next.js", "Redux", "TypeScript", "TailwindCSS", "Ant Design", "Material UI",
      "IndexedDB", "LocalStorage",
      "Strapi", "PHP (Yii2)", "WordPress",
      "MySQL", "MongoDB", "MariaDB", "Redis",
      "REST API", "GraphQL", "Firebase Authentication", "OAuth2", "JWT"
    ]
  }
}

export default function CV() {
  return (
    <div className="bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-slate-800 text-white p-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
            <div>
              <h1 className="text-3xl font-bold">{data.personalInfo.name}</h1>
              <h2 className="text-xl text-slate-300 mt-1">{data.personalInfo.title}</h2>
              <div className="flex flex-wrap gap-3 mt-4">
                {data.personalInfo.contacts.map((contact, index) => (
                  <div key={index} className="flex items-center gap-1 text-sm">
                    <contact.icon className="h-4 w-4" />
                    <span>{contact.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-slate-600 shadow-lg">
                <img
                  src={data.personalInfo.imageSrc}
                  alt={data.personalInfo.name}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Objective */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <User className="h-5 w-5 text-slate-700" />
              <h3 className="text-xl font-bold border-b border-slate-200 pb-2 w-full">OBJECTIVE</h3>
            </div>
            <p className="text-slate-600">{data.objective}</p>
          </section>

          {/* Work Experience */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="h-5 w-5 text-slate-700" />
              <h3 className="text-xl font-bold border-b border-slate-200 pb-2 w-full">WORK EXPERIENCE</h3>
            </div>

            <div className="space-y-8">
              {data.experience.map((job, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-slate-200">
                  <div className="absolute w-4 h-4 bg-slate-800 rounded-full -left-[9px] top-1"></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h4 className="text-lg font-semibold">{job.title}</h4>
                    <div className="flex items-center text-slate-500 text-sm font-medium">
                      <Calendar className="h-4 w-4 mr-1" />
                      {job.period}
                    </div>
                  </div>
                  <h5 className="text-slate-700 font-medium mb-2">{job.company}</h5>
                  <div className="mb-2">
                    <span className="font-medium">Position:</span> {job.position}
                  </div>
                  <div className="mb-2">
                    <span className="font-medium">Team Size:</span> {job.teamSize}
                  </div>
                  <div className="mb-2">
                    <span className="font-medium">Responsibilities:</span>
                    <div className="mt-2 ml-4 space-y-3">
                      {job.responsibilities.map((resp, rIdx) => (
                        <div key={rIdx}>
                          <div className="font-medium text-slate-700">{resp.category}:</div>
                          <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                            {resp.points.map((p, pIdx) => (
                              <li key={pIdx}>{p}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="font-medium">Technology:</div> {job.technology}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-5 w-5 text-slate-700" />
              <h3 className="text-xl font-bold border-b border-slate-200 pb-2 w-full">EDUCATION</h3>
            </div>

            {data.education.map((edu, index) => (
              <Card key={index} className="mb-4">
                <CardContent className="p-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <div>
                      <h4 className="font-semibold">{edu.degree}</h4>
                      <p className="text-slate-600">{edu.institution}</p>
                    </div>
                    <span className="text-sm text-slate-500 font-medium">{edu.period}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </section>

          {/* Additional Information */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Info className="h-5 w-5 text-slate-700" />
              <h3 className="text-xl font-bold border-b border-slate-200 pb-2 w-full">ADDITIONAL INFORMATION</h3>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">Work Approach & Soft Skills:</h4>
              <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                {data.additionalInfo.workApproach.map((approach, index) => (
                  <li key={index}>{approach}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-2">Technical Skills:</h4>
              <div className="flex flex-wrap gap-2">
                {data.additionalInfo.technicalSkills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </div>
            </div>
          </section>

          <Separator className="my-6" />
        </div>
      </div>
    </div>
  )
}
