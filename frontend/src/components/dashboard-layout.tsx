import type React from "react"
import { useState } from "react"
import {
  LayoutDashboard,
  PlusCircle,
  Calendar,
  Users,
  Settings,
  LogOut,
  Sparkles,
  Menu,
  X,
  Sun,
  Moon,
} from "lucide-react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useTheme } from "@/components/theme-provider"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Create Post", href: "/dashboard/create-post", icon: PlusCircle },
  { name: "Schedule", href: "/dashboard/schedule", icon: Calendar },
  { name: "Users", href: "/dashboard/users", icon: Users },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
]

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const navigate = useNavigate()
  const pathname = location.pathname
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-200">

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? "block" : "hidden"}`}
        style={{ background: "rgba(0, 0, 0, 0.6)", backdropFilter: "blur(4px)" }}
        onClick={() => setSidebarOpen(false)}
      >
        <div
          className="fixed inset-y-0 left-0 w-72 bg-gray-50 dark:bg-slate-900 border-r border-gray-200 dark:border-slate-800"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex h-16 items-center justify-between px-6 border-b border-gray-200 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center">
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
          <nav className="p-4 space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
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
          <div className="absolute bottom-4 left-4 right-4">
            <button
              onClick={() => navigate("/")}
              className="w-full flex items-center justify-start gap-3 px-4 py-3 rounded-xl text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors"
            >
              <LogOut className="h-5 w-5" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col border-r border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-slate-900">
        <div className="flex h-16 items-center gap-2 px-6 border-b border-gray-200 dark:border-slate-800">
          <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <span className="font-bold text-lg text-gray-900 dark:text-white">ExportAuto</span>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
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
        <div className="p-4">
          <button
            onClick={() => navigate("/")}
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
          className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b border-gray-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 px-6"
          style={{ backdropFilter: "blur(12px)" }}
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
              <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-sm font-semibold">
                AD
              </div>
              <span className="hidden md:inline text-gray-900 dark:text-white font-medium">Admin</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6 lg:p-8">{children}</main>
      </div>
    </div>
  )
}
