"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-2xl">
        <div>
          <h1 className="text-3xl font-bold mb-2">Settings</h1>
          <p className="text-muted-foreground">Manage your account settings and preferences.</p>
        </div>

        <Card className="p-6 glass-strong">
          <h2 className="text-xl font-semibold mb-6">Admin Profile</h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="admin-name">Name</Label>
              <Input id="admin-name" defaultValue="Admin User" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="admin-email">Email</Label>
              <Input id="admin-email" type="email" defaultValue="admin@exportauto.com" />
            </div>

            <Button>Save Changes</Button>
          </div>
        </Card>

        <Card className="p-6 glass-strong">
          <h2 className="text-xl font-semibold mb-6">Change Password</h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input id="current-password" type="password" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input id="new-password" type="password" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input id="confirm-password" type="password" />
            </div>

            <Button>Update Password</Button>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  )
}
