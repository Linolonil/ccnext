"use client"


import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"

// This would normally come from a database or API
const initialComments = [
  {
    id: 1,
    author: {
      name: "Michael Chen",
      image: "/placeholder.svg?height=40&width=40",
    },
    date: "February 16, 2024",
    content:
      "This is an excellent analysis of the recent changes. I particularly appreciated the section on ESG reporting requirements, as this is becoming increasingly important for our clients.",
  },
  {
    id: 2,
    author: {
      name: "Rebecca Wilson",
      image: "/placeholder.svg?height=40&width=40",
    },
    date: "February 16, 2024",
    content:
      "Thank you for breaking down these complex changes in such an accessible way. The practical implications section was particularly helpful for understanding how these changes will affect day-to-day operations.",
  },
]

export function CommentSection() {
  const [comments, setComments] = useState(initialComments)
  const [newComment, setNewComment] = useState("")

  const handleSubmitComment = (e) => {
    e.preventDefault()
    if (!newComment.trim()) return

    const comment = {
      id: comments.length + 1,
      author: {
        name: "You",
        image: "/placeholder.svg?height=40&width=40",
      },
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      content: newComment,
    }

    setComments([...comments, comment])
    setNewComment("")
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Comments ({comments.length})</h2>

      <form onSubmit={handleSubmitComment} className="space-y-4">
        <Textarea
          placeholder="Share your thoughts..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="min-h-[100px]"
        />
        <Button type="submit">Post Comment</Button>
      </form>

      <Separator />

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="space-y-2">
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage src={comment.author.image} alt={comment.author.name} />
                <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{comment.author.name}</div>
                <div className="text-xs text-muted-foreground">{comment.date}</div>
              </div>
            </div>
            <p className="text-sm">{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

