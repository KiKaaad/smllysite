import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const isInMaintenanceMode = process.env.MAINTENANCE_MODE === 'true';
    const { pathname } = req.nextUrl;

    if (isInMaintenanceMode && !pathname.startsWith('/maintenance') && !pathname.startsWith('/_next')) {
        return NextResponse.redirect(new URL('/maintenance', req.url));
    }

    return NextResponse.next();
}
