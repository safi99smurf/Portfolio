import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Building, Calendar } from "lucide-react"

interface Experience {
  title: string
  company: string
  location: string
  duration: string
  description: string[]
}

interface ExperienceCardProps {
  experience: Experience
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader className="bg-gradient-to-r from-slate-50 to-gray-50">
        <CardTitle className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
          <span className="text-xl">{experience.title}</span>
          <div className="flex items-center gap-1 text-sm font-normal text-muted-foreground bg-white px-3 py-1 rounded-full">
            <Calendar className="h-3 w-3" />
            {experience.duration}
          </div>
        </CardTitle>
        <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Building className="h-4 w-4" />
            <span className="font-medium">{experience.company}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{experience.location}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <ul className="space-y-3">
          {experience.description.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
