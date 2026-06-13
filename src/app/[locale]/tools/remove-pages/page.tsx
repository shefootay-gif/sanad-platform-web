import ToolTemplate from '@/components/ToolTemplate';
import { FileMinus } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function RemovePagesPage() {
  return (
    <ToolTemplate 
      title="حذف صفحات"
      description="احذف صفحات غير مرغوب فيها من ملف PDF"
      icon={<FileMinus className="w-10 h-10" />}
      apiEndpoint={"https://sanad-platform-backend.vercel.app/api/pdf/remove-pages"}
      acceptedFileTypes={{ 'application/pdf': ['.pdf'] }}
      themeColor="red"
    />
  );
}
