'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-white/10 bg-black/20 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-white hover:text-white/90 transition">
            Adventure Planner
          </Link>
          <div className="flex space-x-6">
            <Link 
              href="/meal-planning"
              className={`nav-link ${pathname === '/meal-planning' ? 'nav-link-active' : ''}`}
            >
              Meal Planning
            </Link>
            <Link 
              href="/hikes"
              className={`nav-link ${pathname === '/hikes' ? 'nav-link-active' : ''}`}
            >
              Hikes
            </Link>
            <Link 
              href="/backpacking-gear"
              className={`nav-link ${pathname === '/backpacking-gear' ? 'nav-link-active' : ''}`}
            >
              Gear List
            </Link>
            <Link 
              href="/survival-tips"
              className={`nav-link ${pathname === '/survival-tips' ? 'nav-link-active' : ''}`}
            >
              Survival Tips
            </Link>
            <Link 
              href="/auth"
              className={`nav-link ${pathname === '/auth' ? 'nav-link-active' : ''}`}
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}