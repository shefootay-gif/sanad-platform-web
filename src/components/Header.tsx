'use client';

import React from 'react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { LogIn, UserPlus, ShieldCheck } from 'lucide-react';

export default function Header() {
  const t = useTranslations('Index'); // Adjust if you have a specific namespace for navigation

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300 transform group-hover:-translate-y-1">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  سند
                </span>
                <img src="https://flagcdn.com/eg.svg" alt="مصر" title="مصر" className="w-6 h-4 ml-1 rounded-sm shadow-sm" />
              </div>
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400 tracking-wider">
                للملفات الذكية
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-bold text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            الرئيسية
          </Link>
          <Link href="/pricing" className="text-sm font-bold text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            باقات الأسعار
          </Link>
          <Link href="/dashboard" className="text-sm font-bold text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            لوحة التحكم
          </Link>
        </nav>

        {/* Auth Buttons & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <Link href="/login" className="hidden sm:flex items-center justify-center px-5 py-2.5 text-sm font-bold text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl transition-all duration-300">
            <LogIn className="w-4 h-4 mr-2" />
            دخول
          </Link>
          <Link href="/register" className="hidden sm:flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
            <UserPlus className="w-4 h-4 mr-2" />
            حساب جديد
          </Link>
          
          <button 
            className="md:hidden flex items-center justify-center p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-lg py-4 px-4 flex flex-col gap-4">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold text-gray-700 dark:text-gray-200 hover:text-blue-600">
            الرئيسية
          </Link>
          <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold text-gray-700 dark:text-gray-200 hover:text-blue-600">
            باقات الأسعار
          </Link>
          <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold text-gray-700 dark:text-gray-200 hover:text-blue-600">
            لوحة التحكم
          </Link>
          <div className="flex flex-col gap-2 pt-4 border-t border-gray-100 dark:border-gray-800">
            <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center px-5 py-2.5 text-sm font-bold text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-xl">
              <LogIn className="w-4 h-4 mr-2" />
              دخول
            </Link>
            <Link href="/register" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl">
              <UserPlus className="w-4 h-4 mr-2" />
              حساب جديد
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
