import ToolTemplate from '@/components/ToolTemplate';
import { FileSymlink } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ExtractPagesPage() {
  return (
    <ToolTemplate 
      title="استخراج صفحات"
      description="استخرج صفحات معينة من ملف PDF"
      icon={<FileSymlink className="w-10 h-10" />}
      apiEndpoint={"https://sanad-platform-backend.vercel.app/api/pdf/extract-pages"}
      acceptedFileTypes={{ 'application/pdf': ['.pdf'] }}
      themeColor="teal"
    />
  );
}
