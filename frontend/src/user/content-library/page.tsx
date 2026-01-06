

import { UserDashboardLayout } from "@/components/user-dashboard-layout"
import { useState } from "react"
import { Video, File, Upload, Search, Grid3x3, List } from "lucide-react"
import { cn } from "@/lib/utils"


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
            <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white tracking-tight">Content Library</h1>
            <p className="text-gray-600 dark:text-slate-400">Manage and organize your media assets</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 dark:shadow-none active:scale-[0.98]">
            <Upload className="h-5 w-5" />
            Upload Files
          </button>
        </div>

        {/* Search and Filters */}
        <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-slate-500" />
              <input
                type="text"
                placeholder="Search files..."
                className="w-full pl-12 pr-4 py-3.5 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white/80 dark:bg-slate-950/50 backdrop-blur-sm border border-gray-200 dark:border-slate-800 transition-all font-medium"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={cn(
                  "p-3.5 rounded-xl transition-all active:scale-95 shadow-sm",
                  viewMode === "grid" 
                    ? "bg-indigo-600 text-white shadow-indigo-100 dark:shadow-none" 
                    : "text-gray-500 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 bg-white/50 dark:bg-slate-900/40 border border-gray-200 dark:border-slate-800"
                )}
              >
                <Grid3x3 className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={cn(
                  "p-3.5 rounded-xl transition-all active:scale-95 shadow-sm",
                  viewMode === "list" 
                    ? "bg-indigo-600 text-white shadow-indigo-100 dark:shadow-none" 
                    : "text-gray-500 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 bg-white/50 dark:bg-slate-900/40 border border-gray-200 dark:border-slate-800"
                )}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Categories */}
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
                {cat.label} <span className="ml-1 opacity-50 tabular-nums">{cat.count}</span>
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
                className="group rounded-2xl p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/20 dark:to-purple-950/10 border border-indigo-100/50 dark:border-indigo-900/20"
              >
                <div className="aspect-video rounded-xl mb-4 flex items-center justify-center overflow-hidden bg-white/80 dark:bg-slate-950/50 shadow-inner group-hover:shadow-md transition-shadow">
                  {item.type === "image" && item.thumbnail && (
                    <img
                      src={item.thumbnail || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                  {item.type === "video" && <Video className="h-14 w-14 text-indigo-600 dark:text-indigo-400 opacity-60 group-hover:opacity-100 transition-opacity" />}
                  {item.type === "document" && <File className="h-14 w-14 text-indigo-600 dark:text-indigo-400 opacity-60 group-hover:opacity-100 transition-opacity" />}
                </div>
                <div className="px-1">
                  <p className="text-gray-900 dark:text-white font-bold mb-1 truncate leading-tight">{item.name}</p>
                  <div className="flex items-center justify-between text-[10px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest">
                    <span>{item.size}</span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/20 dark:to-purple-950/10 border border-indigo-100/50 dark:border-indigo-900/20 shadow-sm">
            <div className="divide-y divide-gray-100 dark:divide-slate-800/50">
              {mediaItems.map((item) => (
                <div key={item.id} className="p-6 hover:bg-white/60 dark:hover:bg-slate-900/40 transition-all cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="h-20 w-20 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden bg-white/80 dark:bg-slate-950/50 shadow-sm border border-gray-100 dark:border-slate-800">
                      {item.type === "image" && item.thumbnail && (
                        <img
                          src={item.thumbnail || "/placeholder.svg"}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      )}
                      {item.type === "video" && <Video className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />}
                      {item.type === "document" && <File className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 dark:text-white font-bold mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{item.name}</p>
                      <div className="flex flex-wrap items-center gap-6">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest">Type</span>
                          <span className="text-xs font-bold text-gray-900 dark:text-white capitalize">{item.type}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest">Size</span>
                          <span className="text-xs font-bold text-gray-900 dark:text-white uppercase">{item.size}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest">Date</span>
                          <span className="text-xs font-bold text-gray-900 dark:text-white">{item.date}</span>
                        </div>
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
