import { connectDB } from "@/lib/dbConnect";
import Post from "@/models/Post";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { slug } = await request.json();

    if (!slug || typeof slug !== 'string') {
      return new NextResponse(null, { status: 400 }); // Resposta vazia para erros
    }

    await connectDB();

    const result = await Post.updateOne(
      { slug },
      { $inc: { views: 1 } }
    );

    if (result.matchedCount === 0) {
      return new NextResponse(null, { status: 404 });
    }

    return new NextResponse(null, { status: 204 }); // 204 No Content para sucesso

  } catch (error) {
    console.error("Erro ao incrementar visualizações:", error);
    return new NextResponse(null, { status: 500 });
  }
}