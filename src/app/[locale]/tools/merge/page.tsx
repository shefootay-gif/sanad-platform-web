import ToolTemplate from '@/components/ToolTemplate';
import { FilePlus2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function MergePage() {
  return (
    <ToolTemplate 
      title="دمج ملفات PDF"
      description="ادمج عدة ملفات PDF في ملف واحد"
      icon={<FilePlus2 className="w-10 h-10" />}
      apiEndpoint={"https://sanad-platform-backend.vercel.app/api/pdf/merge"}
      acceptedFileTypes={{ 'application/pdf': ['.pdf'] }}
      themeColor="blue"
    />
  );
}
