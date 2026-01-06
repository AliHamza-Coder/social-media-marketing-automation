import { UserDashboardLayout } from "@/components/user-dashboard-layout"
import { TrendingUp, Clock, CheckCircle2, Calendar, Instagram, Linkedin, Facebook } from "lucide-react"
import { Link } from "react-router-dom"

export default function UserDashboardPage() {
  const stats = [
    {
      title: "Published Posts",
      value: "847",
      change: "+12.5%",
      icon: CheckCircle2,
    },
    {
      title: "Scheduled",
      value: "24",
      change: "+4.2%",
      icon: Calendar,
    },
    {
      title: "Engagement Rate",
      value: "8.5%",
      change: "+2.1%",
      icon: TrendingUp,
    },
    {
      title: "This Month",
      value: "156",
      change: "+18.3%",
      icon: Clock,
    },
  ]

  const connectedAccounts = [
    { platform: "LinkedIn", connected: true, icon: Linkedin, color: "rgb(14, 118, 168)" },
    { platform: "Instagram", connected: true, icon: Instagram, color: "rgb(225, 48, 108)" },
    { platform: "Facebook", connected: false, icon: Facebook, color: "rgb(24, 119, 242)" },
  ]

  const recentPosts = [
    {
      id: 1,
      content: "Exciting news! Our new product launch is coming soon...",
      platform: "LinkedIn",
      status: "published",
      date: "2 hours ago",
      engagement: "234 likes, 45 comments",
    },
    {
      id: 2,
      content: "Behind the scenes of our creative process 🎨",
      platform: "Instagram",
      status: "published",
      date: "5 hours ago",
      engagement: "1.2K likes, 89 comments",
    },
    {
      id: 3,
      content: "Join us for our upcoming webinar on digital marketing...",
      platform: "LinkedIn",
      status: "scheduled",
      date: "Tomorrow at 3:00 PM",
      engagement: "-",
    },
  ]

  return (
    <UserDashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Dashboard</h1>
          <p className="text-gray-600 dark:text-slate-400">Manage your social media presence from one place</p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-2xl p-6 transition-all duration-200 hover:scale-105 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/30">
                  <stat.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">{stat.change}</span>
              </div>
              <div>
                <p className="text-gray-600 dark:text-slate-400 text-sm mb-1">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Connected Accounts Section */}
        <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Connected Accounts</h2>
            <Link
              to="/user/social-accounts"
              className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
            >
              Manage All
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {connectedAccounts.map((account) => (
              <div
                key={account.platform}
                className="rounded-xl p-4 flex items-center gap-4 bg-white/50 dark:bg-slate-900/30 border border-gray-200 dark:border-slate-800"
              >
                <div
                  className="h-12 w-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: account.color + "20" }}
                >
                  <account.icon className="h-6 w-6" style={{ color: account.color }} />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 dark:text-white">{account.platform}</p>
                  <p className="text-sm text-gray-600 dark:text-slate-400">
                    {account.connected ? "Connected" : "Not connected"}
                  </p>
                </div>
                <div
                  className={`h-3 w-3 rounded-full ${account.connected ? "bg-emerald-500 dark:bg-emerald-400" : "bg-gray-400 dark:bg-slate-600"}`}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <div
                key={post.id}
                className="rounded-xl p-4 hover:bg-white/70 dark:hover:bg-slate-900/50 transition-colors bg-white/50 dark:bg-slate-900/30 border border-gray-200 dark:border-slate-800"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <p className="text-gray-900 dark:text-white mb-2">{post.content}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-gray-600 dark:text-slate-400">{post.platform}</span>
                      <span
                        className={`px-2 py-1 rounded-md text-xs font-medium ${
                          post.status === "published"
                            ? "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400"
                            : "bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400"
                        }`}
                      >
                        {post.status}
                      </span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-slate-400">{post.date}</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-slate-500">{post.engagement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </UserDashboardLayout>
  )
}
