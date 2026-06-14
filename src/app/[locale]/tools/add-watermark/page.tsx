import ToolTemplate from '@/components/ToolTemplate';
import { Stamp } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function AddWatermarkPage() {
  return (
    <ToolTemplate 
      title="إضافة علامة مائية"
      description="أضف نصاً كعلامة مائية على صفحات PDF"
      icon={<Stamp className="w-10 h-10" />}
      apiEndpoint={"https://sanad-platform-backend.vercel.app/api/pdf/add-watermark"}
      acceptedFileTypes={{ 'application/pdf': ['.pdf'] }}
      themeColor="purple"
    />
  );
}
