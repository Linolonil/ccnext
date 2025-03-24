import { connectDB } from "@/lib/dbConnect"
import Post from "@/models/Post"
import { type NextRequest, NextResponse } from "next/server"


export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { slug } = body

    if (!slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 })
    }

    await connectDB()

    // Find post and increment view count
    const post = await Post.findOneAndUpdate({ slug }, { $inc: { views: 1 } }, { new: true })

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, views: post.views })
  } catch (error) {
    console.error("Error incrementing view count:", error)
    return NextResponse.json({ error: "Failed to increment view count" }, { status: 500 })
  }
}

