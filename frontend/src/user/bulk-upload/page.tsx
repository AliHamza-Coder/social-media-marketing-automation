

import { UserDashboardLayout } from "@/components/user-dashboard-layout"
import { Upload, FileSpreadsheet, Download, CheckCircle2, AlertCircle, Clock } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"


export default function BulkUploadPage() {
  const [uploadedFile, setUploadedFile] = useState(false)

  const uploadQueue = [
    { id: 1, title: "Product Launch Post", platform: "LinkedIn", date: "Jan 20, 2024", status: "completed" },
    { id: 2, title: "Team Announcement", platform: "Facebook", date: "Jan 21, 2024", status: "completed" },
    { id: 3, title: "Behind the Scenes", platform: "Instagram", date: "Jan 22, 2024", status: "processing" },
    { id: 4, title: "Industry Insights", platform: "LinkedIn", date: "Jan 23, 2024", status: "pending" },
    { id: 5, title: "Customer Testimonial", platform: "Facebook", date: "Jan 24, 2024", status: "pending" },
  ]

  return (
    <UserDashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white tracking-tight">Bulk Upload</h1>
            <p className="text-gray-600 dark:text-slate-400">Schedule multiple posts at once using CSV import</p>
          </div>
        </div>

        {/* Upload Section */}
        <div className="rounded-2xl p-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Upload Your Posts</h2>
            <p className="text-sm font-medium text-gray-500 dark:text-slate-400">Upload a CSV file with your post details to schedule in bulk</p>
          </div>

          <div
            className="group border-2 border-dashed border-indigo-200 dark:border-indigo-900/50 rounded-3xl p-16 text-center hover:border-indigo-500 dark:hover:border-indigo-400 transition-all duration-300 cursor-pointer mb-10 bg-white/50 dark:bg-slate-950/30 relative overflow-hidden"
            onClick={() => setUploadedFile(true)}
          >
            <div className="absolute inset-0 bg-indigo-50/50 dark:bg-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="h-20 w-20 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Upload className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />
              </div>
              <p className="text-xl font-bold text-gray-900 dark:text-white mb-2">Drop your CSV file here or click to browse</p>
              <p className="text-xs font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest">Maximum file size: 10MB</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white dark:bg-slate-900 text-gray-900 dark:text-white font-bold transition-all hover:bg-gray-50 border border-gray-200 dark:border-slate-800 shadow-sm active:scale-95">
              <Download className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              Download CSV Template
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white dark:bg-slate-900 text-gray-900 dark:text-white font-bold transition-all hover:bg-gray-50 border border-gray-200 dark:border-slate-800 shadow-sm active:scale-95">
              <FileSpreadsheet className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              View Format Guide
            </button>
          </div>
        </div>

        {/* CSV Format Guide */}
        <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">CSV Format Requirements</h2>
          <div className="rounded-2xl p-6 font-mono text-sm bg-white/80 dark:bg-slate-950/50 backdrop-blur-sm border border-gray-100 dark:border-slate-800 shadow-inner mb-6">
            <p className="text-indigo-600 dark:text-indigo-400 font-bold mb-3">title, caption, platform, date, time, media_url</p>
            <p className="text-gray-800 dark:text-slate-300 leading-relaxed">
              Product Launch, Excited to announce..., LinkedIn, 2024-01-20, 10:00, https://...
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Each row represents one post to be scheduled",
              "Platform: LinkedIn, Instagram, or Facebook",
              "Date: YYYY-MM-DD, Time: HH:MM (24-hour)",
              "Media URL is optional, leave blank if no media"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                <span className="text-xs font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Upload Queue */}
        {uploadedFile && (
          <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">Upload Queue</h2>
              <span className="text-[10px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest bg-white/50 dark:bg-slate-900/50 px-3 py-1.5 rounded-lg border border-gray-100 dark:border-slate-800 shadow-sm">
                5 posts • 2 completed • 3 remaining
              </span>
            </div>
            <div className="space-y-4">
              {uploadQueue.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl p-4 flex items-center gap-4 bg-white/60 dark:bg-slate-950/40 backdrop-blur-sm border border-gray-100 dark:border-slate-800 transition-all hover:scale-[1.01] shadow-sm"
                >
                  <div className="h-12 w-12 rounded-xl bg-white dark:bg-slate-900 flex items-center justify-center shadow-sm border border-gray-50 dark:border-slate-800">
                    {item.status === "completed" && <CheckCircle2 className="h-6 w-6 text-emerald-500" />}
                    {item.status === "processing" && <Clock className="h-6 w-6 text-amber-500 animate-spin" />}
                    {item.status === "pending" && <AlertCircle className="h-6 w-6 text-gray-400" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-bold text-gray-900 dark:text-white mb-1 truncate leading-tight">{item.title}</p>
                    <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest">
                      <span>{item.platform}</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                  <span
                    className={cn(
                      "px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-widest",
                      item.status === "completed"
                        ? "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                        : item.status === "processing"
                          ? "bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400"
                          : "bg-gray-100 dark:bg-slate-800/50 text-gray-500 dark:text-slate-500"
                    )}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 px-8 py-4 rounded-2xl bg-indigo-600 text-white font-bold transition-all shadow-xl shadow-indigo-100 dark:shadow-none hover:bg-indigo-700 active:scale-[0.98]">
              Schedule All Posts
            </button>
          </div>
        )}
      </div>
    </UserDashboardLayout>
  )
}
