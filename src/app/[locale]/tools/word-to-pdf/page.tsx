import ToolTemplate from '@/components/ToolTemplate';
import { FileText } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function WordToPdfPage() {
  return (
    <ToolTemplate 
      title="Word إلى PDF"
      description="حول مستندات Word إلى ملفات PDF"
      icon={<FileText className="w-10 h-10" />}
      apiEndpoint={"https://sanad-platform-backend.vercel.app/api/pdf/word-to-pdf"}
      acceptedFileTypes={{ 'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'] }}
      themeColor="blue"
    />
  );
}
