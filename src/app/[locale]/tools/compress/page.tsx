import ToolTemplate from '@/components/ToolTemplate';
import { Minimize2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function CompressPage() {
  return (
    <ToolTemplate 
      title="ضغط ملف PDF"
      description="قلل حجم ملفات PDF مع الحفاظ على أفضل جودة ممكنة"
      icon={<Minimize2 className="w-10 h-10" />}
      apiEndpoint={"https://sanad-platform-backend.vercel.app/api/pdf/compress"}
      acceptedFileTypes={{ 'application/pdf': ['.pdf'] }}
      themeColor="green"
    />
  );
}
