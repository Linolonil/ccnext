// app/api/revalidate/route.ts
import { NextResponse } from 'next/server';
import { revalidateTag, revalidatePath } from 'next/cache';

interface RevalidateRequest {
  tags?: string[];
  paths?: string[];
}

export async function POST(request: Request) {
  // 1. Autenticação consistente
  const authHeader = request.headers.get('authorization');
  const expectedAuth = `Bearer ${process.env.REVALIDATION_SECRET}`;
  
  if (!authHeader || authHeader !== expectedAuth) {
    console.error('Falha na autenticação');
    return NextResponse.json(
      { success: false, error: 'Unauthorized' }, 
      { status: 401 }
    );
  }

  // 2. Validação do corpo
  let body: RevalidateRequest;
  try {
    body = await request.json();
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { success: false, error: 'Invalid JSON body' },
      { status: 400 }
    );
  }

  // 3. Processamento
  try {
    const { tags = [], paths = [] } = body;

    // Validar tipos
    if (!Array.isArray(tags) || !Array.isArray(paths)) {
      throw new Error('Tags and paths must be arrays');
    }

    // Executar revalidações
    tags.forEach(tag => {
      revalidateTag(tag);
      console.log(`Revalidated tag: ${tag}`);
    });

    paths.forEach(path => {
      revalidatePath(path);
      console.log(`Revalidated path: ${path}`);
    });

    return NextResponse.json({ 
      success: true,
      revalidated: { tags, paths }
    });

  } catch (error) {
    console.error('Revalidation error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Revalidation failed' 
      },
      { status: 500 }
    );
  }
}