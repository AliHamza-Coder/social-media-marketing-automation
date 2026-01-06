"use client"

import { UserDashboardLayout } from "@/components/user-dashboard-layout"
import { User, Lock, Bell, Palette } from "lucide-react"

export default function UserSettingsPage() {
  return (
    <UserDashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Settings</h1>
          <p className="text-gray-600 dark:text-slate-400">Manage your account preferences</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Profile Settings */}
          <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center">
                <User className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Profile</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">Full Name</label>
                <input
                  type="text"
                  defaultValue="John Doe"
                  className="w-full px-4 py-3 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  defaultValue="john@example.com"
                  className="w-full px-4 py-3 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800"
                />
              </div>
              <button className="w-full px-4 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors">
                Save Changes
              </button>
            </div>
          </div>

          {/* Security Settings */}
          <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center">
                <Lock className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Security</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                  Current Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">New Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-3 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800"
                />
              </div>
              <button className="w-full px-4 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors">
                Update Password
              </button>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center">
                <Bell className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Notifications</h2>
            </div>
            <div className="space-y-4">
              {["Email notifications", "Push notifications", "Post reminders", "Weekly reports"].map((item) => (
                <div key={item} className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-slate-300">{item}</span>
                  <button className="relative w-12 h-6 rounded-full bg-indigo-600 transition-colors">
                    <span className="absolute right-1 top-1 h-4 w-4 rounded-full bg-white transition-transform"></span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Appearance Settings */}
          <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center">
                <Palette className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Appearance</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-3">Theme</label>
                <p className="text-sm text-gray-600 dark:text-slate-400 mb-3">
                  Use the theme toggle in the header to switch between light and dark modes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserDashboardLayout>
  )
}
