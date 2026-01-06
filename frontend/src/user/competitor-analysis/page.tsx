"use client"

import { UserDashboardLayout } from "@/components/user-dashboard-layout"
import { TrendingUp, Heart, MessageCircle, Eye, Plus } from "lucide-react"

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
            <h1 className="text-3xl font-bold mb-2 text-white">Competitor Analysis</h1>
            <p className="text-slate-400">Track and analyze competitor social media performance</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition-colors">
            <Plus className="h-5 w-5" />
            Add Competitor
          </button>
        </div>

        {/* Key Insights */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {insights.map((insight) => (
            <div
              key={insight.title}
              className="rounded-2xl p-6"
              style={{
                background: "rgba(99, 102, 241, 0.05)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(99, 102, 241, 0.1)",
              }}
            >
              <div
                className="h-12 w-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "rgba(99, 102, 241, 0.2)" }}
              >
                <insight.icon className="h-6 w-6 text-indigo-400" />
              </div>
              <p className="text-slate-400 text-sm mb-1">{insight.title}</p>
              <p className="text-xl font-bold text-white mb-2">{insight.value}</p>
              <p className="text-xs text-slate-500">{insight.description}</p>
            </div>
          ))}
        </div>

        {/* Competitors Overview */}
        <div
          className="rounded-2xl p-6"
          style={{
            background: "rgba(99, 102, 241, 0.05)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(99, 102, 241, 0.1)",
          }}
        >
          <h2 className="text-xl font-bold text-white mb-6">Tracked Competitors</h2>
          <div className="space-y-4">
            {competitors.map((comp) => (
              <div
                key={comp.id}
                className="rounded-xl p-6"
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{comp.name}</h3>
                    <p className="text-sm text-slate-400">{comp.industry}</p>
                  </div>
                  <span className="px-3 py-1 rounded-lg text-sm font-medium bg-emerald-500/20 text-emerald-400">
                    {comp.trend}
                  </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-slate-400 text-xs mb-1">Followers</p>
                    <p className="text-white font-semibold">{comp.followers}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs mb-1">Engagement</p>
                    <p className="text-white font-semibold">{comp.avgEngagement}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs mb-1">Posts/Week</p>
                    <p className="text-white font-semibold">{comp.postsPerWeek}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs mb-1">Top Platform</p>
                    <p className="text-white font-semibold">{comp.topPlatform}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performing Competitor Posts */}
        <div
          className="rounded-2xl p-6"
          style={{
            background: "rgba(99, 102, 241, 0.05)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(99, 102, 241, 0.1)",
          }}
        >
          <h2 className="text-xl font-bold text-white mb-6">Top Competitor Posts</h2>
          <div className="space-y-4">
            {competitorPosts.map((post) => (
              <div
                key={post.id}
                className="rounded-xl p-6"
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-indigo-400 font-semibold mb-1">{post.competitor}</p>
                    <p className="text-white mb-2">{post.content}</p>
                    <div className="flex items-center gap-4 text-sm text-slate-400">
                      <span>{post.platform}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-6 text-sm">
                  <div>
                    <span className="text-slate-400">Engagement: </span>
                    <span className="text-white font-semibold">{post.engagement}</span>
                  </div>
                  <div>
                    <span className="text-slate-400">Reach: </span>
                    <span className="text-white font-semibold">{post.reach}</span>
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
