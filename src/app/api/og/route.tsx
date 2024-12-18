// app/api/og/route.tsx
import { ImageResponse } from 'next/og';
 
export const runtime = 'edge';
 
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'Sapmate - SAP Training Institute';
    const description = searchParams.get('description') || 'Learn SAP CPI from basics to advanced';
 
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#1e40af',
            padding: '40px 80px',
          }}
        >
          {/* Logo container */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ 
              fontSize: 60, 
              color: 'white', 
              fontWeight: 'bold' 
            }}>
              SAPMATE
            </span>
          </div>
          
          {/* Title */}
          <div
            style={{
              fontSize: 50,
              fontWeight: 'bold',
              color: 'white',
              marginTop: 30,
              lineHeight: 1.2,
              textAlign: 'center',
            }}
          >
            {title}
          </div>
          
          {/* Description */}
          <div
            style={{
              fontSize: 30,
              color: '#93c5fd',
              marginTop: 20,
              textAlign: 'center',
            }}
          >
            {description}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(`${e.message}`);
    } else {
      console.log('An unknown error occurred');
    }
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}