import os

pages = {
    "src/app/[locale]/dashboard/ads/page.tsx": """import React from 'react';
export default function AdsPage() {
  return <div className="p-8"><h1>إدارة الإعلانات</h1><p>هذه الصفحة قيد التطوير.</p></div>;
}""",
    "src/app/[locale]/dashboard/files/page.tsx": """import React from 'react';
export default function FilesPage() {
  return <div className="p-8"><h1>إدارة الملفات</h1><p>هذه الصفحة قيد التطوير.</p></div>;
}""",
    "src/app/[locale]/dashboard/layout.tsx": """import React from 'react';
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <div className="dashboard-layout">{children}</div>;
}""",
    "src/app/[locale]/dashboard/page.tsx": """import React from 'react';
export default function DashboardPage() {
  return <div className="p-8"><h1>لوحة التحكم</h1><p>مرحباً بك في لوحة التحكم.</p></div>;
}""",
    "src/app/[locale]/dashboard/settings/page.tsx": """import React from 'react';
export default function SettingsPage() {
  return <div className="p-8"><h1>الإعدادات</h1><p>هذه الصفحة قيد التطوير.</p></div>;
}""",
    "src/app/[locale]/dashboard/users/page.tsx": """import React from 'react';
export default function UsersPage() {
  return <div className="p-8"><h1>إدارة المستخدمين</h1><p>هذه الصفحة قيد التطوير.</p></div>;
}""",
    "src/app/[locale]/login/page.tsx": """import React from 'react';
export default function LoginPage() {
  return <div className="p-8 max-w-md mx-auto"><h1>تسجيل الدخول</h1><p>صفحة تسجيل الدخول قيد التطوير.</p></div>;
}""",
    "src/app/[locale]/pricing/page.tsx": """import React from 'react';
export default function PricingPage() {
  return <div className="p-8 text-center"><h1>الباقات والأسعار</h1><p>تفاصيل الباقات قيد التطوير.</p></div>;
}""",
    "src/app/[locale]/register/page.tsx": """import React from 'react';
export default function RegisterPage() {
  return <div className="p-8 max-w-md mx-auto"><h1>إنشاء حساب جديد</h1><p>صفحة التسجيل قيد التطوير.</p></div>;
}""",
    "src/app/sitemap.ts": """import { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://sanad-platform-web.vercel.app', lastModified: new Date() }
  ];
}"""
}

base_dir = r"d:\Python_Projects\sanad-platform-web"
for filepath, content in pages.items():
    full_path = os.path.join(base_dir, os.path.normpath(filepath))
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    with open(full_path, "w", encoding="utf-8") as f:
        f.write(content)

print("Fixed corrupted pages.")
