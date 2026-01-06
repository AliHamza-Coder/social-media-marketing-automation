

import { UserDashboardLayout } from "@/components/user-dashboard-layout"
import { useState } from "react"
import { Hash, Plus, TrendingUp, Copy, Check, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"


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
            <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white tracking-tight">Hashtag Manager</h1>
            <p className="text-gray-600 dark:text-slate-400">Organize and optimize your hashtags for better reach</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 dark:shadow-none active:scale-[0.98]">
            <Plus className="h-5 w-5" />
            New Group
          </button>
        </div>

        {/* AI Hashtag Suggestions */}
        <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-all duration-500 transform translate-x-4 -translate-y-4">
             <Sparkles className="h-24 w-24 text-indigo-400" />
          </div>
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="h-10 w-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">AI Hashtag Generator</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-4 relative z-10">
            <input
              type="text"
              placeholder="Describe your post content..."
              className="flex-1 rounded-xl px-4 py-3.5 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white/80 dark:bg-slate-950/50 backdrop-blur-sm border border-gray-200 dark:border-slate-800 transition-all font-medium"
            />
            <button className="px-8 py-3.5 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 dark:shadow-none active:scale-[0.98]">
              Generate
            </button>
          </div>
        </div>

        {/* Trending Hashtags */}
        <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Trending Now</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {trendingHashtags.map((item) => (
              <div
                key={item.tag}
                className="rounded-2xl p-4 bg-white/60 dark:bg-slate-950/40 backdrop-blur-sm border border-gray-100 dark:border-slate-800 transition-all hover:scale-[1.02] hover:bg-white dark:hover:bg-slate-800 shadow-sm"
              >
                <p className="text-indigo-600 dark:text-indigo-400 font-bold mb-3">{item.tag}</p>
                <div className="flex items-center justify-between text-[10px] font-bold tracking-widest uppercase">
                  <span className="text-gray-400 dark:text-slate-500">{item.posts} posts</span>
                  <span className="text-emerald-600 dark:text-emerald-400">{item.trend}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Saved Hashtag Groups */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Saved Groups</h2>
          {hashtagGroups.map((group) => (
            <div
              key={group.id}
              className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30 transition-all hover:shadow-lg"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-200 dark:shadow-none">
                    <Hash className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{group.name}</h3>
                    <p className="text-xs font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest">
                      Used {group.usage} times • {group.performance} performance
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => copyHashtags(group.hashtags, group.id)}
                  className={cn(
                    "px-6 py-3 rounded-xl font-bold transition-all active:scale-[0.98] flex items-center gap-2 shadow-lg dark:shadow-none",
                    copied === group.id 
                      ? "bg-emerald-500 text-white shadow-emerald-100" 
                      : "bg-white dark:bg-slate-900 text-gray-900 dark:text-white hover:bg-gray-50 border border-gray-200 dark:border-slate-800"
                  )}
                >
                  {copied === group.id ? (
                    <>
                      <Check className="h-5 w-5" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-5 w-5" />
                      Copy All
                    </>
                  )}
                </button>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {group.hashtags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-xl text-sm font-bold text-indigo-600 dark:text-indigo-400 bg-white/80 dark:bg-slate-950/50 backdrop-blur-sm border border-gray-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all cursor-default"
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
