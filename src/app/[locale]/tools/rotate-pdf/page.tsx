import ToolTemplate from '@/components/ToolTemplate';
import { RotateCw } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function RotatePdfPage() {
  return (
    <ToolTemplate 
      title="تدوير PDF"
      description="قم بتدوير صفحات ملف PDF للاتجاه الصحيح"
      icon={<RotateCw className="w-10 h-10" />}
      apiEndpoint={"https://sanad-platform-backend.vercel.app/api/pdf/rotate-pdf"}
      acceptedFileTypes={{ 'application/pdf': ['.pdf'] }}
      themeColor="orange"
    />
  );
}
