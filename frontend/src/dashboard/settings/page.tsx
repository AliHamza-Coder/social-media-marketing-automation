

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

        <div className="space-y-6">
          <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Admin Profile</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="admin-name" className="font-bold text-gray-900 dark:text-gray-100">Name</Label>
                <Input 
                  id="admin-name" 
                  defaultValue="Admin User" 
                  className="h-11 bg-white/50 dark:bg-slate-900/30 border-gray-200 dark:border-slate-800 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="admin-email" className="font-bold text-gray-900 dark:text-gray-100">Email</Label>
                <Input 
                  id="admin-email" 
                  type="email" 
                  defaultValue="admin@exportauto.com" 
                  className="h-11 bg-white/50 dark:bg-slate-900/30 border-gray-200 dark:border-slate-800 rounded-xl"
                />
              </div>

              <Button className="h-11 px-6 font-bold rounded-xl shadow-lg shadow-indigo-100 dark:shadow-none transition-all active:scale-[0.98]">
                Save Changes
              </Button>
            </div>
          </div>

          <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Change Password</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="current-password" className="font-bold text-gray-900 dark:text-gray-100">Current Password</Label>
                <Input 
                  id="current-password" 
                  type="password" 
                  className="h-11 bg-white/50 dark:bg-slate-900/30 border-gray-200 dark:border-slate-800 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="new-password" className="font-bold text-gray-900 dark:text-gray-100">New Password</Label>
                <Input 
                  id="new-password" 
                  type="password" 
                  className="h-11 bg-white/50 dark:bg-slate-900/30 border-gray-200 dark:border-slate-800 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirm-password" className="font-bold text-gray-900 dark:text-gray-100">Confirm New Password</Label>
                <Input 
                  id="confirm-password" 
                  type="password" 
                  className="h-11 bg-white/50 dark:bg-slate-900/30 border-gray-200 dark:border-slate-800 rounded-xl"
                />
              </div>

              <Button className="h-11 px-6 font-bold rounded-xl shadow-lg shadow-indigo-100 dark:shadow-none transition-all active:scale-[0.98]">
                Update Password
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
