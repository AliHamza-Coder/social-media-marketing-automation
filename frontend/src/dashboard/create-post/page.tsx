

import type React from "react"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { CalendarIcon, Upload, Sparkles, Instagram, Linkedin, Facebook } from "lucide-react"
import { format } from "date-fns"
import { PhonePreview } from "@/components/phone-preview"

type Platform = "linkedin" | "instagram" | "facebook"

export default function CreatePostPage() {
  const [productName, setProductName] = useState("")
  const [targetCountry, setTargetCountry] = useState("")
  const [platform, setPlatform] = useState<Platform>("linkedin")
  const [date, setDate] = useState<Date>()
  const [caption, setCaption] = useState("")
  const [imagePreview, setImagePreview] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleGenerateCaption = async () => {
    setIsGenerating(true)
    // Simulate AI generation
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setCaption(
      `🚀 Introducing ${productName || "our premium product"} to ${targetCountry || "international markets"}!\n\nExpanding global reach with quality and innovation. Join us in our journey to connect businesses worldwide.\n\n#Export #GlobalBusiness #Innovation #${targetCountry || "International"}`,
    )
    setIsGenerating(false)
  }

  const platforms = [
    { id: "linkedin", name: "LinkedIn", icon: Linkedin },
    { id: "instagram", name: "Instagram", icon: Instagram },
    { id: "facebook", name: "Facebook", icon: Facebook },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Create Post</h1>
          <p className="text-muted-foreground">Generate AI-powered social media content for your export business.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column - Form */}
          <div className="space-y-6">
            <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="productName" className="font-bold text-gray-900 dark:text-gray-100">Product Name</Label>
                  <Input
                    id="productName"
                    placeholder="e.g., Premium Cotton Textiles"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    className="h-11 bg-white/50 dark:bg-slate-900/30 border-gray-200 dark:border-slate-800 rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="targetCountry" className="font-bold text-gray-900 dark:text-gray-100">Target Country</Label>
                  <Input
                    id="targetCountry"
                    placeholder="e.g., United States"
                    value={targetCountry}
                    onChange={(e) => setTargetCountry(e.target.value)}
                    className="h-11 bg-white/50 dark:bg-slate-900/30 border-gray-200 dark:border-slate-800 rounded-xl"
                  />
                </div>

                <div className="space-y-3">
                  <Label className="font-bold text-gray-900 dark:text-gray-100">Select Platform</Label>
                  <div className="grid grid-cols-3 gap-3">
                    {platforms.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setPlatform(p.id as Platform)}
                        className={cn(
                          "flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200",
                          platform === p.id 
                            ? "border-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400" 
                            : "border-gray-100 dark:border-slate-800 bg-white/50 dark:bg-slate-900/10 hover:border-indigo-200 dark:hover:border-indigo-800"
                        )}
                      >
                        <p.icon className="h-6 w-6" />
                        <span className="text-sm font-bold">{p.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="font-bold text-gray-900 dark:text-gray-100">Schedule Date & Time</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn("w-full h-11 justify-start text-left font-medium rounded-xl border-gray-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30", !date && "text-gray-400 dark:text-slate-500")}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 rounded-xl overflow-hidden border-gray-200 dark:border-slate-800">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="image" className="font-bold text-gray-900 dark:text-gray-100">Upload Image</Label>
                  <div className="relative">
                    <input id="image" type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                    <label
                      htmlFor="image"
                      className="flex flex-col items-center justify-center h-48 border-2 border-dashed border-gray-200 dark:border-slate-800 rounded-2xl cursor-pointer hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors bg-white/50 dark:bg-slate-900/30"
                    >
                      {imagePreview ? (
                        <img
                          src={imagePreview || "/placeholder.svg"}
                          alt="Preview"
                          className="h-full w-full object-cover rounded-2xl"
                        />
                      ) : (
                        <>
                          <div className="h-12 w-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-3">
                            <Upload className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                          </div>
                          <span className="text-sm font-semibold text-gray-600 dark:text-slate-400">Click to upload or drag and drop</span>
                          <span className="text-xs text-gray-400 mt-1">PNG, JPG up to 10MB</span>
                        </>
                      )}
                    </label>
                  </div>
                </div>

                <Button
                  onClick={handleGenerateCaption}
                  disabled={isGenerating}
                  className="w-full h-13 text-base font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 rounded-xl shadow-lg shadow-indigo-200 dark:shadow-indigo-900/20 transition-all active:scale-[0.98]"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  {isGenerating ? "Generating..." : "Generate AI Caption"}
                </Button>

                <div className="space-y-2">
                  <Label htmlFor="caption" className="font-bold text-gray-900 dark:text-gray-100">Caption</Label>
                  <Textarea
                    id="caption"
                    placeholder="AI-generated caption will appear here..."
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    rows={6}
                    className="resize-none bg-white/50 dark:bg-slate-900/30 border-gray-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <Button className="w-full h-12 text-base font-bold rounded-xl" disabled={!caption}>
                  Schedule Post
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Live Preview */}
          <div className="lg:sticky lg:top-8">
            <PhonePreview platform={platform} caption={caption} imageUrl={imagePreview} productName={productName} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
