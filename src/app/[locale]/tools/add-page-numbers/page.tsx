import ToolTemplate from '@/components/ToolTemplate';
import { ListOrdered } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function AddPageNumbersPage() {
  return (
    <ToolTemplate 
      title="إضافة أرقام الصفحات"
      description="أضف أرقاماً لصفحات ملف PDF"
      icon={<ListOrdered className="w-10 h-10" />}
      apiEndpoint={"https://sanad-platform-backend.vercel.app/api/pdf/add-page-numbers"}
      acceptedFileTypes={{ 'application/pdf': ['.pdf'] }}
      themeColor="blue"
    />
  );
}
