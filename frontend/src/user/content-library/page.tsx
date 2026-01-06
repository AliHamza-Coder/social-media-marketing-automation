"use client"

import { UserDashboardLayout } from "@/components/user-dashboard-layout"
import { useState } from "react"
import { Video, File, Upload, Search, Grid3x3, List } from "lucide-react"

export default function ContentLibraryPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", label: "All Files", count: 248 },
    { id: "images", label: "Images", count: 156 },
    { id: "videos", label: "Videos", count: 42 },
    { id: "documents", label: "Documents", count: 50 },
  ]

  const mediaItems = [
    {
      id: 1,
      name: "Product Launch Banner.jpg",
      type: "image",
      size: "2.4 MB",
      date: "2 days ago",
      thumbnail: "/product-launch-banner.png",
    },
    {
      id: 2,
      name: "Brand Video.mp4",
      type: "video",
      size: "45.2 MB",
      date: "5 days ago",
      thumbnail: "/video-thumbnail.png",
    },
    {
      id: 3,
      name: "Social Media Post.jpg",
      type: "image",
      size: "1.8 MB",
      date: "1 week ago",
      thumbnail: "/social-media-post.png",
    },
    {
      id: 4,
      name: "Marketing Campaign.jpg",
      type: "image",
      size: "3.2 MB",
      date: "2 weeks ago",
      thumbnail: "/marketing-campaign-brainstorm.png",
    },
    {
      id: 5,
      name: "Product Demo.mp4",
      type: "video",
      size: "38.5 MB",
      date: "3 weeks ago",
      thumbnail: "/product-demo-video.png",
    },
    { id: 6, name: "Brand Guidelines.pdf", type: "document", size: "5.6 MB", date: "1 month ago", thumbnail: "" },
  ]

  return (
    <UserDashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-white">Content Library</h1>
            <p className="text-slate-400">Manage and organize your media assets</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition-colors">
            <Upload className="h-5 w-5" />
            Upload Files
          </button>
        </div>

        {/* Search and Filters */}
        <div
          className="rounded-2xl p-6"
          style={{
            background: "rgba(99, 102, 241, 0.05)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(99, 102, 241, 0.1)",
          }}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search files..."
                className="w-full pl-12 pr-4 py-3 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-3 rounded-xl transition-colors ${
                  viewMode === "grid" ? "bg-indigo-500 text-white" : "text-slate-400 hover:text-white"
                }`}
                style={{
                  background: viewMode === "grid" ? "rgb(99, 102, 241)" : "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <Grid3x3 className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-3 rounded-xl transition-colors ${
                  viewMode === "list" ? "bg-indigo-500 text-white" : "text-slate-400 hover:text-white"
                }`}
                style={{
                  background: viewMode === "list" ? "rgb(99, 102, 241)" : "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="flex gap-3 mt-6">
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
                {cat.label} ({cat.count})
              </button>
            ))}
          </div>
        </div>

        {/* Media Grid */}
        {viewMode === "grid" ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mediaItems.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl p-4 hover:scale-105 transition-all cursor-pointer"
                style={{
                  background: "rgba(99, 102, 241, 0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(99, 102, 241, 0.1)",
                }}
              >
                <div
                  className="aspect-video rounded-xl mb-4 flex items-center justify-center overflow-hidden"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                  }}
                >
                  {item.type === "image" && item.thumbnail && (
                    <img
                      src={item.thumbnail || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                  {item.type === "video" && <Video className="h-12 w-12 text-indigo-400" />}
                  {item.type === "document" && <File className="h-12 w-12 text-indigo-400" />}
                </div>
                <div>
                  <p className="text-white font-medium mb-1 truncate">{item.name}</p>
                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <span>{item.size}</span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "rgba(99, 102, 241, 0.05)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(99, 102, 241, 0.1)",
            }}
          >
            <div className="divide-y divide-white/5">
              {mediaItems.map((item) => (
                <div key={item.id} className="p-6 hover:bg-white/5 transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div
                      className="h-16 w-16 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden"
                      style={{ background: "rgba(255, 255, 255, 0.05)" }}
                    >
                      {item.type === "image" && item.thumbnail && (
                        <img
                          src={item.thumbnail || "/placeholder.svg"}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      )}
                      {item.type === "video" && <Video className="h-8 w-8 text-indigo-400" />}
                      {item.type === "document" && <File className="h-8 w-8 text-indigo-400" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium mb-1">{item.name}</p>
                      <div className="flex items-center gap-4 text-sm text-slate-400">
                        <span className="capitalize">{item.type}</span>
                        <span>{item.size}</span>
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </UserDashboardLayout>
  )
}
