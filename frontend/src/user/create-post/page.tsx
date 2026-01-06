"use client"

import { UserDashboardLayout } from "@/components/user-dashboard-layout"
import { useState } from "react"
import { Sparkles, ImageIcon, Calendar, Send, Instagram, Linkedin, Facebook, Video, Wand2 } from "lucide-react"

export default function UserCreatePostPage() {
  const [caption, setCaption] = useState("")
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(["LinkedIn"])
  const [aiGenerating, setAiGenerating] = useState(false)
  const [imageGenerating, setImageGenerating] = useState(false)
  const [videoGenerating, setVideoGenerating] = useState(false)
  const [imagePrompt, setImagePrompt] = useState("")
  const [videoPrompt, setVideoPrompt] = useState("")
  const [generatedImage, setGeneratedImage] = useState("")
  const [generatedVideo, setGeneratedVideo] = useState("")

  const platforms = [
    { name: "LinkedIn", icon: Linkedin, color: "rgb(14, 118, 168)" },
    { name: "Instagram", icon: Instagram, color: "rgb(225, 48, 108)" },
    { name: "Facebook", icon: Facebook, color: "rgb(24, 119, 242)" },
  ]

  const generateAICaption = () => {
    setAiGenerating(true)
    setTimeout(() => {
      setCaption(
        "Excited to share our latest innovation in digital marketing! 🚀 Our new AI-powered platform helps businesses automate their social media presence while maintaining authentic engagement. Ready to transform your online strategy? #DigitalMarketing #AI #Innovation",
      )
      setAiGenerating(false)
    }, 1500)
  }

  const generateAIImage = () => {
    setImageGenerating(true)
    setTimeout(() => {
      setGeneratedImage(
        `/placeholder.svg?height=800&width=800&query=${encodeURIComponent(imagePrompt || "modern digital marketing abstract art")}`,
      )
      setImageGenerating(false)
    }, 2000)
  }

  const generateAIVideo = () => {
    setVideoGenerating(true)
    setTimeout(() => {
      setGeneratedVideo("generated-video-placeholder")
      setVideoGenerating(false)
    }, 3000)
  }

  const togglePlatform = (platform: string) => {
    setSelectedPlatforms((prev) => (prev.includes(platform) ? prev.filter((p) => p !== platform) : [...prev, platform]))
  }

  return (
    <UserDashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Create Post</h1>
          <p className="text-gray-600 dark:text-slate-400">Create and schedule content across your social platforms</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Post Creator */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Select Platforms</h3>
              <div className="flex gap-3">
                {platforms.map((platform) => (
                  <button
                    key={platform.name}
                    onClick={() => togglePlatform(platform.name)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all ${
                      selectedPlatforms.includes(platform.name)
                        ? "ring-2 ring-offset-2 ring-offset-white dark:ring-offset-slate-950"
                        : "opacity-50 hover:opacity-75"
                    }`}
                    style={{
                      background: selectedPlatforms.includes(platform.name)
                        ? platform.color + "20"
                        : "rgba(0, 0, 0, 0.05)",
                      ringColor: selectedPlatforms.includes(platform.name) ? platform.color : undefined,
                    }}
                  >
                    <platform.icon className="h-5 w-5" style={{ color: platform.color }} />
                    <span className="font-medium text-gray-900 dark:text-white">{platform.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Caption</h3>
                <button
                  onClick={generateAICaption}
                  disabled={aiGenerating}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors disabled:opacity-50"
                >
                  <Sparkles className="h-4 w-4" />
                  {aiGenerating ? "Generating..." : "Generate with AI"}
                </button>
              </div>
              <textarea
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="Write your caption here..."
                rows={8}
                className="w-full rounded-xl p-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800"
              />
              <div className="mt-2 text-sm text-gray-600 dark:text-slate-400">{caption.length} characters</div>
            </div>

            <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">AI Image Generator</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  value={imagePrompt}
                  onChange={(e) => setImagePrompt(e.target.value)}
                  placeholder="Describe the image you want to generate..."
                  className="w-full rounded-xl p-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800"
                />
                <button
                  onClick={generateAIImage}
                  disabled={imageGenerating}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors disabled:opacity-50"
                >
                  <Wand2 className="h-5 w-5" />
                  {imageGenerating ? "Generating Image..." : "Generate Image with AI"}
                </button>
                {generatedImage && (
                  <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-slate-800">
                    <img src={generatedImage || "/placeholder.svg"} alt="AI Generated" className="w-full h-auto" />
                  </div>
                )}
              </div>
            </div>

            <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">AI Video Generator</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  value={videoPrompt}
                  onChange={(e) => setVideoPrompt(e.target.value)}
                  placeholder="Describe the video you want to generate..."
                  className="w-full rounded-xl p-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800"
                />
                <button
                  onClick={generateAIVideo}
                  disabled={videoGenerating}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors disabled:opacity-50"
                >
                  <Video className="h-5 w-5" />
                  {videoGenerating ? "Generating Video..." : "Generate Video with AI"}
                </button>
                {generatedVideo && (
                  <div className="rounded-xl p-8 text-center bg-white/50 dark:bg-slate-900/30 border border-gray-200 dark:border-slate-800">
                    <Video className="h-16 w-16 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
                    <p className="text-gray-900 dark:text-white font-medium">Video Generated Successfully!</p>
                    <p className="text-sm text-gray-600 dark:text-slate-400 mt-2">
                      Your AI-generated video is ready to use
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Upload Media</h3>
              <div className="border-2 border-dashed border-gray-300 dark:border-slate-700 rounded-xl p-12 text-center hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors cursor-pointer bg-white/30 dark:bg-slate-900/20">
                <ImageIcon className="h-12 w-12 text-gray-400 dark:text-slate-500 mx-auto mb-4" />
                <p className="text-gray-900 dark:text-white font-medium mb-1">Click to upload or drag and drop</p>
                <p className="text-sm text-gray-600 dark:text-slate-400">PNG, JPG, GIF, MP4 up to 10MB</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors">
                <Send className="h-5 w-5" />
                Post Now
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-gray-900 dark:text-white font-medium hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors bg-white/50 dark:bg-slate-900/30 border border-gray-200 dark:border-slate-800">
                <Calendar className="h-5 w-5" />
                Schedule
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl p-6 sticky top-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Preview</h3>
              {selectedPlatforms.length > 0 ? (
                <div className="space-y-4">
                  {selectedPlatforms.map((platform) => (
                    <div
                      key={platform}
                      className="rounded-xl p-4 bg-white/50 dark:bg-slate-900/30 border border-gray-200 dark:border-slate-800"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-10 rounded-full bg-indigo-600"></div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white text-sm">Your Brand</p>
                          <p className="text-xs text-gray-600 dark:text-slate-400">{platform}</p>
                        </div>
                      </div>
                      {generatedImage && (
                        <img
                          src={generatedImage || "/placeholder.svg"}
                          alt="Preview"
                          className="w-full rounded-lg mb-3"
                        />
                      )}
                      {!generatedImage && (
                        <div className="aspect-square rounded-lg mb-3 bg-gray-200 dark:bg-slate-800"></div>
                      )}
                      <p className="text-sm text-gray-900 dark:text-white whitespace-pre-wrap">
                        {caption || "Your caption will appear here..."}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-600 dark:text-slate-400">Select a platform to see preview</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </UserDashboardLayout>
  )
}
