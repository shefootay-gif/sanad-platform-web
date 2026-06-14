import ToolTemplate from '@/components/ToolTemplate';
import { Scissors } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function SplitPage() {
  return (
    <ToolTemplate 
      title="تقسيم ملف PDF"
      description="قسم ملف PDF إلى ملفات منفصلة"
      icon={<Scissors className="w-10 h-10" />}
      apiEndpoint={"https://sanad-platform-backend.vercel.app/api/pdf/split"}
      acceptedFileTypes={{ 'application/pdf': ['.pdf'] }}
      themeColor="orange"
    />
  );
}
