"use client"

import { UserDashboardLayout } from "@/components/user-dashboard-layout"
import { Upload, FileSpreadsheet, Download, CheckCircle2, AlertCircle, Clock } from "lucide-react"
import { useState } from "react"

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
        <div>
          <h1 className="text-3xl font-bold mb-2 text-white">Bulk Upload</h1>
          <p className="text-slate-400">Schedule multiple posts at once using CSV import</p>
        </div>

        {/* Upload Section */}
        <div
          className="rounded-2xl p-8"
          style={{
            background: "rgba(99, 102, 241, 0.05)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(99, 102, 241, 0.1)",
          }}
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Upload Your Posts</h2>
            <p className="text-slate-400">Upload a CSV file with your post details to schedule in bulk</p>
          </div>

          <div
            className="border-2 border-dashed border-indigo-500/30 rounded-2xl p-12 text-center hover:border-indigo-500 transition-colors cursor-pointer mb-6"
            style={{ background: "rgba(99, 102, 241, 0.02)" }}
            onClick={() => setUploadedFile(true)}
          >
            <Upload className="h-16 w-16 text-indigo-400 mx-auto mb-4" />
            <p className="text-white font-semibold text-lg mb-2">Drop your CSV file here or click to browse</p>
            <p className="text-sm text-slate-400">Maximum file size: 10MB</p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <button
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium hover:bg-white/10 transition-colors"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <Download className="h-5 w-5" />
              Download CSV Template
            </button>
            <button
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium hover:bg-white/10 transition-colors"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <FileSpreadsheet className="h-5 w-5" />
              View Format Guide
            </button>
          </div>
        </div>

        {/* CSV Format Guide */}
        <div
          className="rounded-2xl p-6"
          style={{
            background: "rgba(99, 102, 241, 0.05)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(99, 102, 241, 0.1)",
          }}
        >
          <h2 className="text-xl font-bold text-white mb-4">CSV Format Requirements</h2>
          <div
            className="rounded-xl p-4 font-mono text-sm"
            style={{
              background: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
            }}
          >
            <p className="text-indigo-400 mb-2">title, caption, platform, date, time, media_url</p>
            <p className="text-slate-300">
              Product Launch, Excited to announce..., LinkedIn, 2024-01-20, 10:00, https://...
            </p>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li className="flex items-start gap-2">
              <span className="text-indigo-400">•</span>
              <span>Each row represents one post to be scheduled</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-400">•</span>
              <span>Platform must be: LinkedIn, Instagram, or Facebook</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-400">•</span>
              <span>Date format: YYYY-MM-DD, Time format: HH:MM (24-hour)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-400">•</span>
              <span>Media URL is optional, leave blank if no media</span>
            </li>
          </ul>
        </div>

        {/* Upload Queue */}
        {uploadedFile && (
          <div
            className="rounded-2xl p-6"
            style={{
              background: "rgba(99, 102, 241, 0.05)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(99, 102, 241, 0.1)",
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Upload Queue</h2>
              <span className="text-sm text-slate-400">5 posts • 2 completed • 3 remaining</span>
            </div>
            <div className="space-y-3">
              {uploadQueue.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl p-4 flex items-center gap-4"
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                  }}
                >
                  <div>
                    {item.status === "completed" && <CheckCircle2 className="h-6 w-6 text-emerald-400" />}
                    {item.status === "processing" && <Clock className="h-6 w-6 text-amber-400 animate-spin" />}
                    {item.status === "pending" && <AlertCircle className="h-6 w-6 text-slate-500" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium mb-1">{item.title}</p>
                    <div className="flex items-center gap-4 text-sm text-slate-400">
                      <span>{item.platform}</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-lg text-xs font-medium capitalize ${
                      item.status === "completed"
                        ? "bg-emerald-500/20 text-emerald-400"
                        : item.status === "processing"
                          ? "bg-amber-500/20 text-amber-400"
                          : "bg-slate-500/20 text-slate-400"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 px-6 py-3 rounded-xl bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition-colors">
              Schedule All Posts
            </button>
          </div>
        )}
      </div>
    </UserDashboardLayout>
  )
}
