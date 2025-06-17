"use client"

import Link from "next/link"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Github,
  Calendar,
  Smartphone,
  Globe,
  Database,
  Brain,
  ExternalLink,
} from "lucide-react"

interface Project {
  title: string
  description: string
  tags: string[]
  link: string
  linkType: "github" | "website"
  date: string
  type: string
  color: string // e.g., "from-purple-400 to-pink-500"
}

interface ProjectCardProps {
  project: Project
}

const getProjectIcon = (type: string, tags: string[]) => {
  if (type === "mobile") return <Smartphone className="h-8 w-8" />
  if (
    tags.some(
      (tag) =>
        tag.toLowerCase().includes("machine learning") ||
        tag.toLowerCase().includes("ai")
    )
  )
    return <Brain className="h-8 w-8" />
  if (
    tags.some(
      (tag) =>
        tag.toLowerCase().includes("sql") ||
        tag.toLowerCase().includes("database")
    )
  )
    return <Database className="h-8 w-8" />
  return <Globe className="h-8 w-8" />
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group rounded-lg overflow-hidden">
      {/* Gradient Top Section */}
      <div className={`relative h-32 bg-gradient-to-br ${project.color} rounded-t-lg`}>
        {/* Icon */}
        <div className="absolute top-4 left-4 text-white/90 z-10">
          {getProjectIcon(project.type, project.tags)}
        </div>

        {/* Date Badge */}
        <div className="absolute top-4 right-4 flex items-center gap-1 text-white/90 text-xs bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 z-10">
          <Calendar className="h-3 w-3" />
          <span>{project.date}</span>
        </div>
      </div>

      {/* Card Content */}
      <CardHeader className="pb-3">
        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
          {project.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-muted-foreground text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {project.tags.map((tag, index) => (
            <Badge
              key={tag}
              variant="secondary"
              className={`text-xs ${
                index < 3
                  ? "bg-blue-100 text-blue-800 hover:bg-blue-200"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Action Button */}
        <Button
          variant="outline"
          asChild
          className="w-full group-hover:bg-blue-50 group-hover:border-blue-200"
        >
          <Link href={project.link} target="_blank" rel="noopener noreferrer">
            {project.linkType === "github" ? (
              <>
                <Github className="mr-2 h-4 w-4" /> View Repository
              </>
            ) : (
              <>
                <ExternalLink className="mr-2 h-4 w-4" /> Visit Website
              </>
            )}
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
