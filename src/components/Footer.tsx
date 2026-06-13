'use client';

import React from 'react';
import { Link } from '@/i18n/routing';
import { ShieldCheck, Heart, Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600 text-white">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">سند</span>
                <span className="text-xl" title="مصر">🇪🇬</span>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-sm leading-relaxed">
              منصة سند هي خيارك الأول والأكثر أماناً للتعامل مع كافة ملفاتك بصيغة PDF. أدوات احترافية، دقة عالية، وسرعة فائقة في الإنجاز.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-6 text-lg">روابط سريعة</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">الرئيسية</Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">باقات الأسعار</Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">لوحة التحكم</Link>
              </li>
            </ul>
          </div>

          {/* Top Tools */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-6 text-lg">أهم الأدوات</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/tools/merge" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">دمج PDF</Link>
              </li>
              <li>
                <Link href="/tools/split" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">تقسيم PDF</Link>
              </li>
              <li>
                <Link href="/tools/compress" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">ضغط PDF</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {currentYear} منصة سند. جميع الحقوق محفوظة.
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-1">
            صُنع بحب <Heart className="w-4 h-4 text-red-500 inline fill-current" /> في مصر
          </p>
        </div>
      </div>
    </footer>
  );
}
