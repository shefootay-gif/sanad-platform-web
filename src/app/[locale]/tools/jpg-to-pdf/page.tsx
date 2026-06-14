import ToolTemplate from '@/components/ToolTemplate';
import { ImageIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function JpgToPdfPage() {
  return (
    <ToolTemplate 
      title="JPG إلى PDF"
      description="حول صورك إلى مستند PDF واحد"
      icon={<ImageIcon className="w-10 h-10" />}
      apiEndpoint={"https://sanad-platform-backend.vercel.app/api/pdf/jpg-to-pdf"}
      acceptedFileTypes={{ 'image/jpeg': ['.jpg', '.jpeg'], 'image/png': ['.png'] }}
      themeColor="purple"
    />
  );
}
