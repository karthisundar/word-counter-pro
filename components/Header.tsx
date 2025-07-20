'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FileText } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/lib/utils';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 text-xl font-bold text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <FileText className="h-6 w-6" />
            <span>WordCount Pro</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <nav className="flex space-x-8">
              <Link 
                href="/" 
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400",
                  pathname === '/' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'
                )}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400",
                  pathname === '/about' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'
                )}
              >
                About
              </Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}