

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import { Calendar, Clock, Trash2, Instagram, Linkedin, Facebook } from "lucide-react"

type ScheduledPost = {
  id: string
  platform: "linkedin" | "instagram" | "facebook"
  product: string
  country: string
  date: string
  time: string
  status: "scheduled" | "pending"
}

export default function SchedulePage() {
  const scheduledPosts: ScheduledPost[] = [
    {
      id: "1",
      platform: "linkedin",
      product: "Premium Cotton Textiles",
      country: "United States",
      date: "Jan 15, 2026",
      time: "10:00 AM",
      status: "scheduled",
    },
    {
      id: "2",
      platform: "instagram",
      product: "Organic Spices Collection",
      country: "United Kingdom",
      date: "Jan 16, 2026",
      time: "2:30 PM",
      status: "scheduled",
    },
    {
      id: "3",
      platform: "facebook",
      product: "Handcrafted Ceramics",
      country: "Germany",
      date: "Jan 17, 2026",
      time: "9:00 AM",
      status: "pending",
    },
    {
      id: "4",
      platform: "linkedin",
      product: "Tech Hardware Components",
      country: "Japan",
      date: "Jan 18, 2026",
      time: "11:30 AM",
      status: "scheduled",
    },
  ]

  const platformIcons = {
    linkedin: Linkedin,
    instagram: Instagram,
    facebook: Facebook,
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Schedule</h1>
          <p className="text-muted-foreground">View and manage your scheduled social media posts.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {scheduledPosts.map((post) => {
            const PlatformIcon = platformIcons[post.platform]
            return (
              <div key={post.id} className="group rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-xl bg-white/80 dark:bg-indigo-900/30 flex items-center justify-center shadow-sm border border-indigo-100/50 dark:border-indigo-800/30">
                        <PlatformIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div>
                        <h3 className="font-bold capitalize text-gray-900 dark:text-white">{post.platform}</h3>
                        <Badge 
                          className={cn(
                            "mt-1 font-bold px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider",
                            post.status === "scheduled" 
                              ? "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400" 
                              : "bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400"
                          )}
                        >
                          {post.status}
                        </Badge>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="text-red-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <p className="font-bold text-gray-900 dark:text-white leading-relaxed line-clamp-2">{post.product}</p>
                    <p className="text-sm font-medium text-gray-500 dark:text-slate-400">Target: {post.country}</p>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-bold text-gray-400 dark:text-slate-500 pt-4 border-t border-indigo-100/50 dark:border-indigo-900/30">
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-indigo-50/50 dark:bg-indigo-950/20">
                      <Calendar className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-indigo-50/50 dark:bg-indigo-950/20">
                      <Clock className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
                      {post.time}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </DashboardLayout>
  )
}
