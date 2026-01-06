"use client"

import { UserDashboardLayout } from "@/components/user-dashboard-layout"
import { Sparkles, Clock, TrendingUp, Lightbulb, Target, Zap } from "lucide-react"

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
          <h1 className="text-3xl font-bold mb-2 text-white">AI Content Suggestions</h1>
          <p className="text-slate-400">Get personalized recommendations to optimize your content strategy</p>
        </div>

        {/* Optimal Posting Times */}
        <div
          className="rounded-2xl p-6"
          style={{
            background: "rgba(99, 102, 241, 0.05)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(99, 102, 241, 0.1)",
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Clock className="h-6 w-6 text-indigo-400" />
            <h2 className="text-xl font-bold text-white">Optimal Posting Times</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {optimalTimes.map((time) => (
              <div
                key={time.day}
                className="rounded-xl p-6"
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                }}
              >
                <p className="text-indigo-400 font-semibold mb-2">{time.day}</p>
                <p className="text-2xl font-bold text-white mb-2">{time.time}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">{time.platform}</span>
                  <span
                    className={`px-2 py-1 rounded-md text-xs font-medium ${
                      time.engagement === "Very High"
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "bg-amber-500/20 text-amber-400"
                    }`}
                  >
                    {time.engagement}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Ideas */}
        <div
          className="rounded-2xl p-6"
          style={{
            background: "rgba(99, 102, 241, 0.05)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(99, 102, 241, 0.1)",
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="h-6 w-6 text-indigo-400" />
            <h2 className="text-xl font-bold text-white">AI-Generated Content Ideas</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {contentIdeas.map((idea) => (
              <div
                key={idea.id}
                className="rounded-xl p-6"
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="h-12 w-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(99, 102, 241, 0.2)" }}
                  >
                    <idea.icon className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white">{idea.title}</h3>
                      <span className="px-2 py-1 rounded-md text-xs font-medium bg-emerald-500/20 text-emerald-400">
                        {idea.engagement}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400 mb-3">{idea.description}</p>
                    <span className="inline-block px-3 py-1 rounded-lg text-xs font-medium text-indigo-400 bg-indigo-500/10">
                      {idea.category}
                    </span>
                  </div>
                </div>
                <button className="w-full px-4 py-2 rounded-lg bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition-colors">
                  Use This Idea
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Topics */}
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
            <h2 className="text-xl font-bold text-white">Trending Topics in Your Niche</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {trendingTopics.map((topic) => (
              <div
                key={topic.topic}
                className="rounded-xl p-6"
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white">{topic.topic}</h3>
                  <span className="px-3 py-1 rounded-lg text-xs font-medium bg-emerald-500/20 text-emerald-400">
                    {topic.relevance} match
                  </span>
                </div>
                <p className="text-sm text-slate-400">{topic.posts} posts using this topic</p>
              </div>
            ))}
          </div>
        </div>

        {/* Audience Insights */}
        <div
          className="rounded-2xl p-6"
          style={{
            background: "rgba(99, 102, 241, 0.05)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(99, 102, 241, 0.1)",
          }}
        >
          <h2 className="text-xl font-bold text-white mb-6">Audience Insights</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {audienceInsights.map((insight) => (
              <div
                key={insight.metric}
                className="rounded-xl p-6"
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                }}
              >
                <p className="text-slate-400 text-sm mb-2">{insight.metric}</p>
                <p className="text-xl font-bold text-white mb-2">{insight.value}</p>
                <span className="text-sm font-medium text-emerald-400">{insight.change}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </UserDashboardLayout>
  )
}
