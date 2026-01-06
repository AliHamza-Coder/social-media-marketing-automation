"use client"

import type React from "react"
import { useState } from "react"
import {
  LayoutDashboard,
  PlusCircle,
  Calendar,
  Settings,
  LogOut,
  Sparkles,
  Menu,
  X,
  LinkIcon,
  Sun,
  Moon,
  BarChart3,
  FolderOpen,
  FileText,
  Hash,
  Users,
  Target,
  Lightbulb,
  Upload,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"

const navigation = [
  { name: "Dashboard", href: "/user", icon: LayoutDashboard },
  { name: "Create Post", href: "/user/create-post", icon: PlusCircle },
  { name: "Schedule", href: "/user/schedule", icon: Calendar },
  { name: "Analytics", href: "/user/analytics", icon: BarChart3 },
  { name: "Content Library", href: "/user/content-library", icon: FolderOpen },
  { name: "Templates", href: "/user/templates", icon: FileText },
  { name: "Hashtags", href: "/user/hashtags", icon: Hash },
  { name: "Team", href: "/user/team", icon: Users },
  { name: "Competitors", href: "/user/competitor-analysis", icon: Target },
  { name: "AI Suggestions", href: "/user/ai-suggestions", icon: Lightbulb },
  { name: "Bulk Upload", href: "/user/bulk-upload", icon: Upload },
  { name: "Social Accounts", href: "/user/social-accounts", icon: LinkIcon },
  { name: "Settings", href: "/user/settings", icon: Settings },
]

export function UserDashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? "block" : "hidden"}`}
        style={{ background: "rgba(0, 0, 0, 0.6)", backdropFilter: "blur(4px)" }}
        onClick={() => setSidebarOpen(false)}
      >
        <div
          className="fixed inset-y-0 left-0 w-72 bg-gray-50 dark:bg-slate-900 overflow-y-auto"
          style={{
            borderRight: "1px solid rgb(229, 231, 235)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="flex h-16 items-center justify-between px-6 sticky top-0 bg-gray-50 dark:bg-slate-900 z-10"
            style={{ borderBottom: "1px solid" }}
          >
            <div className="flex items-center gap-2">
              <div
                className="h-8 w-8 rounded-lg flex items-center justify-center"
                style={{ background: "rgb(99, 102, 241)" }}
              >
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-lg text-gray-900 dark:text-white">ExportAuto</span>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="h-10 w-10 rounded-lg flex items-center justify-center hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="h-5 w-5 text-gray-900 dark:text-white" />
            </button>
          </div>
          <nav className="p-4 space-y-2 pb-24">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    isActive
                      ? "bg-indigo-600 text-white"
                      : "text-gray-600 dark:text-slate-400 hover:bg-gray-200 dark:hover:bg-slate-800"
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              )
            })}
          </nav>
          <div className="sticky bottom-0 p-4 bg-gray-50 dark:bg-slate-900" style={{ borderTop: "1px solid" }}>
            <button
              onClick={() => (window.location.href = "/")}
              className="w-full flex items-center justify-start gap-3 px-4 py-3 rounded-xl text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors"
            >
              <LogOut className="h-5 w-5" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col bg-gray-50 dark:bg-slate-900 border-r border-gray-200 dark:border-slate-800">
        <div className="flex h-16 items-center gap-2 px-6 flex-shrink-0 border-b border-gray-200 dark:border-slate-800">
          <div
            className="h-8 w-8 rounded-lg flex items-center justify-center"
            style={{ background: "rgb(99, 102, 241)" }}
          >
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <span className="font-bold text-lg text-gray-900 dark:text-white">ExportAuto</span>
        </div>
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? "bg-indigo-600 text-white"
                    : "text-gray-600 dark:text-slate-400 hover:bg-gray-200 dark:hover:bg-slate-800"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.name}</span>
              </Link>
            )
          })}
        </nav>
        <div className="p-4 flex-shrink-0 border-t border-gray-200 dark:border-slate-800">
          <button
            onClick={() => (window.location.href = "/")}
            className="w-full flex items-center justify-start gap-3 px-4 py-3 rounded-xl text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors"
          >
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:pl-72">
        {/* Header */}
        <header
          className="sticky top-0 z-40 flex h-16 items-center gap-4 px-6 bg-white/80 dark:bg-slate-900/80 border-b border-gray-200 dark:border-slate-800"
          style={{
            backdropFilter: "blur(12px)",
          }}
        >
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden h-10 w-10 rounded-lg flex items-center justify-center hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors"
          >
            <Menu className="h-5 w-5 text-gray-900 dark:text-white" />
          </button>

          <div className="flex-1"></div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-10 w-10 rounded-lg flex items-center justify-center hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors relative"
            >
              <Sun className="h-5 w-5 text-gray-900 dark:text-white rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 text-gray-900 dark:text-white rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </button>

            <div className="flex items-center gap-2 pl-2">
              <div className="h-8 w-8 rounded-full" style={{ background: "rgb(99, 102, 241)" }}></div>
              <span className="hidden md:inline text-gray-900 dark:text-white font-medium">User</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6 lg:p-8">{children}</main>
      </div>
    </div>
  )
}
