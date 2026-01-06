

import { UserDashboardLayout } from "@/components/user-dashboard-layout"
import { Sparkles, Clock, TrendingUp, Lightbulb, Target, Zap } from "lucide-react"
import { cn } from "@/lib/utils"


export default function AISuggestionsPage() {
  const optimalTimes = [
    { day: "Monday", time: "10:00 AM", engagement: "High", platform: "LinkedIn" },
    { day: "Wednesday", time: "2:00 PM", engagement: "Very High", platform: "Instagram" },
    { day: "Friday", time: "12:00 PM", engagement: "High", platform: "Facebook" },
  ]

  const contentIdeas = [
    {
      id: 1,
      title: "Share Your Success Story",
      description: "Talk about a recent milestone or achievement your company reached",
      engagement: "92%",
      category: "Business",
      icon: Target,
    },
    {
      id: 2,
      title: "Behind-the-Scenes Content",
      description: "Give your audience a peek into your daily operations and team culture",
      engagement: "88%",
      category: "Lifestyle",
      icon: Lightbulb,
    },
    {
      id: 3,
      title: "Industry Trends Analysis",
      description: "Share insights about emerging trends in your industry",
      engagement: "85%",
      category: "Educational",
      icon: TrendingUp,
    },
    {
      id: 4,
      title: "Quick Tips & Tricks",
      description: "Provide actionable advice that your audience can implement immediately",
      engagement: "90%",
      category: "Tips",
      icon: Zap,
    },
  ]

  const trendingTopics = [
    { topic: "AI in Business", relevance: "95%", posts: "2.4M" },
    { topic: "Remote Work Culture", relevance: "88%", posts: "1.8M" },
    { topic: "Sustainable Practices", relevance: "82%", posts: "1.2M" },
    { topic: "Digital Transformation", relevance: "90%", posts: "3.1M" },
  ]

  const audienceInsights = [
    { metric: "Most Active Time", value: "9 AM - 11 AM EST", change: "+15%" },
    { metric: "Preferred Content", value: "Video & Infographics", change: "+22%" },
    { metric: "Avg. Engagement Time", value: "3.5 minutes", change: "+8%" },
    { metric: "Top Location", value: "United States", change: "+12%" },
  ]

  return (
    <UserDashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white tracking-tight">AI Content Suggestions</h1>
          <p className="text-gray-600 dark:text-slate-400">Get personalized recommendations to optimize your content strategy</p>
        </div>

        {/* Optimal Posting Times */}
        <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
              <Clock className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Optimal Posting Times</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {optimalTimes.map((time) => (
              <div
                key={time.day}
                className="rounded-2xl p-6 bg-white/60 dark:bg-slate-950/40 backdrop-blur-sm border border-gray-100 dark:border-slate-800 transition-all hover:scale-[1.02] hover:bg-white dark:hover:bg-slate-800 shadow-sm"
              >
                <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-2">{time.day}</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white mb-3 tabular-nums">{time.time}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest">{time.platform}</span>
                  <span
                    className={cn(
                      "px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest",
                      time.engagement === "Very High"
                        ? "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                        : "bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400"
                    )}
                  >
                    {time.engagement}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Ideas */}
        <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">AI-Generated Content Ideas</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {contentIdeas.map((idea) => (
              <div
                key={idea.id}
                className="group rounded-2xl p-6 bg-white/60 dark:bg-slate-950/40 backdrop-blur-sm border border-gray-100 dark:border-slate-800 transition-all hover:scale-[1.02] hover:bg-white dark:hover:bg-slate-800 shadow-sm"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="h-14 w-14 rounded-2xl bg-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-200 dark:shadow-none"
                  >
                    <idea.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{idea.title}</h3>
                      <span className="px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                        {idea.engagement}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-gray-500 dark:text-slate-400 leading-relaxed mb-4">{idea.description}</p>
                    <span className="inline-block px-3 py-1 rounded-xl text-[10px] font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800/50">
                      {idea.category}
                    </span>
                  </div>
                </div>
                <button className="w-full px-6 py-3 rounded-xl bg-indigo-600 text-white font-bold transition-all shadow-lg shadow-indigo-100 dark:shadow-none hover:bg-indigo-700 active:scale-[0.98]">
                  Use This Idea
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Topics */}
        <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Trending Topics in Your Niche</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {trendingTopics.map((topic) => (
              <div
                key={topic.topic}
                className="rounded-2xl p-6 bg-white/60 dark:bg-slate-950/40 backdrop-blur-sm border border-gray-100 dark:border-slate-800 transition-all hover:bg-white dark:hover:bg-slate-800 shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{topic.topic}</h3>
                  <span className="px-3 py-1 rounded-xl text-[10px] font-bold uppercase tracking-widest bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                    {topic.relevance} match
                  </span>
                </div>
                <p className="text-xs font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest">{topic.posts} posts using this topic</p>
              </div>
            ))}
          </div>
        </div>

        {/* Audience Insights */}
        <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">Audience Insights</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {audienceInsights.map((insight) => (
              <div
                key={insight.metric}
                className="rounded-2xl p-6 bg-white/60 dark:bg-slate-950/40 backdrop-blur-sm border border-gray-100 dark:border-slate-800 transition-all hover:bg-white dark:hover:bg-slate-800 shadow-sm"
              >
                <p className="text-[10px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest mb-2">{insight.metric}</p>
                <p className="text-xl font-bold text-gray-900 dark:text-white mb-3">{insight.value}</p>
                <div className="flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  <TrendingUp className="h-3 w-3" />
                  <span>{insight.change}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </UserDashboardLayout>
  )
}
