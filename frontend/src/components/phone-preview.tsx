import { Card } from "@/components/ui/card"
import { Instagram, Linkedin, Facebook, Heart, MessageCircle, Send, Bookmark } from "lucide-react"

type PhonePreviewProps = {
  platform: "linkedin" | "instagram" | "facebook"
  caption: string
  imageUrl: string
  productName: string
}

export function PhonePreview({ platform, caption, imageUrl, productName }: PhonePreviewProps) {
  const platformIcons = {
    linkedin: Linkedin,
    instagram: Instagram,
    facebook: Facebook,
  }

  const PlatformIcon = platformIcons[platform]

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-lg font-semibold mb-4">Live Preview</h3>
      <Card className="w-full max-w-sm bg-card border-2 border-border rounded-[3rem] p-3 shadow-2xl">
        <div className="bg-background rounded-[2.5rem] overflow-hidden h-[600px] flex flex-col">
          {/* Phone Header */}
          <div className="flex items-center justify-between p-3 border-b border-border">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <PlatformIcon className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-sm capitalize">{platform}</span>
            </div>
          </div>

          {/* Post Content */}
          <div className="flex-1 overflow-y-auto">
            {/* Image */}
            {imageUrl ? (
              <img src={imageUrl || "/placeholder.svg"} alt="Post" className="w-full aspect-square object-cover" />
            ) : (
              <div className="w-full aspect-square bg-muted flex items-center justify-center">
                <div className="text-center p-6">
                  <PlatformIcon className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Upload an image to see preview</p>
                </div>
              </div>
            )}

            {/* Interactions */}
            <div className="p-3 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Heart className="h-6 w-6" />
                  <MessageCircle className="h-6 w-6" />
                  <Send className="h-6 w-6" />
                </div>
                <Bookmark className="h-6 w-6" />
              </div>

              <div className="space-y-2">
                <p className="font-semibold text-sm">2,847 likes</p>
                {caption && (
                  <div className="text-sm leading-relaxed">
                    <span className="font-semibold mr-2">{productName || "Your Business"}</span>
                    <span className="whitespace-pre-wrap">{caption}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
