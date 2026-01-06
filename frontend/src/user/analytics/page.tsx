

import { UserDashboardLayout } from "@/components/user-dashboard-layout"
import { TrendingUp, TrendingDown, Users, Heart, MessageCircle, Share2 } from "lucide-react"
import { cn } from "@/lib/utils"


export default function AnalyticsPage() {
  const metrics = [
    { title: "Total Reach", value: "124.5K", change: "+15.3%", trend: "up", icon: Users },
    { title: "Engagement Rate", value: "8.7%", change: "+2.4%", trend: "up", icon: Heart },
    { title: "Comments", value: "3.2K", change: "-1.2%", trend: "down", icon: MessageCircle },
    { title: "Shares", value: "1.8K", change: "+8.9%", trend: "up", icon: Share2 },
  ]

  const platformStats = [
    { platform: "LinkedIn", followers: "12.5K", engagement: "9.2%", posts: 145, color: "rgb(14, 118, 168)" },
    { platform: "Instagram", followers: "24.8K", engagement: "11.5%", posts: 238, color: "rgb(225, 48, 108)" },
    { platform: "Facebook", followers: "8.3K", engagement: "6.8%", posts: 89, color: "rgb(24, 119, 242)" },
  ]

  const topPosts = [
    { id: 1, content: "Our biggest product launch yet...", reach: "45.2K", engagement: "12.4%", platform: "LinkedIn" },
    { id: 2, content: "Behind the scenes at our office", reach: "38.7K", engagement: "15.8%", platform: "Instagram" },
    { id: 3, content: "5 tips for better productivity", reach: "32.1K", engagement: "10.2%", platform: "LinkedIn" },
  ]

  return (
    <UserDashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Analytics</h1>
          <p className="text-gray-600 dark:text-slate-400">
            Track your social media performance and engagement metrics
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.title}
              className="group rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-white/80 dark:bg-indigo-900/30 shadow-sm border border-indigo-100/50 dark:border-indigo-800/30">
                  <metric.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className={cn(
                  "flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold",
                  metric.trend === "up" 
                    ? "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400" 
                    : "bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400"
                )}>
                  {metric.trend === "up" ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  <span>{metric.change}</span>
                </div>
              </div>
              <p className="text-gray-500 dark:text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">{metric.title}</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white uppercase tracking-tight">{metric.value}</p>
            </div>
          ))}
        </div>

        {/* Platform Performance */}
        <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Platform Performance</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {platformStats.map((stat) => (
              <div
                key={stat.platform}
                className="rounded-2xl p-6 bg-white/50 dark:bg-slate-900/40 backdrop-blur-sm border border-gray-200 dark:border-slate-800 transition-all hover:border-indigo-300 dark:hover:border-indigo-700"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-4 w-4 rounded-full shadow-sm ring-4 ring-offset-2 ring-offset-white dark:ring-offset-slate-950" style={{ backgroundColor: stat.color, filter: 'brightness(1.1)' }}></div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{stat.platform}</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest mb-1">Followers</p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">{stat.followers}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100 dark:border-slate-800">
                    <div>
                      <p className="text-xs font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest mb-1">Engagement</p>
                      <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400">{stat.engagement}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest mb-1">Posts</p>
                      <p className="text-lg font-bold text-gray-900 dark:text-white">{stat.posts}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performing Posts */}
        <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Top Performing Posts</h2>
          <div className="space-y-4">
            {topPosts.map((post, index) => (
              <div
                key={post.id}
                className="group rounded-2xl p-6 bg-white/50 dark:bg-slate-900/40 border border-gray-200 dark:border-slate-800 transition-all hover:bg-white dark:hover:bg-slate-800/60"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-2xl flex items-center justify-center text-xl font-bold text-white bg-gradient-to-tr from-indigo-600 to-purple-600 shadow-lg shadow-indigo-200 dark:shadow-none">
                    #{index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 dark:text-white font-bold text-lg mb-3 leading-tight">{post.content}</p>
                    <div className="flex flex-wrap items-center gap-6">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest">Reach</span>
                        <span className="text-gray-900 dark:text-white font-bold">{post.reach}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest">Engagement</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">{post.engagement}</span>
                      </div>
                      <div className="flex flex-col ml-auto">
                        <span className="text-[10px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest">Platform</span>
                        <span className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold">{post.platform}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Growth Chart Placeholder */}
        <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Follower Growth</h2>
          <div className="h-80 rounded-2xl flex items-center justify-center bg-white/60 dark:bg-slate-950/40 backdrop-blur-sm border border-gray-200 dark:border-slate-800 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="text-center relative z-10">
              <div className="h-16 w-16 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <TrendingUp className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <p className="text-xl font-bold text-gray-900 dark:text-white mb-2">Detailed Growth Analysis</p>
              <p className="text-sm font-medium text-gray-500 dark:text-slate-400">
                Visualizing your audience expansion over the last 6 months
              </p>
            </div>
          </div>
        </div>
      </div>
    </UserDashboardLayout>
  )
}
