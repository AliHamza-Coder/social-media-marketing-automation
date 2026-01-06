

import { UserDashboardLayout } from "@/components/user-dashboard-layout"
import { useState } from "react"
import { Sparkles, Briefcase, Heart, TrendingUp, Zap, Gift } from "lucide-react"
import { cn } from "@/lib/utils"


export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", label: "All Templates" },
    { id: "business", label: "Business" },
    { id: "marketing", label: "Marketing" },
    { id: "lifestyle", label: "Lifestyle" },
    { id: "announcement", label: "Announcements" },
  ]

  const templates = [
    {
      id: 1,
      title: "Product Launch",
      category: "business",
      description: "Announce your new product with style",
      caption: "🚀 Exciting news! We're thrilled to announce the launch of our latest product...",
      icon: Sparkles,
      color: "rgb(99, 102, 241)",
    },
    {
      id: 2,
      title: "Promotion Announcement",
      category: "marketing",
      description: "Share special offers and discounts",
      caption: "🎉 Limited time offer! Get 30% off on all our products this week...",
      icon: Gift,
      color: "rgb(236, 72, 153)",
    },
    {
      id: 3,
      title: "Behind the Scenes",
      category: "lifestyle",
      description: "Show the human side of your brand",
      caption: "👋 Take a peek behind the scenes at our team workspace...",
      icon: Heart,
      color: "rgb(245, 158, 11)",
    },
    {
      id: 4,
      title: "Growth Milestone",
      category: "business",
      description: "Celebrate your achievements",
      caption: "📈 We've reached an incredible milestone! Thank you to our amazing community...",
      icon: TrendingUp,
      color: "rgb(34, 197, 94)",
    },
    {
      id: 5,
      title: "Quick Tips",
      category: "marketing",
      description: "Share valuable insights",
      caption: "💡 5 quick tips to boost your productivity and achieve more...",
      icon: Zap,
      color: "rgb(59, 130, 246)",
    },
    {
      id: 6,
      title: "Company Culture",
      category: "business",
      description: "Showcase your work environment",
      caption: "🏢 Our company culture is built on collaboration, innovation, and growth...",
      icon: Briefcase,
      color: "rgb(168, 85, 247)",
    },
  ]

  const filteredTemplates =
    selectedCategory === "all" ? templates : templates.filter((t) => t.category === selectedCategory)

  const useTemplate = (template) => {
    alert(`Using template: ${template.title}`)
  }

  return (
    <UserDashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white tracking-tight">Post Templates</h1>
            <p className="text-gray-600 dark:text-slate-400">Choose from pre-designed templates to create engaging content quickly</p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  "px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-widest transition-all active:scale-95 shadow-sm",
                  selectedCategory === cat.id 
                    ? "bg-indigo-600 text-white shadow-indigo-100 dark:shadow-none" 
                    : "text-gray-500 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 bg-white/50 dark:bg-slate-900/40 border border-gray-200 dark:border-slate-800"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="group rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/20 dark:to-purple-950/10 border border-indigo-100/50 dark:border-indigo-900/20"
            >
              <div
                className="h-16 w-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-white/50 dark:border-white/10"
                style={{ backgroundColor: template.color + "20" }}
              >
                <template.icon className="h-8 w-8" style={{ color: template.color }} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{template.title}</h3>
              <p className="text-gray-500 dark:text-slate-400 text-sm font-medium mb-6 leading-relaxed">{template.description}</p>
              <div className="rounded-2xl p-4 mb-6 bg-white/80 dark:bg-slate-950/50 backdrop-blur-sm border border-gray-100 dark:border-slate-800 shadow-inner group-hover:shadow-md transition-all">
                <p className="text-gray-800 dark:text-slate-200 text-sm font-medium italic leading-relaxed">"{template.caption}"</p>
              </div>
              <button
                onClick={() => useTemplate(template)}
                className="w-full px-4 py-3 rounded-xl bg-indigo-600 text-white font-bold transition-all shadow-lg shadow-indigo-100 dark:shadow-none hover:bg-indigo-700 active:scale-[0.98]"
              >
                Use Template
              </button>
            </div>
          ))}
        </div>
      </div>
    </UserDashboardLayout>
  )
}
