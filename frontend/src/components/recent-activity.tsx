import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Instagram, Linkedin, Facebook } from "lucide-react"
import { cn } from "@/lib/utils"


type Activity = {
  platform: "linkedin" | "instagram" | "facebook"
  caption: string
  status: "success" | "pending" | "failed"
  date: string
}

export function RecentActivity() {
  const activities: Activity[] = [
    {
      platform: "linkedin",
      caption: "Introducing Premium Cotton Textiles to US markets...",
      status: "success",
      date: "2 hours ago",
    },
    {
      platform: "instagram",
      caption: "Showcasing our Organic Spices Collection...",
      status: "success",
      date: "5 hours ago",
    },
    {
      platform: "facebook",
      caption: "Handcrafted Ceramics now available in Europe...",
      status: "pending",
      date: "1 day ago",
    },
    {
      platform: "linkedin",
      caption: "Tech Hardware Components expanding to Asian markets...",
      status: "success",
      date: "2 days ago",
    },
  ]

  const platformIcons = {
    linkedin: Linkedin,
    instagram: Instagram,
    facebook: Facebook,
  }

  return (
    <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Recent Activity</h2>
      <div className="rounded-xl border border-gray-200 dark:border-slate-800 overflow-hidden bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50/50 dark:bg-slate-800/50 border-gray-200 dark:border-slate-800">
              <TableHead className="font-bold text-gray-900 dark:text-gray-100">Platform</TableHead>
              <TableHead className="font-bold text-gray-900 dark:text-gray-100">Caption</TableHead>
              <TableHead className="font-bold text-gray-900 dark:text-gray-100">Status</TableHead>
              <TableHead className="font-bold text-gray-900 dark:text-gray-100">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activities.map((activity, index) => {
              const PlatformIcon = platformIcons[activity.platform]
              return (
                <TableRow key={index} className="hover:bg-white/50 dark:hover:bg-slate-800/30 border-gray-100 dark:border-slate-800">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                        <PlatformIcon className="h-4.5 w-4.5 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <span className="capitalize font-semibold text-gray-900 dark:text-white">{activity.platform}</span>
                    </div>
                  </TableCell>
                  <TableCell className="max-w-md truncate text-gray-600 dark:text-slate-400 font-medium">{activity.caption}</TableCell>
                  <TableCell>
                    <Badge
                      className={cn(
                        "font-bold px-3 py-1 rounded-full",
                        activity.status === "success"
                          ? "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400"
                          : activity.status === "pending"
                            ? "bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400"
                            : "bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-400"
                      )}
                    >
                      {activity.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-500 dark:text-slate-500 font-medium">{activity.date}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
