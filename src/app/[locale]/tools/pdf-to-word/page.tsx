import ToolTemplate from '@/components/ToolTemplate';
import { FileText } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function PdfToWordPage() {
  return (
    <ToolTemplate 
      title="PDF إلى Word"
      description="حول ملفات PDF إلى مستندات Word سهلة التعديل"
      icon={<FileText className="w-10 h-10" />}
      apiEndpoint={"https://sanad-platform-backend.vercel.app/api/pdf/pdf-to-word"}
      acceptedFileTypes={{ 'application/pdf': ['.pdf'] }}
      themeColor="blue"
    />
  );
}
