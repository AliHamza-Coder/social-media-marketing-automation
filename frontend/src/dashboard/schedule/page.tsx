"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {scheduledPosts.map((post) => {
            const PlatformIcon = platformIcons[post.platform]
            return (
              <Card key={post.id} className="p-6 glass-strong">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <PlatformIcon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold capitalize">{post.platform}</h3>
                        <Badge variant={post.status === "scheduled" ? "default" : "secondary"} className="mt-1">
                          {post.status}
                        </Badge>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <p className="font-medium leading-relaxed">{post.product}</p>
                    <p className="text-sm text-muted-foreground">Target: {post.country}</p>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2 border-t border-border">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.time}
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </DashboardLayout>
  )
}
