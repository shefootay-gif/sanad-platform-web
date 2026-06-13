import ToolTemplate from '@/components/ToolTemplate';
import { ImageIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function PdfToJpgPage() {
  return (
    <ToolTemplate 
      title="PDF إلى JPG"
      description="حول صفحات PDF إلى صور JPG عالية الدقة"
      icon={<ImageIcon className="w-10 h-10" />}
      apiEndpoint={"https://sanad-platform-backend.vercel.app/api/pdf/pdf-to-jpg"}
      acceptedFileTypes={{ 'application/pdf': ['.pdf'] }}
      themeColor="purple"
    />
  );
}
