import ToolTemplate from '@/components/ToolTemplate';
import { Archive } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function PdfToPdfaPage() {
  return (
    <ToolTemplate 
      title="PDF إلى PDF/A"
      description="حول ملفات PDF إلى صيغة الأرشفة PDF/A"
      icon={<Archive className="w-10 h-10" />}
      apiEndpoint={"https://sanad-platform-backend.vercel.app/api/pdf/pdf-to-pdfa"}
      acceptedFileTypes={{ 'application/pdf': ['.pdf'] }}
      themeColor="slate"
    />
  );
}
