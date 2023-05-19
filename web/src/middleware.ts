import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const githubClientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID
const signInURL = `https://github.com/login/oauth/authorize?client_id=${githubClientId}`

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  if (!token) {
    return NextResponse.redirect(signInURL, {
      headers: {
        'Set-Cookie': `redirectTo=${request.url}; Path=/; httpOnly; max-age=20;`,
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/memories/:path*',
}
