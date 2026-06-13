import ToolTemplate from '@/components/ToolTemplate';
import { Globe } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function HtmlToPdfPage() {
  return (
    <ToolTemplate 
      title="HTML إلى PDF"
      description="حول صفحات الويب إلى ملفات PDF"
      icon={<Globe className="w-10 h-10" />}
      apiEndpoint={"https://sanad-platform-backend.vercel.app/api/pdf/html-to-pdf"}
      acceptedFileTypes={{ 'text/html': ['.html'] }}
      themeColor="cyan"
    />
  );
}
