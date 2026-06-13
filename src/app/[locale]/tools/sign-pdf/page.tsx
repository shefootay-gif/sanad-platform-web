import ToolTemplate from '@/components/ToolTemplate';
import { PenTool } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function SignPdfPage() {
  return (
    <ToolTemplate 
      title="توقيع PDF"
      description="أضف توقيعك الإلكتروني على ملف PDF"
      icon={<PenTool className="w-10 h-10" />}
      apiEndpoint={"https://sanad-platform-backend.vercel.app/api/pdf/sign-pdf"}
      acceptedFileTypes={{ 'application/pdf': ['.pdf'] }}
      themeColor="indigo"
    />
  );
}
