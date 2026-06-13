import ToolTemplate from '@/components/ToolTemplate';
import { Presentation } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function PowerpointToPdfPage() {
  return (
    <ToolTemplate 
      title="PowerPoint إلى PDF"
      description="حول عروض PowerPoint إلى ملفات PDF"
      icon={<Presentation className="w-10 h-10" />}
      apiEndpoint={"https://sanad-platform-backend.vercel.app/api/pdf/powerpoint-to-pdf"}
      acceptedFileTypes={{ 'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx'] }}
      themeColor="orange"
    />
  );
}
