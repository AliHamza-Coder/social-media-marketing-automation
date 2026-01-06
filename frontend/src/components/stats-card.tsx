import { Card } from "@/components/ui/card"
import { type LucideIcon, TrendingUp, TrendingDown } from "lucide-react"
import { cn } from "@/lib/utils"

type StatsCardProps = {
  title: string
  value: string
  change: string
  icon: LucideIcon
  trend: "up" | "down"
}

export function StatsCard({ title, value, change, icon: Icon, trend }: StatsCardProps) {
  return (
    <Card className="p-6 glass-strong">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold">{value}</p>
        </div>
        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
      <div className="mt-4 flex items-center gap-1">
        {trend === "up" ? (
          <TrendingUp className="h-4 w-4 text-success" />
        ) : (
          <TrendingDown className="h-4 w-4 text-destructive" />
        )}
        <span className={cn("text-sm font-medium", trend === "up" ? "text-success" : "text-destructive")}>
          {change}
        </span>
        <span className="text-sm text-muted-foreground">from last month</span>
      </div>
    </Card>
  )
}
