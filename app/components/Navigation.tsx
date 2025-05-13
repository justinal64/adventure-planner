'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-green-700 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">Adventure Planner</Link>
          <div className="flex space-x-4">
            <Link 
              href="/meal-planning"
              className={`hover:text-green-200 ${pathname === '/meal-planning' ? 'text-green-200' : ''}`}
            >
              Meal Planning
            </Link>
            <Link 
              href="/hikes"
              className={`hover:text-green-200 ${pathname === '/hikes' ? 'text-green-200' : ''}`}
            >
              Hikes
            </Link>
            <Link 
              href="/backpacking-gear"
              className={`hover:text-green-200 ${pathname === '/backpacking-gear' ? 'text-green-200' : ''}`}
            >
              Gear List
            </Link>
            <Link 
              href="/survival-tips"
              className={`hover:text-green-200 ${pathname === '/survival-tips' ? 'text-green-200' : ''}`}
            >
              Survival Tips
            </Link>
            <Link 
              href="/auth"
              className={`hover:text-green-200 ${pathname === '/auth' ? 'text-green-200' : ''}`}
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}