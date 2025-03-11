import { Facebook, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SocialShareProps {
  title: string
}

export function SocialShare({ title }: SocialShareProps) {
  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Share this article</h3>
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" size="icon" asChild>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="h-4 w-4" />
            <span className="sr-only">Share on Facebook</span>
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="h-4 w-4" />
            <span className="sr-only">Share on Twitter</span>
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">Share on LinkedIn</span>
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <a href={`mailto:?subject=${encodedTitle}&body=${encodedUrl}`}>
            <Mail className="h-4 w-4" />
            <span className="sr-only">Share via Email</span>
          </a>
        </Button>
      </div>
    </div>
  )
}

