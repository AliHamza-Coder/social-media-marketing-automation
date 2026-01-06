"use client"

import { UserDashboardLayout } from "@/components/user-dashboard-layout"
import { useState } from "react"
import { Sparkles, Briefcase, Heart, TrendingUp, Zap, Gift } from "lucide-react"

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
        <div>
          <h1 className="text-3xl font-bold mb-2 text-white">Post Templates</h1>
          <p className="text-slate-400">Choose from pre-designed templates to create engaging content quickly</p>
        </div>

        {/* Category Filter */}
        <div
          className="rounded-2xl p-6"
          style={{
            background: "rgba(99, 102, 241, 0.05)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(99, 102, 241, 0.1)",
          }}
        >
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === cat.id ? "bg-indigo-500 text-white" : "text-slate-400 hover:text-white"
                }`}
                style={{
                  background: selectedCategory === cat.id ? "rgb(99, 102, 241)" : "rgba(255, 255, 255, 0.05)",
                }}
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
              className="rounded-2xl p-6 hover:scale-105 transition-all"
              style={{
                background: "rgba(99, 102, 241, 0.05)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(99, 102, 241, 0.1)",
              }}
            >
              <div
                className="h-16 w-16 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: template.color + "20" }}
              >
                <template.icon className="h-8 w-8" style={{ color: template.color }} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{template.title}</h3>
              <p className="text-slate-400 text-sm mb-4">{template.description}</p>
              <div
                className="rounded-xl p-4 mb-4"
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                }}
              >
                <p className="text-white text-sm">{template.caption}</p>
              </div>
              <button
                onClick={() => useTemplate(template)}
                className="w-full px-4 py-3 rounded-xl bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition-colors"
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
