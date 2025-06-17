import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, ChevronRight, Phone, ExternalLink } from "lucide-react"
import ProjectCard from "@/components/ui/project-card"
import SkillBadge from "@/components/ui/skill-badge"
import ExperienceCard from "@/components/ui/experience-card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

export default function Home() {
  const skills = {
    languages: ["Python", "C/C++", "JavaScript", "TypeScript", "SQL", "PL/SQL", "HTML/CSS", "Matlab", "Assembly"],
    frameworks: ["React", "React Native", "Node.js", "Express.js", "Flask", "FastAPI"],
    tools: [
      "Git",
      "Docker",
      "Google Cloud Platform",
      "VS Code",
      "Visual Studio",
      "PyCharm",
      "IntelliJ",
      "Android Studio",
      "ThunderClient",
      "Postman",
      "Figma",
      "Stata",
      "Jupyter Notebook",
      "Google Colab",
      "Expo Go",
      "Vite",
    ],
    libraries: [
      "pandas",
      "NumPy",
      "Matplotlib",
      "Redux",
      "Context API",
      "Axios",
      "Firebase Auth",
      "Firebase Cloud Messaging",
      "Socket.io",
      "Material-UI",
      "React Bootstrap",
      "React Lazy Load",
      "React Memoize",
      "react-i18next",
    ],
  }

  const experiences = [
    {
      title: "Software Development Intern",
      company: "Soop",
      location: "Lahore, Pakistan",
      duration: "July 2024 – Present",
      description: [
        "Developed a React Native app, Parchay, for an ed-tech startup, allowing users to solve tests and earn rewards",
        "Integrated APIs and implemented core app features and ensured smooth functionality",
        "Collaboration with manager and other developers",
      ],
    },
    {
      title: "International Research Assistant",
      company: "University of Western Ontario",
      location: "London, Ontario",
      duration: "May 2023 – June 2024",
      description: [
        "Development and Evaluation of Subjective Metrics to evaluate AI generated images",
        "Explored architectural differences of LLMs and evaluated the quality of images produced using both human subjective assessments and objective metrics",
        "Objective Metrics Validation and Correlation",
      ],
    },
  ]

  const projects = [
    {
      title: "TechNova",
      description:
        "A comprehensive B2B data analytics platform that enables companies to extract valuable insights from their data without requiring deep technical expertise. Features automated data cleaning, business trend analysis, and interactive dashboards.",
      tags: ["React.js", "Express.js", "MongoDB", "Node.js", "Data Analytics", "B2B Platform"],
      link: "https://github.com/alisafisyed",
      linkType: "github",
      date: "Final Year Project 2025",
      type: "web",
      color: "from-cyan-400 to-blue-600",
    },
    {
      title: "Voorify",
      description:
        "A professional apartment inspection service platform that helps renters get comprehensive property assessments before signing leases. Features certified inspectors, professional-grade equipment, and detailed reporting with city comparisons.",
      tags: ["Real Estate", "Professional Services", "Property Inspection", "Web Platform", "Service Business"],
      link: "https://www.voorify.com",
      linkType: "website",
      date: "2024",
      type: "web",
      color: "from-teal-400 to-cyan-600",
    },
    {
      title: "MigraineTracker",
      description:
        "A full-stack React Native application with ExpressJS back-end that allows users to input their symptoms and get correlations and recommendations using Machine Learning techniques.",
      tags: ["React Native", "ExpressJS", "Flask", "MongoDB", "JavaScript", "Python", "Machine Learning"],
      link: "https://github.com/alisafisyed/MigraineTracker",
      linkType: "github",
      date: "May 2024",
      type: "mobile",
      color: "from-green-400 to-blue-500",
    },
    {
      title: "PayElectric",
      description:
        "A web application that allows users to pay their electrical bills. Features PL/SQL stored procedures for core business operations and dynamic API endpoints for bill management.",
      tags: ["FastAPI", "Git", "SQL", "PL/SQL", "Oracle DB"],
      link: "https://github.com/alisafisyed/PayElectric",
      linkType: "github",
      date: "December 2024",
      type: "web",
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "Parchay",
      description:
        "A React Native application that allows users to solve tests and earn rewards with personalized tests based on user preferences and real-time chat functionality.",
      tags: ["React Native", "ExpressJS", "MongoDB", "JavaScript", "Context API", "WebSockets"],
      link: "https://github.com/alisafisyed/Parchay---",
      linkType: "github",
      date: "August 2024",
      type: "mobile",
      color: "from-purple-400 to-pink-500",
    },
    {
      title: "TradingApp",
      description:
        "A small-scale trading application that allows users to trade with real-time trade information using WebSockets for live updates.",
      tags: ["React", "ExpressJS", "MongoDB", "Node.js", "WebSockets"],
      link: "https://github.com/alisafisyed/tradeBiz-",
      linkType: "github",
      date: "October 2024",
      type: "web",
      color: "from-blue-400 to-indigo-600",
    },
  ]

  const otherProjects = [
    "Memory Allocator",
    "Threading Library",
    "File System",
    "Exploratory Data Analysis",
    "Data Visualization projects",
  ]

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Publications", href: "#publications" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-slate-800/50"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-6">
            • Computer Science  • Data Science • Machine Learning
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">Syed Ali Safi</h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4">Software Developer & Research Assistant</p>
            <p className="text-lg text-slate-400 mb-8 max-w-3xl leading-relaxed">
              Bridging economics, politics, and technology through innovative software solutions. Currently developing
              ed-tech applications at Soop while contributing to AI research at University of Western Ontario.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                <Link href="#projects">
                  View Projects <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent text-white border-white hover:bg-white hover:text-slate-900"
              >
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>
            <div className="flex gap-4 mt-8">
              <Link href="https://github.com/alisafisyed" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/20">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/syed-ali-safi-6601b8303" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/20">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:alisafisyed@gmail.com">
                <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/20">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24" id="about">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold">Lahore University of Management Sciences</h3>
                      <p className="text-muted-foreground">Bachelor of Science in Economics and Political Science</p>
                      <p className="text-muted-foreground">Minor in Computer Science</p>
                      <p className="text-sm text-muted-foreground mt-1">Aug. 2021 – May 2025</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Minor Courses:</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                        <span>• Introduction to Problem Solving</span>
                        <span>• Introduction to Programming</span>
                        <span>• Discrete Math</span>
                         <span>•Fundamentals of Computer Systems</span>
                        <span>• Data Structures & Algorithms</span>
                        <span>• Algorithms</span>
                        <span>• Software Engineering</span>
                        <span>• Database Systems</span>
                        <span>• Operating Systems</span>
                        <span>• Artificial Intelligence</span>
                        <span>• Principles and Techniques ofData Science</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                        <Mail className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <Link href="mailto:alisafisyed@gmail.com" className="text-blue-600 hover:underline">
                          alisafisyed@gmail.com
                        </Link>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Phone className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Phone</h4>
                        <p className="text-muted-foreground">03298843004</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                        <Github className="h-6 w-6 text-gray-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">GitHub</h4>
                        <Link
                          href="https://github.com/alisafisyed"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          github.com/alisafisyed
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 md:py-24 bg-slate-50" id="experience">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-24" id="skills">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50 pb-4">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    Languages
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-2">
                    {skills.languages.map((skill) => (
                      <SkillBadge key={skill} name={skill} variant="orange" />
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50 pb-4">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    Frameworks
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-2">
                    {skills.frameworks.map((skill) => (
                      <SkillBadge key={skill} name={skill} variant="blue" />
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 pb-4">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    Tools
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-2">
                    {skills.tools.slice(0, 8).map((skill) => (
                      <SkillBadge key={skill} name={skill} variant="green" />
                    ))}
                    <div className="text-xs text-muted-foreground pt-2">+{skills.tools.length - 8} more tools</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 pb-4">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    Libraries
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-2">
                    {skills.libraries.slice(0, 8).map((skill) => (
                      <SkillBadge key={skill} name={skill} variant="purple" />
                    ))}
                    <div className="text-xs text-muted-foreground pt-2">
                      +{skills.libraries.length - 8} more libraries
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-24 bg-slate-50" id="projects">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Featured Projects</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            A showcase of full-stack applications, mobile apps, and research projects demonstrating expertise across
            different technologies and domains.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-slate-50">
                <CardTitle className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                  Additional Projects & Coursework
                </CardTitle>
                <CardDescription>System-level programming and data analysis projects</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {otherProjects.map((project) => (
                    <div
                      key={project}
                      className="p-3 bg-gradient-to-r from-gray-100 to-slate-100 rounded-lg text-sm font-medium text-center"
                    >
                      {project}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-16 md:py-24" id="publications">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Publications</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">
                      Visual Verity: Comprehensive Evaluation Framework for AI-Generated Image Quality Assessment
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                        <span className="font-medium">Multimedia Systems Journal</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3" />
                        <span>2025</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-medium">
                          Springer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900">Abstract</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      The rapid growth of AI-generated images in fields such as entertainment, e-commerce, and media has
                      heightened the demand for robust evaluation methods to ensure high-quality, photorealistic
                      outputs. This study introduces subjective human assessments named <strong>Visual Verity</strong>,
                      alongside objective computational metrics, to evaluate photorealism, image quality, and text-image
                      alignment in AI-generated images.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900">Key Contributions</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Developed comprehensive evaluation framework for AI-generated image quality assessment
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Benchmarked state-of-the-art models: DALL-E 2, DALL-E 3, GLIDE, and Stable Diffusion
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Introduced Interpolative Binning Scale for more interpretable metric evaluation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Validated traditional metrics (SSIM, PSNR) against human perceptual judgments</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900">Research Impact</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Our findings revealed that while AI models excel in image quality, camera-generated images surpass
                      them in photorealism and text-image alignment. This research provides a structured pathway for
                      advancing AI-generated image evaluation and informing future developments in AI-driven visual
                      media.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      Computer Vision
                    </Badge>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                      AI Evaluation
                    </Badge>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Human-Computer Interaction
                    </Badge>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                      Image Quality Assessment
                    </Badge>
                    <Badge variant="secondary" className="bg-red-100 text-red-800">
                      Machine Learning
                    </Badge>
                  </div>

                  <div className="pt-4 border-t">
                    <Button asChild className="w-full sm:w-auto">
                      <Link
                        href="https://dl.acm.org/doi/abs/10.1007/s00530-025-01769-7"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Publication
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Let's Connect</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <CardTitle>Get In Touch</CardTitle>
                  <CardDescription>
                    I'm always interested in discussing new opportunities, collaborations, or connecting with fellow
                    developers and researchers.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                        <Mail className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <Link href="mailto:alisafisyed@gmail.com" className="text-blue-600 hover:underline">
                          alisafisyed@gmail.com
                        </Link>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Phone className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Phone</h4>
                        <p className="text-muted-foreground">03298843004</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                        <Github className="h-6 w-6 text-gray-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">GitHub</h4>
                        <Link
                          href="https://github.com/alisafisyed"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          github.com/alisafisyed
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Connect with me through your preferred platform</CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <Button asChild className="w-full h-12">
                    <Link href="mailto:alisafisyed@gmail.com">
                      <Mail className="mr-2 h-5 w-5" />
                      Send Email
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="w-full h-12">
                    <Link href="https://github.com/alisafisyed" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-5 w-5" />
                      View GitHub Profile
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="w-full h-12">
                    <Link href="https://www.linkedin.com/in/syed-ali-safi-6601b8303" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-5 w-5" />
                      Connect on LinkedIn
                    </Link>
                  </Button>
                  <div className="pt-4 text-center">
                    <p className="text-sm text-muted-foreground">
                      Available for internships, full-time positions, and research collaborations
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">© {new Date().getFullYear()} Syed Ali Safi. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <Link
              href="https://github.com/alisafisyed"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/syed-ali-safi-6601b8303"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:alisafisyed@gmail.com" className="hover:text-slate-300 transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
