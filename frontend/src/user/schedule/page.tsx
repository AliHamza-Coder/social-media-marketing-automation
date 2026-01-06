"use client"

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
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  {currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                </h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => navigateMonth(-1)}
                    className="h-10 w-10 rounded-lg flex items-center justify-center hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors bg-white/50 dark:bg-slate-900/30 border border-gray-200 dark:border-slate-800"
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-900 dark:text-white" />
                  </button>
                  <button
                    onClick={() => navigateMonth(1)}
                    className="h-10 w-10 rounded-lg flex items-center justify-center hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors bg-white/50 dark:bg-slate-900/30 border border-gray-200 dark:border-slate-800"
                  >
                    <ChevronRight className="h-5 w-5 text-gray-900 dark:text-white" />
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-gray-600 dark:text-slate-400 py-2">
                    {day}
                  </div>
                ))}

                {Array.from({ length: firstDay }).map((_, i) => (
                  <div key={`empty-${i}`} className="aspect-square"></div>
                ))}

                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1
                  const isToday = day === new Date().getDate() && currentDate.getMonth() === new Date().getMonth()
                  return (
                    <div
                      key={day}
                      className={`aspect-square rounded-lg p-2 text-center cursor-pointer transition-all hover:bg-gray-200 dark:hover:bg-slate-800 ${
                        isToday
                          ? "bg-indigo-600 text-white"
                          : "bg-white/70 dark:bg-slate-900/50 text-gray-900 dark:text-slate-300 border border-gray-200 dark:border-slate-800"
                      }`}
                    >
                      <div className="font-medium">{day}</div>
                      {day === 15 || day === 16 ? (
                        <div className="flex justify-center mt-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400"></div>
                        </div>
                      ) : null}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Upcoming Posts */}
          <div>
            <div className="rounded-2xl p-6 sticky top-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Upcoming Posts</h3>
              <div className="space-y-4">
                {scheduledPosts.map((post) => (
                  <div
                    key={post.id}
                    className="rounded-xl p-4 bg-white/50 dark:bg-slate-900/30 border border-gray-200 dark:border-slate-800"
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="h-10 w-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: post.color + "20" }}
                      >
                        <post.icon className="h-5 w-5" style={{ color: post.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">{post.platform}</p>
                        <p className="text-sm text-gray-600 dark:text-slate-400 truncate mb-2">{post.content}</p>
                        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-slate-500">
                          <Clock className="h-3 w-3" />
                          <span>{post.time}</span>
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
