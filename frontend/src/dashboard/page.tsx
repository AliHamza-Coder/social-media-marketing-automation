"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { StatsCard } from "@/components/stats-card"
import { RecentActivity } from "@/components/recent-activity"
import { TrendingUp, Clock, CheckCircle2, Users } from "lucide-react"

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Posts",
      value: "2,847",
      change: "+12.5%",
      icon: CheckCircle2,
      trend: "up" as const,
    },
    {
      title: "Pending",
      value: "24",
      change: "+4.2%",
      icon: Clock,
      trend: "up" as const,
    },
    {
      title: "Account Health",
      value: "98.5%",
      change: "+2.1%",
      icon: TrendingUp,
      trend: "up" as const,
    },
    {
      title: "Total Users",
      value: "156",
      change: "+8.3%",
      icon: Users,
      trend: "up" as const,
    },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's an overview of your export branding campaigns.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatsCard key={stat.title} {...stat} />
          ))}
        </div>

        <RecentActivity />
      </div>
    </DashboardLayout>
  )
}
