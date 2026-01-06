

import { UserDashboardLayout } from "@/components/user-dashboard-layout"
import { TrendingUp, Heart, MessageCircle, Eye, Plus } from "lucide-react"
import { cn } from "@/lib/utils"


export default function CompetitorAnalysisPage() {
  const competitors = [
    {
      id: 1,
      name: "Brand A",
      industry: "Digital Marketing",
      followers: "145K",
      avgEngagement: "8.5%",
      postsPerWeek: 12,
      topPlatform: "LinkedIn",
      trend: "+12.4%",
    },
    {
      id: 2,
      name: "Brand B",
      industry: "Tech Solutions",
      followers: "98K",
      avgEngagement: "6.8%",
      postsPerWeek: 8,
      topPlatform: "Instagram",
      trend: "+8.2%",
    },
    {
      id: 3,
      name: "Brand C",
      industry: "E-commerce",
      followers: "234K",
      avgEngagement: "11.2%",
      postsPerWeek: 15,
      topPlatform: "Facebook",
      trend: "+15.7%",
    },
  ]

  const competitorPosts = [
    {
      id: 1,
      competitor: "Brand A",
      content: "Launching our new AI-powered analytics platform...",
      engagement: "2.4K",
      reach: "45K",
      platform: "LinkedIn",
      date: "2 days ago",
    },
    {
      id: 2,
      competitor: "Brand B",
      content: "Behind the scenes of our creative process",
      engagement: "3.8K",
      reach: "67K",
      platform: "Instagram",
      date: "3 days ago",
    },
    {
      id: 3,
      competitor: "Brand C",
      content: "Flash sale: 50% off everything!",
      engagement: "5.2K",
      reach: "89K",
      platform: "Facebook",
      date: "1 week ago",
    },
  ]

  const insights = [
    {
      title: "Best Posting Time",
      value: "10 AM - 12 PM",
      description: "Competitors see highest engagement during this window",
      icon: Eye,
    },
    {
      title: "Top Content Type",
      value: "Video Posts",
      description: "Videos generate 3x more engagement than images",
      icon: TrendingUp,
    },
    {
      title: "Avg. Post Length",
      value: "150-200 chars",
      description: "Shorter posts perform better across all platforms",
      icon: MessageCircle,
    },
    {
      title: "Hashtag Strategy",
      value: "5-8 hashtags",
      description: "Optimal number for maximum reach",
      icon: Heart,
    },
  ]

  return (
    <UserDashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white tracking-tight">Competitor Analysis</h1>
            <p className="text-gray-600 dark:text-slate-400">Track and analyze competitor social media performance</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 dark:shadow-none active:scale-[0.98]">
            <Plus className="h-5 w-5" />
            Add Competitor
          </button>
        </div>

        {/* Key Insights */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {insights.map((insight) => (
            <div
              key={insight.title}
              className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              <div className="h-12 w-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-6">
                <insight.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <p className="text-[10px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest mb-1">{insight.title}</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{insight.value}</p>
              <p className="text-xs font-medium text-gray-500 dark:text-slate-400 leading-relaxed">{insight.description}</p>
            </div>
          ))}
        </div>

        {/* Competitors Overview */}
        <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">Tracked Competitors</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {competitors.map((comp) => (
              <div
                key={comp.id}
                className="rounded-2xl p-6 bg-white/60 dark:bg-slate-950/40 backdrop-blur-sm border border-gray-100 dark:border-slate-800 transition-all hover:bg-white dark:hover:bg-slate-800 shadow-sm"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-indigo-600 transition-colors">{comp.name}</h3>
                    <p className="text-xs font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest">{comp.industry}</p>
                  </div>
                  <span className="px-3 py-1 rounded-xl text-[10px] font-bold uppercase tracking-widest bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                    {comp.trend}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest mb-1">Followers</p>
                    <p className="text-base font-bold text-gray-900 dark:text-white">{comp.followers}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest mb-1">Engagement</p>
                    <p className="text-base font-bold text-gray-900 dark:text-white">{comp.avgEngagement}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest mb-1">Posts/Week</p>
                    <p className="text-base font-bold text-gray-900 dark:text-white">{comp.postsPerWeek}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest mb-1">Top Platform</p>
                    <p className="text-base font-bold text-gray-900 dark:text-white">{comp.topPlatform}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performing Competitor Posts */}
        <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">Top Competitor Posts</h2>
          <div className="space-y-4">
            {competitorPosts.map((post) => (
              <div
                key={post.id}
                className="rounded-2xl p-6 bg-white/60 dark:bg-slate-950/40 backdrop-blur-sm border border-gray-100 dark:border-slate-800 transition-all hover:scale-[1.01] shadow-sm"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-2">{post.competitor}</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-relaxed">{post.content}</p>
                    <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest">
                      <span>{post.platform}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="flex gap-8 flex-shrink-0">
                    <div className="flex flex-col items-center p-3 rounded-xl bg-gray-50 dark:bg-slate-900/50 border border-gray-100 dark:border-slate-800 min-w-[100px]">
                      <span className="text-[10px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest mb-1">Engagement</span>
                      <span className="text-lg font-bold text-gray-900 dark:text-white tabular-nums">{post.engagement}</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-xl bg-gray-50 dark:bg-slate-900/50 border border-gray-100 dark:border-slate-800 min-w-[100px]">
                      <span className="text-[10px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest mb-1">Reach</span>
                      <span className="text-lg font-bold text-gray-900 dark:text-white tabular-nums">{post.reach}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </UserDashboardLayout>
  )
}
