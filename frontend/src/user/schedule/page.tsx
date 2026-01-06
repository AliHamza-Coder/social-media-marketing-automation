

import { UserDashboardLayout } from "@/components/user-dashboard-layout"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Clock, Instagram, Linkedin, Facebook } from "lucide-react"

export default function UserSchedulePage() {
  const [currentDate, setCurrentDate] = useState(new Date())

  const scheduledPosts = [
    {
      id: 1,
      date: "2024-01-15",
      time: "10:00 AM",
      platform: "LinkedIn",
      content: "Exciting product launch announcement...",
      color: "rgb(14, 118, 168)",
      icon: Linkedin,
    },
    {
      id: 2,
      date: "2024-01-15",
      time: "2:00 PM",
      platform: "Instagram",
      content: "Behind the scenes content 🎨",
      color: "rgb(225, 48, 108)",
      icon: Instagram,
    },
    {
      id: 3,
      date: "2024-01-16",
      time: "9:00 AM",
      platform: "Facebook",
      content: "Weekly tips and tricks...",
      color: "rgb(24, 119, 242)",
      icon: Facebook,
    },
  ]

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    return { firstDay, daysInMonth }
  }

  const { firstDay, daysInMonth } = getDaysInMonth(currentDate)

  const navigateMonth = (direction: number) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1))
  }

  return (
    <UserDashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Schedule</h1>
          <p className="text-gray-600 dark:text-slate-400">View and manage your scheduled posts</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                  {currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                </h2>
                <div className="flex gap-3">
                  <button
                    onClick={() => navigateMonth(-1)}
                    className="h-11 w-11 rounded-xl flex items-center justify-center hover:bg-white dark:hover:bg-slate-800 transition-all bg-white/50 dark:bg-slate-900/40 border border-gray-200 dark:border-slate-800 shadow-sm active:scale-95"
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-900 dark:text-white" />
                  </button>
                  <button
                    onClick={() => navigateMonth(1)}
                    className="h-11 w-11 rounded-xl flex items-center justify-center hover:bg-white dark:hover:bg-slate-800 transition-all bg-white/50 dark:bg-slate-900/40 border border-gray-200 dark:border-slate-800 shadow-sm active:scale-95"
                  >
                    <ChevronRight className="h-5 w-5 text-gray-900 dark:text-white" />
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-3">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day} className="text-center text-[10px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest pb-4">
                    {day}
                  </div>
                ))}

                {Array.from({ length: firstDay }).map((_, i) => (
                  <div key={`empty-${i}`} className="aspect-square opacity-20"></div>
                ))}

                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1
                  const isToday = day === new Date().getDate() && currentDate.getMonth() === new Date().getMonth()
                  return (
                    <div
                      key={day}
                      className={`aspect-square rounded-2xl p-2 text-center cursor-pointer transition-all duration-300 relative group ${
                        isToday
                          ? "bg-indigo-600 shadow-lg shadow-indigo-200 dark:shadow-none translate-y-[-2px]"
                          : "bg-white/60 dark:bg-slate-950/40 hover:bg-white dark:hover:bg-slate-800 border border-gray-100 dark:border-slate-800"
                      }`}
                    >
                      <div className={`font-bold text-sm ${isToday ? "text-white" : "text-gray-900 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400"}`}>{day}</div>
                      {day === 15 || day === 16 ? (
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                          <div className={`h-1.5 w-1.5 rounded-full ${isToday ? "bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" : "bg-indigo-500 dark:bg-indigo-400 shadow-sm"}`}></div>
                        </div>
                      ) : null}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Upcoming Posts */}
          <div className="space-y-6">
            <div className="rounded-2xl p-6 sticky top-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Upcoming</h3>
              <div className="space-y-4">
                {scheduledPosts.map((post) => (
                  <div
                    key={post.id}
                    className="group rounded-2xl p-4 bg-white/60 dark:bg-slate-950/40 backdrop-blur-sm border border-gray-100 dark:border-slate-800 transition-all hover:scale-[1.02] hover:bg-white dark:hover:bg-slate-800 shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="h-12 w-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm border border-white/50 dark:border-white/10"
                        style={{ backgroundColor: post.color + "20" }}
                      >
                        <post.icon className="h-6 w-6" style={{ color: post.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-xs font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest">{post.platform}</p>
                        </div>
                        <p className="text-sm font-bold text-gray-900 dark:text-white truncate mb-2 leading-relaxed">{post.content}</p>
                        <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-indigo-50/50 dark:bg-indigo-950/20 w-fit">
                          <Clock className="h-3 w-3 text-indigo-600 dark:text-indigo-400" />
                          <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400">{post.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserDashboardLayout>
  )
}
