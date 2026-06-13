import ToolTemplate from '@/components/ToolTemplate';
import { Lock } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ProtectPdfPage() {
  return (
    <ToolTemplate 
      title="حماية PDF"
      description="أضف كلمة مرور لحماية ملف PDF الخاص بك"
      icon={<Lock className="w-10 h-10" />}
      apiEndpoint={"https://sanad-platform-backend.vercel.app/api/pdf/protect-pdf"}
      acceptedFileTypes={{ 'application/pdf': ['.pdf'] }}
      themeColor="red"
    />
  );
}
