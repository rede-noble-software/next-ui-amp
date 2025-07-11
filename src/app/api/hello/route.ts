import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  const serverTime = new Date().toISOString()
  
  return NextResponse.json({
    message: 'Hello from Next.js API Route!',
    serverTime: serverTime,
    environment: process.env.NODE_ENV,
    timestamp: Date.now()
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    return NextResponse.json({
      message: 'Data received successfully',
      receivedData: body,
      serverTime: new Date().toISOString()
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid JSON data' },
      { status: 400 }
    )
  }
}
