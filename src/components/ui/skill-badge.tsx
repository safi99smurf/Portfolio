import { Badge } from "@/components/ui/badge"

interface SkillBadgeProps {
  name: string
  variant?: "orange" | "blue" | "green" | "purple"
}

export default function SkillBadge({ name, variant = "blue" }: SkillBadgeProps) {
  const variantClasses = {
    orange: "bg-orange-100 text-orange-800 hover:bg-orange-200",
    blue: "bg-blue-100 text-blue-800 hover:bg-blue-200",
    green: "bg-green-100 text-green-800 hover:bg-green-200",
    purple: "bg-purple-100 text-purple-800 hover:bg-purple-200",
  }

  return (
    <Badge className={`text-xs py-1 px-2 transition-colors ${variantClasses[variant]}`} variant="secondary">
      {name}
    </Badge>
  )
}
