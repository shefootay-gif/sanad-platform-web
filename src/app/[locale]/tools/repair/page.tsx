import ToolTemplate from '@/components/ToolTemplate';
import { Wrench } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function RepairPage() {
  return (
    <ToolTemplate 
      title="إصلاح PDF"
      description="أصلح ملفات PDF التالفة والمعطوبة"
      icon={<Wrench className="w-10 h-10" />}
      apiEndpoint={"https://sanad-platform-backend.vercel.app/api/pdf/repair"}
      acceptedFileTypes={{ 'application/pdf': ['.pdf'] }}
      themeColor="orange"
    />
  );
}
