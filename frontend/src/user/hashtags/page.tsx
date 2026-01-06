"use client"

import { UserDashboardLayout } from "@/components/user-dashboard-layout"
import { useState } from "react"
import { Hash, Plus, TrendingUp, Copy, Check, Sparkles } from "lucide-react"

export default function HashtagsPage() {
  const [copied, setCopied] = useState<number | null>(null)

  const hashtagGroups = [
    {
      id: 1,
      name: "Digital Marketing",
      hashtags: ["#DigitalMarketing", "#SocialMedia", "#ContentMarketing", "#MarketingStrategy", "#OnlineMarketing"],
      usage: 245,
      performance: "+12.5%",
    },
    {
      id: 2,
      name: "Tech & Innovation",
      hashtags: ["#Technology", "#Innovation", "#AI", "#MachineLearning", "#TechTrends"],
      usage: 189,
      performance: "+8.3%",
    },
    {
      id: 3,
      name: "Business Growth",
      hashtags: ["#Business", "#Entrepreneur", "#Startup", "#BusinessGrowth", "#Success"],
      usage: 156,
      performance: "+15.7%",
    },
  ]

  const trendingHashtags = [
    { tag: "#AIRevolution", posts: "2.4M", trend: "+45%" },
    { tag: "#SustainableBusiness", posts: "1.8M", trend: "+32%" },
    { tag: "#RemoteWork", posts: "3.1M", trend: "+18%" },
    { tag: "#FutureOfWork", posts: "1.2M", trend: "+28%" },
  ]

  const copyHashtags = (hashtags: string[], groupId: number) => {
    navigator.clipboard.writeText(hashtags.join(" "))
    setCopied(groupId)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <UserDashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-white">Hashtag Manager</h1>
            <p className="text-slate-400">Organize and optimize your hashtags for better reach</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition-colors">
            <Plus className="h-5 w-5" />
            New Group
          </button>
        </div>

        {/* AI Hashtag Suggestions */}
        <div
          className="rounded-2xl p-6"
          style={{
            background: "rgba(99, 102, 241, 0.05)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(99, 102, 241, 0.1)",
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="h-6 w-6 text-indigo-400" />
            <h2 className="text-xl font-bold text-white">AI Hashtag Generator</h2>
          </div>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Describe your post content..."
              className="flex-1 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            />
            <button className="px-6 py-3 rounded-xl bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition-colors">
              Generate
            </button>
          </div>
        </div>

        {/* Trending Hashtags */}
        <div
          className="rounded-2xl p-6"
          style={{
            background: "rgba(99, 102, 241, 0.05)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(99, 102, 241, 0.1)",
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="h-6 w-6 text-emerald-400" />
            <h2 className="text-xl font-bold text-white">Trending Now</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {trendingHashtags.map((item) => (
              <div
                key={item.tag}
                className="rounded-xl p-4"
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                }}
              >
                <p className="text-indigo-400 font-semibold mb-2">{item.tag}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">{item.posts} posts</span>
                  <span className="text-emerald-400 font-medium">{item.trend}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Saved Hashtag Groups */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white">Saved Groups</h2>
          {hashtagGroups.map((group) => (
            <div
              key={group.id}
              className="rounded-2xl p-6"
              style={{
                background: "rgba(99, 102, 241, 0.05)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(99, 102, 241, 0.1)",
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="h-12 w-12 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(99, 102, 241, 0.2)" }}
                  >
                    <Hash className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{group.name}</h3>
                    <p className="text-sm text-slate-400">
                      Used {group.usage} times • {group.performance} performance
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => copyHashtags(group.hashtags, group.id)}
                  className="px-4 py-2 rounded-lg bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition-colors flex items-center gap-2"
                >
                  {copied === group.id ? (
                    <>
                      <Check className="h-4 w-4" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      Copy All
                    </>
                  )}
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.hashtags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg text-sm font-medium text-indigo-400"
                    style={{
                      background: "rgba(99, 102, 241, 0.1)",
                      border: "1px solid rgba(99, 102, 241, 0.2)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </UserDashboardLayout>
  )
}
