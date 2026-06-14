import ToolTemplate from '@/components/ToolTemplate';
import { Unlock } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function UnlockPdfPage() {
  return (
    <ToolTemplate 
      title="فك حماية PDF"
      description="أزل كلمة المرور من ملف PDF (يجب أن تعرف الكلمة الأصلية)"
      icon={<Unlock className="w-10 h-10" />}
      apiEndpoint={"https://sanad-platform-backend.vercel.app/api/pdf/unlock-pdf"}
      acceptedFileTypes={{ 'application/pdf': ['.pdf'] }}
      themeColor="teal"
    />
  );
}
