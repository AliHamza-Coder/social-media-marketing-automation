"use client"

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
            <Card className="p-6 glass-strong">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="productName">Product Name</Label>
                  <Input
                    id="productName"
                    placeholder="e.g., Premium Cotton Textiles"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="targetCountry">Target Country</Label>
                  <Input
                    id="targetCountry"
                    placeholder="e.g., United States"
                    value={targetCountry}
                    onChange={(e) => setTargetCountry(e.target.value)}
                  />
                </div>

                <div className="space-y-3">
                  <Label>Select Platform</Label>
                  <div className="grid grid-cols-3 gap-3">
                    {platforms.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setPlatform(p.id as Platform)}
                        className={cn(
                          "flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all",
                          platform === p.id ? "border-primary bg-primary/10" : "border-border hover:border-primary/50",
                        )}
                      >
                        <p.icon className="h-6 w-6" />
                        <span className="text-sm font-medium">{p.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Schedule Date & Time</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="image">Upload Image</Label>
                  <div className="relative">
                    <input id="image" type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                    <label
                      htmlFor="image"
                      className="flex flex-col items-center justify-center h-40 border-2 border-dashed border-border rounded-xl cursor-pointer hover:border-primary/50 transition-colors"
                    >
                      {imagePreview ? (
                        <img
                          src={imagePreview || "/placeholder.svg"}
                          alt="Preview"
                          className="h-full w-full object-cover rounded-xl"
                        />
                      ) : (
                        <>
                          <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                          <span className="text-sm text-muted-foreground">Click to upload or drag and drop</span>
                        </>
                      )}
                    </label>
                  </div>
                </div>

                <Button
                  onClick={handleGenerateCaption}
                  disabled={isGenerating}
                  className="w-full h-12 text-base font-semibold bg-gradient-to-r from-primary to-accent hover:opacity-90"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  {isGenerating ? "Generating..." : "Generate AI Caption"}
                </Button>

                <div className="space-y-2">
                  <Label htmlFor="caption">Caption</Label>
                  <Textarea
                    id="caption"
                    placeholder="AI-generated caption will appear here..."
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    rows={6}
                    className="resize-none"
                  />
                </div>

                <Button className="w-full h-11" disabled={!caption}>
                  Schedule Post
                </Button>
              </div>
            </Card>
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
