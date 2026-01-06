import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Instagram, Linkedin, Facebook } from "lucide-react"

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
    <Card className="p-6 glass-strong">
      <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
      <div className="rounded-lg border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead>Platform</TableHead>
              <TableHead>Caption</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activities.map((activity, index) => {
              const PlatformIcon = platformIcons[activity.platform]
              return (
                <TableRow key={index}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <PlatformIcon className="h-4 w-4 text-primary" />
                      </div>
                      <span className="capitalize font-medium">{activity.platform}</span>
                    </div>
                  </TableCell>
                  <TableCell className="max-w-md truncate">{activity.caption}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        activity.status === "success"
                          ? "default"
                          : activity.status === "pending"
                            ? "secondary"
                            : "destructive"
                      }
                      className={activity.status === "success" ? "bg-success text-foreground" : ""}
                    >
                      {activity.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{activity.date}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </Card>
  )
}
