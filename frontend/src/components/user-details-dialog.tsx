"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Mail, Briefcase, Activity, FileText } from "lucide-react"

type User = {
  id: string
  name: string
  email: string
  role: string
  status: "active" | "inactive"
  postsCreated: number
  lastActive: string
}

type UserDetailsDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  user: User | null
}

export function UserDetailsDialog({ open, onOpenChange, user }: UserDetailsDialogProps) {
  if (!user) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>User Details</DialogTitle>
          <DialogDescription>Complete information about {user.name}</DialogDescription>
        </DialogHeader>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">{user.name.charAt(0)}</span>
            </div>
            <div>
              <h3 className="font-semibold text-lg">{user.name}</h3>
              <Badge
                variant={user.status === "active" ? "default" : "secondary"}
                className={user.status === "active" ? "bg-success text-foreground" : ""}
              >
                {user.status}
              </Badge>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-sm font-medium">Email Address</p>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Briefcase className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-sm font-medium">Role</p>
                <p className="text-sm text-muted-foreground">{user.role}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FileText className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-sm font-medium">Posts Created</p>
                <p className="text-sm text-muted-foreground">{user.postsCreated} posts</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Activity className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-sm font-medium">Last Active</p>
                <p className="text-sm text-muted-foreground">{user.lastActive}</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
