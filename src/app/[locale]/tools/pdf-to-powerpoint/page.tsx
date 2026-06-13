import ToolTemplate from '@/components/ToolTemplate';
import { Presentation } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function PdfToPowerpointPage() {
  return (
    <ToolTemplate 
      title="PDF إلى PowerPoint"
      description="حول ملفات PDF إلى عروض تقديمية قابلة للتعديل"
      icon={<Presentation className="w-10 h-10" />}
      apiEndpoint={"https://sanad-platform-backend.vercel.app/api/pdf/pdf-to-powerpoint"}
      acceptedFileTypes={{ 'application/pdf': ['.pdf'] }}
      themeColor="orange"
    />
  );
}
